import { useState } from "react/cjs/react.development";
import Display from "./Display";
import Keys from "./Keys";
import { Output } from "./Output";
function Calculator(){

    const[workarea,setWorkarea]=useState("0");
    const[formula,setFormula]=useState("");
    const[isSecondop,setisSecondop]=useState(false);
    const[isEval,setEval]=useState(false);
    const handeldec=(e)=> {
        if (workarea.includes(".")) {
            return;
        }
        setWorkarea((prev) => {
            return prev + e.target.innerHTML;
        });
    }



    const handlenum=(e)=>{
        //no 0 to the left
        if (workarea[0] === "0") {
            setWorkarea((prev) => {
                return prev.substring(1);
            }
            );
        }
        if (((/[-/+*]/.test(formula)&&isSecondop)||isEval)&&/[-/+*]/.test(formula[formula.length-1])) {
            setWorkarea("");
            setisSecondop(false);
            setEval(false); 
        } 
        setWorkarea((prev)=>{
            return prev+e.target.innerHTML;
        });
    }




    const handleop=(e)=> {
        if (/[-/+*]/.test(formula)){
            setFormula((prev)=>{return prev.replace(/[-/+*]/,e.target.innerHTML)});
            console.log(e.target.innerHTML);
        }
        if (!/[-/+*]/.test(formula)){
            setFormula(workarea+e.target.innerHTML);
            setisSecondop(true);
            console.log("checked if no op in formula"+e.target.innerHTML);
        }

        if(/[-/+*]/.test(formula[formula.length-1])&&!isSecondop){
            let result =Function("return "+formula+workarea)();
            setEval(true);
            setFormula(result+e.target.innerHTML);
            setWorkarea(result);
            console.log("checked last char if op")
        }
        if(formula.includes("=")){
            setFormula(workarea+e.target.innerHTML)
            console.log("checked if eval is true");
        }

    }
    const handleeq=(e)=> {
        if(/[-/+*]/.test(formula[formula.length-1])){
            let result = Function("return "+formula+workarea)();
            setWorkarea(result);
            setFormula(formula+workarea+"=");
        }
    }
    const handleclear=(e)=> {
    }
 
    return (<div id="calculator">
        <Display disp={formula}/>
        <Output out={workarea}/>
        <Keys op={handleop} num={handlenum} dec={handeldec} eq={handleeq} init={handleclear}/>
    </div>)
}

export default Calculator;