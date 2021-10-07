import React, {useState} from 'react';
import styles from './ChetBox.module.css'

/*
{
    "roomId": 11,
    "fromName": "from name2",
    "fromNumber": "054-122222",
    "body": [
        {
            "receivedAt": "2021-08-30 18:09:35",
            "body": "lorem ipsum lorem?",
            "direction": "incoming"
        }
    ]
} */
const ChatBox = ({roomId, fromName, fromNumber, body }) => {
    const [openChatBox, setOpenChatBox] = useState(false)

    const handleOpenChatBoxClick = (e) => {
        e.preventDefault()
        setOpenChatBox(!openChatBox)
    }

    return(
        <div className={styles.chatBox} onClick={handleOpenChatBoxClick}>
            <div>Chat box header</div>
            <div>Room ID : {roomId}</div>
            <div>From : {fromName}</div>
            <div>Number : {fromNumber}</div>

            {openChatBox && body.map((item, index) => {
                const {receivedAt, body, direction} = item
                return(<div key={index}>
                    <div>received At: {receivedAt}</div>
                    <div>{body}</div>
                    <div>direction {direction}</div>
                </div>)
            })
            }
        </div>
    )
}

export default ChatBox