import { useState } from "react/cjs/react.development";
import Display from "./Display";
import Keys from "./Keys";
import { Output } from "./Output";
function Calculator(){

    const[workarea,setWorkarea]=useState("0");
    const[formula,setFormula]=useState("");
    const[isSecondop,setisSecondop]=useState(null);
    function handeldec(e) {
        if (workarea.includes(".")) {
            return;
        }
        setWorkarea((prev) => {
            return prev + e.target.innerHTML;
        });
    }



    function handlenum(e) {
        //no 0 to the left
        if (workarea[0] === "0") {
            setWorkarea((prev) => {
                return prev.substring(1);
            }
            );
        }
        if (/[-/+*]/.test(formula)&&isSecondop) {
            setWorkarea("");
            setisSecondop(false);
        } 
        setWorkarea((prev)=>{
            return prev+e.target.innerHTML;
        });
    }




    function handleop(e) {
        if (/[-/+*]/.test(formula)){
            setFormula((prev)=>{
                return prev.replace(/[-/+*]/,e.target.innerHTML);
            })
        }else{
        setFormula(workarea+e.target.innerHTML);
        setisSecondop(true);
        }
        if(setisSecondop&&/[-/+*]/.test(formula)){
            setFormula((prev)=>{
                return Function(prev+workarea);
            })
        }

    }
    function handleeq(e) {
    }
    function handleclear(e) {
    }
 
    return (<div id="calculator">
        <Display disp={formula}/>
        <Output out={workarea}/>
        <Keys op={handleop} num={handlenum} dec={handeldec} eq={handleeq} init={handleclear}/>
    </div>)
}

export default Calculator;