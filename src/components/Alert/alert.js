import React from "react";
import "./alert.scss"


export const Alert = () => {


    return (
        <div className="Alert-box-span">
            Set alert on your email: <input type="text" email="email" /> <input type="submit" value="send"/>
        </div>

    )
}