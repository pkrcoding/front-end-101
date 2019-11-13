import React, {useState} from 'react';


const SimpleCalculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const sum = (a,b) => parseInt(a)+parseInt(b);
    return(
        <div>
            <input type="number" onChange={ e => setNum1(e.target.value)}/>  +
            <input type="number" onChange={ e => setNum2(e.target.value)} /> =
            {sum(num1 , num2) }
        </div>
    );
}

export default SimpleCalculator;