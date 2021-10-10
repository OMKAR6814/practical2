import React from "react";
import ReactDom from "react-dom";

export default class StateClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: "Omkar Yadav",
            rollno: "14",
            collegename: this.props.clgname
        }
    }

    render()
    {
        return(
            <div>
                <h1>******State And Props******</h1><br />
                <h2>{this.state.collegename}</h2>
                <h2>Hello TEIT <br />My Name is {this.state.name} and My Roll No is {this.state.rollno} </h2>
                        
            </div>
        )
    }
}