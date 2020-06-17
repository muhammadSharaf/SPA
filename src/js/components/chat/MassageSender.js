import React from "react";

const MassageSender = (props) => {

    return (

        <div className="massage-sender">
            <img src={require("../../../media/icons/chat/plus.png")} className="massage-sender-add"/>
            <input placeholder={"massage"} className="massage-sender-input"/>
            <img src={require("../../../media/icons/chat/ico-send.png")} className="massage-sender-send"/>
        </div>

    )

};

export default MassageSender;