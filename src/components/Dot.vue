<template>
    <div class="dot" :style="{'--px':`${parseInt(this.x)-5}px`,'--py':`${parseInt(this.y)-5}px`,'--color':tcolor}">
    </div>
</template>

<script>
export default {
    props:['x','y','color'],
    computed:{
        tcolor(){
            if(this.color=='normal')
                return '#a0cfff';
            else
                return '#fab6b6';
        }
    }
}
</script>

<style scoped>
 .dot {
  height: 10px;
  width: 10px;
  background-color: var(--color);
  border-radius: 50%;
  display: inline-block;

  position: absolute;
  left: var(--px);
  top: var(--py);
}
</style>