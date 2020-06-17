import React from "react";

const ChatMassageFrom = (props) => {

    return (
        <div className="chat-massage-from">
            <div className="chat-massage-container">
                <div className="chat-massage-bubble-from">
                    {props.body}
                </div>

                <div className="massage-info">
                    <span className="massage-info-name">{props.sender}</span>
                    <div className="massage-info-sub">
                        <span className="massage-info-date">{props.time}</span>
                        <img src={require("../../../media/images/conversation/human-placeholder.jpg")}
                             className="massage-info-img"/>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default ChatMassageFrom;