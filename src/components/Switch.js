import React, { useEffect } from 'react';

const Switch = () => {
    const clickHandler = () =>{
        document.body.classList.toggle("dark")
        localStorage.setItem(
            "dark",
            document.body.className
        )
    }
    useEffect(()=>{
        if(localStorage.getItem("dark")){
            document.body.classList.add("dark")
        }
    },[])
    return (
        <label>
            <input type="checkbox" onClick={clickHandler}/>
            <span className='switch'>
                <span  className='handel'/>
            </span>
        </label>
    );
};

export default Switch;