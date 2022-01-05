import Display from "./Display";
import { calcKeys } from "./Api";
import Keys from "./Keys";
import { useState } from "react";


function Calculator(){
    const [workSpace,setWorkSpace]=useState("")
    const [result,setResult]=useState("0");
    const reset = ()=>{
        setWorkSpace("");
        setResult("0");
    }
    
    const getKeys = calcKeys.map((val)=>{
        return <Keys id={val.id} value={val.value} text={val.text} trigger={val.trigger} setworkspace={setWorkSpace} setresult={setResult} workspace={workSpace} result={result} />
    })
    return (<div id="calculator">
        <Display workspace={workSpace} result={result}/>
        {getKeys}
    </div>)
}

export default Calculator;