import { useState } from "react/cjs/react.development";
import Display from "./Display";
import Keys from "./Keys";
import { Output } from "./Output";
function Calculator(){

    const[output,setOutput]=useState("0");
    const[display,setDisplay]=useState("");
    const[firstOp,setFirstop]=useState("");
    const[secondOp,setSecondop]=useState("");
    const[operator,setOperator]=useState("");
    
    const handeldec = (e)=>{
        if (output.includes(".")){
            return
        }
        setOutput((prev)=>{
            return prev+e.target.innerHTML;
        })
    }



    const handlenum =(e)=>{
        //no 0 to the left
        if(output[0]==="0"){
        setOutput((prev)=>{
                return prev.substring(1);
            }
    );
        }
        setOutput((prev)=>{
            return prev.toString()+e.target.innerHTML.toString();
        })
    }




    const handleop =(e)=>{
        if((display.includes("*")||display.includes("+")||display.includes("-")||display.includes("/"))&&!display.includes("=")){
            setDisplay((prev)=>{
                return prev.replace(prev[prev.length-1],e.target.innerHTML);
            })
        }
        setDisplay(output+e.target.innerHTML);
        }
    
    const handleeq =()=>{

    }
    const handleclear =()=>{

    }
 
    return (<div id="calculator">
        <Display disp={display}/>
        <Output out={output}/>
        <Keys op={handleop} num={handlenum} dec={handeldec} eq={handleeq} init={handleclear}/>
    </div>)
}

export default Calculator;