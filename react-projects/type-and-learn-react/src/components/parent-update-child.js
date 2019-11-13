import React, {useState} from 'react';
export const Child = ({clicks}) => {
    return(
    <div>Click Count : {clicks}</div>
    )
}
export const Parent = () => {
    const [clicks, setClickCount] = useState(0);
    return (
        <div>
            <button onClick={e => {
            e.preventDefault();
            setClickCount(clicks +1);
            }}>Count Clicks</button>
            <Child clicks={clicks}></Child>
        </div>
        
    )
}

