import React, {Component} from "react";
import ConversationTicket from "./ConversationTicket";

class ConversationList extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        //Should retrieve conversations
    }

    render() {
        return (
            <div className="conversation-list-container">
                <div className="conversation-list-header">
                    <span className="conversation-list-header-title">Conversation</span>
                    <img src={require("../../../media/icons/conversation/new_conversation.svg")}
                         className="conversation-list-header-icon"/>
                </div>

                <div className="conversation-tickets-container">
                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"}  count={"2"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"} count={"2"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"} count={"2"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"} count={"2"}/>

                    <ConversationTicket image={require("../../../media/images/conversation/human-placeholder.jpg")}
                                        name={"Mom's Discharge Plan"} subname={"Karen Becker"}
                                        massage={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                                        date={"Oct 12"} count={"2"}/>
                </div>

            </div>
        );
    }

}

export default ConversationList;