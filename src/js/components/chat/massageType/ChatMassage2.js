import React from "react";

const ChatMassage2 = (props) => {

    return (
        <div>
            <h5 className="massage-type-title">{props.title}</h5>

            <div className="massage-type-note-container">
                <img src={require("../../../../media/icons/chat/vector_smart_object.png")}
                     className="massage-type2-icon"/>
                <ul className="massage-type-note-list">
                    <li><span className="massage-type-note-text">{props.date}</span></li>
                    <li><span className="massage-type2-info" style={{fontStyle: "italic"}}>{props.info}</span></li>
                </ul>
            </div>

            <div className="massage-type-footer" >
                <div className="massage-type2-state-container">
                    <img src={require("../../../../media/icons/chat/sad.png")}
                         className="massage-type2-icon"/>
                    <span className="massage-type2-state"> {props.state} </span>
                </div>

                <div className="massage-type2-state-container">
                    <img src={require("../../../../media/icons/chat/history.png")}
                         className="massage-type2-icon"/>
                    <span className="massage-type2-state" style={{color:"#536566"}}> View History </span>
                </div>

            </div>

        </div>
    )

};

export default ChatMassage2;