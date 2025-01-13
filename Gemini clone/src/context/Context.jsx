import React, { createContext, useState, useEffect } from "react";
import run from "../config/gemini";

// Create context to share the state and functions
export const Context = createContext();

const ContextProvider = (props) => {
  const [response, setResponse] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = ()=>{
    setLoading(false);        
    setResultData("");       
    setResponse("");          
    setShowResult(false);     // Hide the result section
    setRecentPrompt("");
  }

  const onSent = async (prompt) => {
    setResultData(""); 
    setLoading(true);
    setShowResult(true);
    let res;

    if (prompt && !prevPrompts.includes(prompt)) {
      res = await run(prompt);
      setRecentPrompt(prompt); // Set the current prompt as the recent prompt
      setPrevPrompts((prev) => [...prev, prompt]); // Add the prompt to history only if it's new
    } else {
      // If the prompt is already in history, just fetch the result
      res = await run(prompt);
      setRecentPrompt(prompt); // Set the current prompt as the recent prompt
    }

    // Process the response data
    try {
      let responseArray = res.split("**");
      let newArray = "";

      // Format response with bold and line breaks
      for (let i = 0; i < responseArray.length; i++) {
        if (i % 2 === 0) {
          newArray += responseArray[i];
        } else {
          newArray += `<b>${responseArray[i]}</b>`;
        }
      }

      let formattedResult = newArray.replace(/\*/g, "<br>");

      setResultData(formattedResult); 
    } catch (error) {
      console.error("Error fetching result:", error);
      setResultData("An error occurred while fetching the result.");
    } finally {
      setLoading(false); // Set loading to false after processing
    }
  };


  const ContextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    response,
    setResponse,
    newChat
  };

  return (
    <Context.Provider value={ContextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
