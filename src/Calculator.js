import { useState } from "react";
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
            
            if(e.target.innerHTML==="-"){
                setisSecondop(false);
                setWorkarea("-");
            }else{
            setFormula((prev)=>{return prev.replace(/[/+*]/,e.target.innerHTML)});
        }
    }
        if (!/[-/+*]/.test(formula)){
            setFormula(workarea+e.target.innerHTML);
            setisSecondop(true);
        }

        if(/[-/+*]/.test(formula[formula.length-1])&&!isSecondop){
            let result =Function("return "+formula+workarea)();
            setEval(true);
            setFormula(result+e.target.innerHTML);
            setWorkarea(Math.round((result + Number.EPSILON) * 10000) / 10000);
        }
        if(formula.includes("=")){
            setFormula(workarea+e.target.innerHTML)
        }

    }
    const handleeq=(e)=> {
        if(/[-/+*]/.test(formula[formula.length-1])){
            let result = Function("return "+formula+workarea)();
            setWorkarea(Math.round((result + Number.EPSILON) * 10000) / 10000);
            setFormula(formula+workarea+"=");
            setisSecondop(false);
            setEval(true);
        }
    }
    const handleclear=(e)=> {
        setEval(false);
        setFormula("");
        setWorkarea("0");
        setisSecondop(false);
    }
 
    return (<div id="calculator">
        <Display disp={formula}/>
        <Output out={workarea}/>
        <Keys op={handleop} num={handlenum} dec={handeldec} eq={handleeq} init={handleclear}/>
    </div>)
}

export default Calculator;