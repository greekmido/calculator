
function Keys({eq,dec,op,num,init}){ 
        return ( 
        <div>
            <button  className="key" id="clear" onClick={init}>AC</button>
            <button  className="key" id="seven" onClick={num}>7</button>
            <button  className="key" id="eight" onClick={num}>8</button>
            <button  className="key" id="nine" onClick={num}>9</button>
            <button  className="key" id="division" onClick={op}>/</button>
            <button  className="key" id="four" onClick={num}>4</button>
            <button  className="key" id="five" onClick={num}>5</button>
            <button  className="key" id="six" onClick={num}>6</button>
            <button  className="key" id="multiplication" onClick={op}>*</button>
            <button  className="key" id="one" onClick={num}>1</button>
            <button  className="key" id="two" onClick={num}>2</button>
            <button  className="key" id="three" onClick={num}>3</button>
            <button  className="key" id="addition" onClick={op}>+</button>
            <button  className="key" id="subtraction" onClick={op}>-</button>
            <button  className="key" id="zero" onClick={num}>0</button>
            <button  className="key" id="decimal"onClick={dec}>.</button>
            <button  className="key" id="equals"onClick={eq}>=</button>
            
        </div>
        )
    }
    
    
    export default Keys;