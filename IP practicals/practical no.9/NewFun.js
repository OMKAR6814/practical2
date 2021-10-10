import React from "react";
import ReactDom from "react-dom";

export default function NewFun()
{
    let check;
    check = () => {
        alert("Fill Username and Details.");
    }

   

    return(
        <div>
            <input type="button" value="submit" onclick={check} />
        </div>
    );
}
