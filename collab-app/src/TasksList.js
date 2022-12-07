import React from 'react'; 
import './App.css';

export default class TasksList extends React.Component
{
    constructor(props)
    {
        super(props); 
        this.state = 
        {
            name: 'React', 
            rememberme: false
        };
    }
    render()
    {
        return(
            <div>
                <input className = "tasks" type = "checkbox" /> Task 1
            </div>
        )
    }
}