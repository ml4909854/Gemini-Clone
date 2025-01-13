import React, { useState, useContext } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPlus,
  faMessage,
  faQuestion,
  faHistory,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const { onSent, setRecentPrompt, prevPrompts  , newChat} = useContext(Context);

const promptLoad = async (prompt)=>{
  setRecentPrompt(prompt)
 await onSent(prompt)
}

  return (
    <div className={`sidebar ${extend ? "expanded" : "collapsed"}`}>
      <div className="top">
        <FontAwesomeIcon
          onClick={() => setExtend((prev) => !prev)}
          icon={faBars}
          className="menu"
        />
        <div onClick={()=>newChat()} className="new-chat">
          <FontAwesomeIcon icon={faPlus} />
          {extend && <p >New Chat</p>}
        </div>
        {extend && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={(e)=>promptLoad(item)} className="recent-entry">
                  <FontAwesomeIcon className="icon" icon={faMessage} />
                  <p>{item}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon className="icon" icon={faQuestion} />
          {extend && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon className="icon" icon={faHistory} />
          {extend && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon className="icon" icon={faGear} />
          {extend && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
