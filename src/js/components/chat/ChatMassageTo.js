import React from "react";

const ChatMassageTo = (props) => {

    return (
        <div className="chat-massage-to">
            <div className="chat-massage-container">
                <div className="chat-massage-bubble-to">
                    {props.body}
                </div>

                <div className="massage-info">
                    <div className="massage-info-sub">
                        <img src={require("../../../media/images/conversation/human-placeholder.jpg")}
                             className="massage-info-img"/>
                        <span className="massage-info-name">{props.sender}</span>
                    </div>
                    <span className="massage-info-date">{props.time}</span>
                </div>
            </div>
        </div>
    )

};

export default ChatMassageTo;