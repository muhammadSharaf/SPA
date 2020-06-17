import React from "react";

const ChatMassageTxt = (props) => {

    return (
        <div>
            <p className="massage-type-note-text" style={{fontStyle: "italic", margin: 0}}>
                {props.msg}
            </p>
        </div>
    )

};

export default ChatMassageTxt;