import React, {useState} from "react";


export default class InputTask extends React.Component
{
    constructor(props)
    {
        super(props); 
    }

    // const[data,setData] = useState(null);

    getData(val)
    {
        console.warn(val);
    }

    render()
    {
        return(
            <div className = "input-box">
                <input className = "input" type = "text"> + New Task </input>
            </div>
        )
    }
}