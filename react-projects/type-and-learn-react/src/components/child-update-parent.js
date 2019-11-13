import React, {useState} from 'react';
export const Child1 = ({clickHandler, clicks}) => {
    return(
    <div>
        <button onClick={e => {
            e.preventDefault();
            clickHandler();
            }}>Count Clicks</button>
            {clicks}
    </div>
    )
}
export const Parent1 = () => {
    const [clicks, setClickCount] = useState(0);
    const handler= () => {
        setClickCount(clicks+1);
    }
    return (
        <div>
            <Child1 clickHandler={handler} clicks={clicks} ></Child1>
            Click Count : {clicks}
        </div>
        
    )
}
