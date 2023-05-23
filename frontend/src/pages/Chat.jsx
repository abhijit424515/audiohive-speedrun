import React from "react";
import "./styles/Chat.css";
import dayjs from "dayjs";

const ChatBubble = ({ text, read, sender, timestamp }) => {
  return (
    <div
      className={
        sender == "self"
          ? "mb-[1rem] flex gap-y-[0.5rem] flex-col w-[20vw] bg-blue-600 p-[0.5rem] rounded-[0.5rem] ml-auto"
          : "mb-[1rem] flex gap-y-[0.5rem] flex-col w-[20vw] bg-blue-600 p-[0.5rem] rounded-[0.5rem] mr-auto"
      }
    >
      <div className="text-white">{text}</div>
      <div className="flex justify-between">
        <div className="text-[0.7rem] text-yellow-500">
          {dayjs(timestamp).format("HH:mm:ss A, DD/MM/YYYY")}
        </div>
        {/* prettier-ignore */}
        <div className="text-[1.2rem] flex items-end" style={{color: read ? "#90EE90": "black"}}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"></path></svg></div>
      </div>
    </div>
  );
};

function Chat() {
  return (
    <div className="w-screen h-screen overflow-hidden p-[1rem]">
      <div className="overflow-y-scroll h-full">
        {[1, 1, 1, 1, 1, 1, 1, 1].map(() => (
          <ChatBubble
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, totam cumque iste quae hic cum mollitia ullam. Numquam architecto quo laborum alias! Veritatis nesciunt ipsum cumque iusto aperiam, suscipit soluta!"
            sender="self"
            read={true}
            timestamp={new Date()}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;
