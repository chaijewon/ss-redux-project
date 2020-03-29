import React,{useState,useMemo} from "react";
/*
       int sum=0;
       for(int i=1;i<=10;i++)
       {
           sum+=i
       }
       ===> MapReduce
            =========
            분리=>통합  ==>
       reduce(int a,int b)
              ===== =====
                sum   i
       {
           return a+b;
       }
 */
const getAvg=(numbes)=>{
    console.log("평균값 계산중...")
    if(numbes.length===0) return;
    /*
          ===
          !==
     */
    const sum=numbes.reduce((a,b)=>a+b);
    return sum/numbes.length;
}
function Hooks_useMemo() {
    const [list,setList]=useState([])
    const [number,setNumber]=useState('');
    const onChange=(e)=>{
        setNumber(e.target.value)
    }

    const onInsert=(e)=>{
        const nextList=list.concat(parseInt(number))
        setList(nextList);
        setNumber('');
    }
    const avg=useMemo(()=>getAvg(list),[list]);
   return (
       <div>
           <input type={"text"} value={number} onChange={onChange}/>
           <button onClick={onInsert}>등록</button>
           <ul>
               {list.map((value,key)=>(
                  <li key={key}>{value}</li>
               ))}
           </ul>
           <div>
               평균값:{avg}
           </div>
       </div>
   )
}

export default Hooks_useMemo;