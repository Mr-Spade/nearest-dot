<template>
  <el-container>
    <el-main>
      <el-card class="box-card" @click="new_dot">
        <div v-for="dot in li">
          <Dot :x="dot.x" :y="dot.y" :color="dot.color"></Dot>
        </div>
      </el-card>
    </el-main>
    <el-footer>
      <div class="center">
        <el-button type="primary" @click="calc">计算最近点对</el-button>
        <el-button type="warning" @click="calc_brute">暴力计算最近点对</el-button>
        <el-button type="danger" @click="clear">清空</el-button>
      </div>
      <div class="center">
        <el-button type="primary" @click="calc_meta">计算随机生成点集的最近点对</el-button>
        <el-button type="warning" @click="calc_meta_brute">暴力计算随机生成点集的最近点对</el-button>
      </div>
      <div class="center">
        <el-text class="mx-1">点集大小（2-1000000）：</el-text>
        <el-input-number v-model="num" :min="2" :max="1000000"/>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import Dot from './Dot.vue';
import { ElMessage } from 'element-plus';
import {main,main_brute} from './../script/calc';

export default {
  data(){
    return {
      idx:0,
      li:[],
      num:2
    };
  },
  components:{
    Dot
  },
  methods:{
    new_dot(e){
      this.li.push({'id':this.idx++,'x':e.x,'y':e.y,'color':'normal'});
      ElMessage({
        message: `已添加点(${e.x},${e.y})`,
        type: 'success',
        duration: 1000
      });
    },
    calc(){
      for(var i=0;i<this.idx;i++)
        this.li[i].color='normal';
      let start=Date.now();
      let res=main(this.li);
      if(res[0].id>=0&&res[1].id>=0){
        res.forEach(a=>{
          this.li[a.id].color='answer';
        });
        ElMessage({
          message: `花费${Date.now()-start}ms计算最近点对，为(${res[0].x},${res[0].y})和(${res[1].x},${res[1].y})`,
          type: 'success'
        });
      }
      else{
        ElMessage({
          message: `点集不符合条件，计算失败`,
          type: 'error'
        });
      }
    },
    calc_brute(){
      for(var i=0;i<this.idx;i++)
        this.li[i].color='normal';
      let start=Date.now();
      let res=main_brute(this.li);
      if(res[0].id>=0&&res[1].id>=0){
        res.forEach(a=>{
          this.li[a.id].color='answer';
        });
        ElMessage({
          message: `花费${Date.now()-start}ms暴力计算最近点对，为(${res[0].x},${res[0].y})和(${res[1].x},${res[1].y})`,
          type: 'success'
        });
      }
      else{
        ElMessage({
          message: `点集不符合条件，计算失败`,
          type: 'error'
        });
      }
    },
    calc_meta(){
      let myli=[]
      for(var i=0;i<this.num;i++)
        myli.push({'id':i,'x':Math.floor(Math.random()*1000000),'y':Math.floor(Math.random()*1000000)});
        let start=Date.now();
      let res=main(myli);
      if(res[0].id>=0&&res[1].id>=0){
        ElMessage({
          message: `花费${Date.now()-start}ms计算最近点对，为(${res[0].x},${res[0].y})和(${res[1].x},${res[1].y})`,
          type: 'success'
        });
      }
      else{
        ElMessage({
          message: `点集不符合条件，计算失败`,
          type: 'error'
        });
      }
    },
    calc_meta_brute(){
      let myli=[]
      for(var i=0;i<this.num;i++)
        myli.push({'id':i,'x':Math.floor(Math.random()*1000000),'y':Math.floor(Math.random()*1000000)});
        let start=Date.now();
      let res=main_brute(myli);
      if(res[0].id>=0&&res[1].id>=0){
        ElMessage({
          message: `花费${Date.now()-start}ms暴力计算最近点对，为(${res[0].x},${res[0].y})和(${res[1].x},${res[1].y})`,
          type: 'success'
        });
      }
      else{
        ElMessage({
          message: `点集不符合条件，计算失败`,
          type: 'error'
        });
      }
    },
    clear(){
      this.li=[]
      this.idx=0
    }
  }
}
</script>
  
<style scoped>
  .box-card {
    margin: 0 auto;
    width: 80%;
    height: 75vh;
  }
  .center{
    text-align: center;
    margin: 1vh 0;
  }
</style>