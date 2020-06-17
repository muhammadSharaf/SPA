import React from "react";

const SideBar = (props) => {

    return (
        <div className="side-bar">
            <ul className="side-bar-utils">
                <li><img src={require("../../media/icons/chat/ico_group.png")} className="side-bar-icon"/></li>
                <li><img src={require("../../media/icons/chat/ico_filter.png")} className="side-bar-icon"/></li>
                <li><img src={require("../../media/icons/chat/ico_search.svg")} className="side-bar-icon"/></li>

                <li style={{position:"absolute", bottom:0}}><img src={require("../../media/icons/chat/ico_search.svg")} className="side-bar-icon"/></li>
            </ul>
        </div>
    )

};

export default SideBar;