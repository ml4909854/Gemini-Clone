import React, { useContext } from "react";
import "./Main.css";
import { Context } from "../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCompass,
  faImages,
  faMicrophone,
  faPaperPlane,
  faTimeline,
  faUser,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setResponse,
    response,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p className="nav-title">Gemini</p>
        <FontAwesomeIcon icon={faUser} className="nav-user" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest Tips for Improving Mental Health and Well-being.</p>
                <FontAwesomeIcon className="icon" icon={faCompass} />
              </div>
              <div className="card">
                <p>Suggest Books to Read for Personal Growth.</p>
                <FontAwesomeIcon className="icon" icon={faBook} />
              </div>
              <div className="card">
                <p>Strategies for Learning a New Language Effectively.</p>
                <FontAwesomeIcon className="icon" icon={faLightbulb} />
              </div>
              <div className="card">
                <p>Methods for managing time more efficiently.</p>
                <FontAwesomeIcon className="icon" icon={faTimeline} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <FontAwesomeIcon className="lightIcon" icon={faUser} />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <FontAwesomeIcon className="lightIcon bulb" icon={faLightbulb} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setResponse(e.target.value)} // Keeps the input value as user types
              type="text"
              placeholder="Enter a prompt here"
              value={response} // Ensures the input field reflects the state value
            />
            <div>
              <FontAwesomeIcon className="SearchIcon" icon={faImages} />
              <FontAwesomeIcon className="SearchIcon" icon={faMicrophone} />
              <FontAwesomeIcon
                onClick={() => onSent(response)} // Pass the response as prompt
                className="SearchIcon"
                icon={faPaperPlane}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
