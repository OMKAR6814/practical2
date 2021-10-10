import React from "react";
import ReactDom from "react-dom";

export default class NewClass extends React.Component
{
    render()
    {
        return(
            <div>
                Username : <input type="text" name="username" /> <br />
                Password : <input type="password" name="password" /> 
            </div>
        );
    }
}