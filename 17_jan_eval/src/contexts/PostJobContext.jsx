import { createContext } from "react";

export const PostJobContext = createContext();

export const PostJobContextProvider = ({ children }) => {
  const sendData = async (data) => {
    await fetch("http://localhost:2710/jobs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <PostJobContext.Provider value={sendData}>
      {children}
    </PostJobContext.Provider>
  );
};
