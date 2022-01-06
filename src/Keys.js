
let secondoperand = null;
let showingresult=null;
let incrementing=null;

function Keys({id,value,setworkspace,setresult,text,workspace,result}){
    const reset=()=>{
        setresult("0");
        setworkspace("");
    }

        const handleClick =()=>{
            
            if (id==="clear"){
                reset();
            }
            if(["0","1","2","3","4","5","6","7","8","9","."].includes(value)){
                //dont allow double .
                if(result.includes(".")&&value===".") return
                // dont allow 0 on the left
                if(result[0]==="0") {
                    setresult((prev)=>{
                        return prev.substring(1);
                    }) 
                }
                if(secondoperand){
                    setresult("");
                    secondoperand=false;
                }
                if(showingresult){
                    setresult("");
                    showingresult=false;
                }
                setresult((prev)=>{
                    return prev.toString()+value.toString();
                })
            }
            
            if(["*","+","-","/"].includes(value)){
                if(workspace.includes("*")||workspace.includes("+")||workspace.includes("-")||workspace.includes("/")){
                    setworkspace((prev)=>{
                        return prev.replace(prev[prev.length-1],value);
                    })
                }
                setworkspace(result+value);
                secondoperand=true;
                console.log(secondoperand);
                
            }
            if("="===value){
                if(workspace.includes("=")){
                    setworkspace((prev)=>{   
                        return result+RegExp(/[/*\-+][0-9]+\.?[0-9]*=/g).exec(prev);
                    })
                    incrementing=true;
                }
                if(!workspace.includes("=")){
                    setworkspace((prev)=>{
                        return prev.toString()+result.toString()+value;
                    });
                    setresult(eval(workspace+result).toString());
                    showingresult=true;
                }
            }
            if (incrementing){
                setresult(eval(workspace.slice(0,-1)));
                incrementing=false;
            }
        }
        
        return <div className="key" id={id} value={value} onClick={handleClick}>{text}</div>
    }
    
    
    export default Keys;