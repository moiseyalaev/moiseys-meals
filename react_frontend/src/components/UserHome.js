import React, { useEffect, useState } from 'react';
import "../styles/userHome.css";

const UserHome = () => {
  const [userData, setUserData] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/user_home"

    const fetchUserData = async () => {
      try {
        const response = await fetch(url, {
            method: "get",
            headers: {
                'content-type': 'application/json',
                "authorization": localStorage.getItem("token")
            },
        })

        const data = await response.json()
        if(!response.ok) throw data.error

        setUserData(data);

    } catch(error) {
       console.log("error", error)
    }
      
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div> Loading...</div>;
  }

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = userInput.trim();

    if (message === '') {
      return;
    }

    // Add user's message to the chat history
    setChatHistory((prevChatHistory) => [...prevChatHistory, { sender: 'user', message }]);

    // Clear the input field
    setUserInput('');
  };

  return (
    <div className="user-home-container">
      <div className="chat-container">
        <div className="chat-history">
          {chatHistory.map((chat, index) => (
            <div key={index} className={chat.sendersender === 'user' ? 'user-message' : 'bot-message'}>
              <span>{chat.sender === 'user' ? 'You: ' : 'Bot: '}</span>
              {chat.message}
            </div>
          ))}
        </div>
        <form className="text-form" onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleUserInput} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default UserHome;
