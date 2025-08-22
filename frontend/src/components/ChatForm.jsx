import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
    setTimeout(() => setChatHistory((history) => [
      ...history,
      { role: "model", text: "thinking..." },
    ]),600);
    generateBotResponse([...chatHistory, { role: "model", text: `answer based on the given information only:${userMessage} `}]);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Chat with SmartCity AI...."
        className="message-input"
        required
      />
      <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
