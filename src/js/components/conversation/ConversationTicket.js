import React from "react";

const ConversationTicket = (props) => {

    return (
        <div className="conversation-ticket">
            <img src={props.image} className="conversation-ticket-img"/>

            <ul className="conversation-ticket-info">
                <li>
                    <span className="conversation-ticket-info-title">
                            {props.name}
                    </span>
                </li>
                <li>
                    <span className="conversation-ticket-info-subtitle"> {props.subname} </span>
                </li>
                <li>
                    <p className="conversation-ticket-info-msg"> {props.massage} </p>
                </li>
            </ul>

            <div className="conversation-ticket-notification">
                    <span className="conversation-ticket-notification-date">
                            {props.date}
                    </span>
                    <span className="conversation-ticket-notification-count"> {props.count} </span>
            </div>

        </div>
    )

};

export default ConversationTicket;