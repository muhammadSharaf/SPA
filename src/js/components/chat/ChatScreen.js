import React, { Component } from "react";
import MassageSender from "./MassageSender";
import Chat from "./Chat";

class ChatScreen extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="chat-screen">
                <div className="chat-screen-header">
                    <span className="chat-screen-header-title">{this.props.chatName}</span>

                    <ul className="chat-screen-header-utils">
                        <li><img src={require("../../../media/icons/chat/ico_group.png")} className="chat-screen-header-utils-icon"/></li>
                        <li><img src={require("../../../media/icons/chat/ico_filter.png")} className="chat-screen-header-utils-icon"/></li>
                        <li><img src={require("../../../media/icons/chat/ico_search.svg")} className="chat-screen-header-utils-icon"/></li>
                    </ul>
                </div>

                <Chat/>
                <MassageSender/>
            </div>
        );
    }

}

export default ChatScreen;