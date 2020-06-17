import React, {Component} from "react";
import ChatMassageFrom from "./ChatMassageFrom";
import ChatMassageAssistance from "./massageType/ChatMassageAssistance";
import ChatMassageTo from "./ChatMassageTo";
import ChatMassageTxt from "./massageType/ChatMassageTxt";
import ChatMassage2 from "./massageType/ChatMassage2";

class Chat extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="chat">
                <ChatMassageFrom sender={"me"} time={"12:20p"}
                                 body={<ChatMassageAssistance title={"Daily grooming assistance"} noteDate={"Dec 1"}
                                                              repeat={"Daily"}
                                                              note={"assist with daily grooming activities such as bathing, teeth, hair"}
                                                              username={"Derek Smith completed"}
                                                              date={"Mar 23 3:23p"}/>}/>
                <ChatMassageTo sender={"me"} time={"12:20p"}
                               body={<ChatMassage2 title={"Chest Pain"}
                                                   date={"FRI Oct 12 4:27 PM"}
                                                   info={"kbecker@gmail.com completed - THU Oct 11 3:29 PM"}
                                                   state={"Severe"}/>}/>

                <ChatMassageTo sender={"sk"} time={"12:20p"}
                               body={<ChatMassageTxt
                                   msg={"I moved Karen’s knitting kit from the study upstairs to the the living room."}/>}/>

                <ChatMassageFrom sender={"me"} time={"12:20p"}
                                 body={<ChatMassageTxt
                                     msg={"That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl."}/>}/>
            </div>
        );
    }

}

export default Chat;