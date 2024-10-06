import React, { useState, useEffect, useRef } from 'react';
import './Home.css'; // Import the specific CSS file for the home page
import { FaCommentDots } from 'react-icons/fa'; // Import chat icon
import axios from 'axios'; // Import Axios for API requests

const Home = () => {
    const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat window
    const [messages, setMessages] = useState([]); // State to store messages
    const [input, setInput] = useState(''); // State to manage input field
    const [isSending, setIsSending] = useState(false); // State to track if a message is being processed

    const chatEndRef = useRef(null);

    // Function to toggle chat window
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen); 
    };

    // Auto-scroll to the bottom of the chat when new messages are added
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Function to handle sending messages
    const handleSend = async () => {
        if (input.trim()) {
            const newMessages = [...messages, { user: 'You', text: input }];
            setMessages(newMessages); // Add user's message to chat
            setInput(''); // Clear input field

            // Send user's message to OpenAI
            await sendMessageToAI(input, newMessages);
        }
    };

    // Function to send the message to OpenAI and get a response
    const sendMessageToAI = async (message, updatedMessages) => {
        setIsSending(true); // Set sending state

        try {
            const response = await axios.post(
                'https://your-secure-backend-url.com/openai', // Use your secure backend
                {
                    model: "gpt-4", // Use GPT-4 model
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant.' },
                        ...updatedMessages.map((msg) => ({
                            role: msg.user === 'You' ? 'user' : 'assistant',
                            content: msg.text
                        })),
                    ],
                }
            );

            const aiMessage = response.data.choices[0].message.content;
            setMessages([...updatedMessages, { user: 'AI', text: aiMessage }]); // Add AI response to chat
        } catch (error) {
            setMessages([...updatedMessages, { user: 'AI', text: 'Oops! Something went wrong, please try again.' }]);
            console.error("Error communicating with AI:", error);
        }

        setIsSending(false); // Reset sending state
    };

    return (
        <section id="home" className="full-window">
            <div className="left-column">
                <h1 className="animated-text">
                    <span className="highlighted-text">"</span>
                    <span className="highlighted-text">H</span>
                    <span className="highlighted-text">e</span>
                    <span className="highlighted-text">l</span>
                    <span className="highlighted-text">l</span>
                    <span className="highlighted-text">o</span>
                    <span>&nbsp;</span> {/* Space between "Hello" and "World" */}
                    <span className="highlighted-text-2">W</span>
                    <span className="highlighted-text-2">o</span>
                    <span className="highlighted-text-2">r</span>
                    <span className="highlighted-text-2">l</span>
                    <span className="highlighted-text-2">d</span>
                    <span className="highlighted-text-2">"</span>
                </h1>
                <h4>
                    <span className="highlighted-text-2">I’m Rahul!  </span>
                    <span className="highlighted-text">Let’s transform your vision into digital art.</span>
                </h4>
            </div>

            {/* Chatbot icon at the bottom-right corner, hidden when chat is open */}
            {!isChatOpen && (
                <div className="chatbot-icon" onClick={toggleChat} aria-label="Open Chatbot" role="button">
                    <FaCommentDots />
                </div>
            )}

            {/* Chat window that appears when isChatOpen is true */}
            {isChatOpen && (
                <div className={`chat-window ${isChatOpen ? 'chat-window-open' : ''}`}>
                    <div className="chat-header">
                        <h3>Ask Anything</h3>
                        <button onClick={toggleChat} className="close-chat">&times;</button>
                    </div>
                    <div className="chat-messages">
                        {messages.length === 0 && <p>Say hello! 👋</p>}
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.user === 'You' ? 'user-message' : 'bot-message'}`}>
                                <strong>{msg.user}: </strong> {msg.text}
                            </div>
                        ))}
                        <div ref={chatEndRef} /> {/* To auto-scroll */}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => !isSending && e.key === 'Enter' && handleSend()} // Send message on Enter key press
                            disabled={isSending} // Disable input while waiting for AI response
                        />
                        <button onClick={handleSend} className="send-button" disabled={isSending || !input.trim()}>
                            {isSending ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;
