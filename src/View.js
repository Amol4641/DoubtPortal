import "./App.css";
import { useState } from "react";
import { RightData } from "./RightData";
export default function View(props) {
  const [a, setA] = useState(props.Imp);
  const [msg, setMsg] = useState([]);
  const [chat, setChat] = useState("");
  const [rightData, setRightData] = useState(RightData.data.chats);
  let flag = false;
  const RightclickHandler = (e) => {
    flag = true;
    setRightData(
      rightData.filter((elm) => {
        if (Number(e.id) == Number(elm.chatTypeId)) {
          return elm;
        }
      })
    );
  };
  console.log(rightData);

  const [time, setTime] = useState(new Date());
  const clickHandler = () => {
    return setMsg([...msg, chat]);
  };

  return (
    <>
      <div className="cont">
        <div className="left">
          {a.data.conversations
            .filter((e) => {
              if (e.chats.length > 0) {
                return e;
              }
            })
            .map((e) => {
              return (
                <>
                  <div onClick={(e) => RightclickHandler(e)} className="chat">
                    <h4> {e.user.firstName}</h4>
                    <h4> {e.chats[0].message}</h4>
                    <h5>
                      {" "}
                      {new Date(e.updatedAt).toLocaleDateString() +
                        " " +
                        new Date(e.updatedAt).toLocaleTimeString().slice(0, 5)}
                    </h5>
                  </div>
                </>
              );

              //  console.log(new Date(e.updatedAt).toLocaleString());
            })}
        </div>

        <div className="right">
          <>
            <input
              className="inputBox"
              value={chat}
              placeholder="Enter your message here"
              onChange={(e) => {
                setChat(e.target.value);
              }}
              type="text"
            />
            <button className="ButtonBox" onClick={clickHandler}>
              {" "}
              Post
            </button>
          </>
          {msg.map((e) => {
            return (
              <>
                <div className="chatRight">
                  <h4> {e} </h4>
                  <h6> {time.toLocaleTimeString().slice(0, 5)}</h6>
                </div>
              </>
            );

            //  console.log(new Date(e.updatedAt).toLocaleString());
          })}

          {rightData.map((element) => {
            return (
              <div className="chatRight">
                {" "}
                <h4>{element.message}</h4>
                <h5>
                  {" "}
                  {new Date(element.createdAt).toLocaleDateString() +
                    " " +
                    new Date(element.createdAt)
                      .toLocaleTimeString()
                      .slice(0, 5)}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
