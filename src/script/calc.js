let n=0
let p=[]

function dis(a){
    return Math.sqrt((a[0].x-a[1].x)*(a[0].x-a[1].x)+(a[0].y-a[1].y)*(a[0].y-a[1].y));
}

function solve(l,r){
    if(r-l<=1)
        return [{'id':-2,'x':-Infinity,'y':-Infinity},{'id':-1,'x':Infinity,'y':Infinity}];
    let mid=Math.floor((l+r)/2),dio=p[mid-1].x;
    var d1=solve(l,mid),d2=solve(mid,r);
    let d,res;
    if(dis(d1)<dis(d2))
        res=d=d1;
    else
        res=d=d2;
    let list=[],idx=mid;
    for(var i=l;i<mid;i++){
        if(p[i].x<dio-dis(d))
            continue;
        while(idx<r&&p[idx].y<=p[i].y+dis(d)){
            if(p[idx].x<=dio+dis(d))
                list.push(p[idx]);
            idx++;
        }
        while(list.length>0&&list[0].y<p[i].y-dis(d))
            list.shift();
        list.forEach(q=>{
            if(dis([p[i],q])<dis(res))
                res=[p[i],q];
        });
    }
    list=[];
    var i=l,j=mid,k=0;
    while(i<mid&&j<r)
        if(p[i].y<p[j].y)
            list[k++]=p[i++];
        else
            list[k++]=p[j++];
    while(i<mid)
        list[k++]=p[i++];
    while(j<r)
        list[k++]=p[j++];
    for(i=l;i<r;i++)
        p[i]=list[i-l];
    return res;
}

export function main(myp){
    n=myp.length;
    p=[];
    for(var i=0;i<myp.length;i++)
        p.push(myp[i]);
    p.sort((a,b)=>{return a.x-b.x});
    return solve(0,n);
}

export function main_brute(myp){
    n=myp.length;
    p=[];
    for(var i=0;i<myp.length;i++)
        p.push(myp[i]);

    let res=[{'id':-2,'x':-Infinity,'y':-Infinity},{'id':-1,'x':Infinity,'y':Infinity}];
    for(var i=0;i<n;i++)
        for(var j=i+1;j<n;j++)
            if(dis([p[i],p[j]])<dis(res))
                res=[p[i],p[j]];
    return res;
}