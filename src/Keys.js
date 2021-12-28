


function Keys({id,value,setworkspace,setresult,text,workspace,result}){
    const reset=()=>{
        setresult(0);
        setworkspace("");
    }
 
    const handleClick =()=>{
            if (id==="clear"){
                reset();
            }if(["0","1","2","3","4","5","6","7","8","9"].includes(value)){
                setworkspace((prev)=>{
                    console.log(value);
                   return prev+value;
                })
            }if(["*","+","-","/"]){

            }
        }
    
    return <div className="key" id={id} value={value} onClick={handleClick}>{text}</div>
}


export default Keys;