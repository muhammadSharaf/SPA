import React from "react";

const ChatMassageAssistance = (props) => {

    return (
        <div>
            <h5 className="massage-type-title">{props.title}</h5>

            <div className="massage-type-note-container">
                <img src={require("../../../../media/icons/chat/vector_smart_object.png")}
                     className="massage-type-icon"/>
                <ul className="massage-type-note-list">
                    <li><span className="massage-type-note-text">{props.noteDate}</span></li>
                    <li><span className="massage-type-note-text" style={{fontStyle: "italic"}}>{props.repeat}</span></li>
                </ul>
            </div>

            <div className="massage-type-note-container">
                <img src={require("../../../../media/icons/chat/notes_26.png")}
                     className="massage-type-icon"/>
                <p className="massage-type-note-text" style={{fontStyle: "italic", margin:0}}>
                    {props.note}
                </p>
            </div>

            <div className="massage-type-footer" >
                <div className="massage-type-btn">
                    <img src={require("../../../../media/icons/chat/check_light.png")}
                         className="massage-type-btn-icon"/>
                         <span className="massage-type-btn-txt"> done </span>
                </div>

                <div className="massage-type-footer-user">
                    <ul className="massage-type-note-list" dir="rtl">
                        <li><span className="massage-type-footer-user-txt ">{props.username}</span></li>
                        <li><span className="massage-type-footer-user-txt ">{props.date}</span></li>
                    </ul>
                    <img src={require("../../../../media/images/conversation/human-placeholder.jpg")}
                         className="massage-info-img" style={{marginTop: "4px"}}/>
                </div>
            </div>

        </div>
    )

};

export default ChatMassageAssistance;