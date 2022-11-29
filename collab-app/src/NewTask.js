import React from "react"; 

export default class NewTask extends React.Component
{
    constructor(props)
    {
        super(props); 
        this.state = {
            value: null,
        };
    }

    toCreateTask()
    {
        <div className = "input-flex">
            <div className = "inputBox"> Create Task</div>
            <div className = "createTask"> 
                <img src = "../createLogo.png"/>
            </div>
        </div>
    }

    render()
    {
        return(
            <button className = "newTask" onClick = {() => 
                console.log('creating new task')}>
                    {this.props.value}
                </button>
        )
    }
}