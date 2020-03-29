import React,{useState,useMemo,useCallback} from "react";

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
/*
    void onChage(){}

    onChange()
    onChange()
    onChange()

*/
function Hooks_useCallback() {
    const [list,setList]=useState([])
    const [number,setNumber]=useState('');

    const onChange=useCallback((e)=>{
        setNumber(e.target.value)
    },[])

    const onInsert=useCallback((e)=>{
        const nextList=list.concat(parseInt(number))
        setList(nextList);
        setNumber('');
    },[number,list])
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

export default Hooks_useCallback;