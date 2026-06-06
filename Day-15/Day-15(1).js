function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    let inputField = document.getElementById("userInput");
    let input = inputField.value.trim();

    if (input === "") return;

    let chatbox = document.getElementById("chatbox");

    // Add user message to chatbox
    chatbox.innerHTML += `<div class="message user-message">${input}</div>`;
    
    // Clear input field
    inputField.value = "";

    let response;
    let lowerInput = input.toLowerCase();
    
    // --- Advanced Chatbot Logic Engine ---
    
    // Date & Time Logic
    if (lowerInput.includes("time")) {
        response = "The current time is " + new Date().toLocaleTimeString() + ".";
    }
    else if (lowerInput.includes("day") || lowerInput.includes("date")) {
        let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        response = "Today is " + new Date().toLocaleDateString('en-US', dateOptions) + ".";
    }
    // Greetings
    else if (lowerInput === "hi" || lowerInput === "hey" || lowerInput.includes("hello")) {
        let hour = new Date().getHours();
        let greeting = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
        response = `${greeting} I am your AI assistant. How can I help you today?`;
    }
    // Small Talk
    else if (lowerInput.includes("how are you") || lowerInput.includes("how are u")) {
        response = "I'm just a few lines of code, but I'm feeling great! How about you?";
    }
    else if (lowerInput.includes("your name") || lowerInput.includes("who are you")) {
        response = "I am an AI Support Bot designed to assist you with your queries.";
    }
    else if (lowerInput.includes("thank")) {
        response = "You're very welcome! Let me know if you need anything else.";
    }
    else if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
        response = "Goodbye! Have a fantastic day ahead!";
    }
    else if (lowerInput.includes("joke")) {
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs!",
            "Why did the developer go broke? Because he used up all his cache!",
            "How many programmers does it take to change a light bulb? None. It's a hardware problem."
        ];
        response = jokes[Math.floor(Math.random() * jokes.length)];
    }
    // Business Logic
    else if (lowerInput.includes("services") || lowerInput.includes("offer")) {
        response = "We specialize in Website Development, AI Automation, and Digital Marketing.";
    }
    else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("phone")) {
        response = "You can contact us anytime at info@company.com or via phone at (555) 0198-1234.";
    }
    else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("quote")) {
        response = "Our pricing starts at $99/month for basic AI services. Would you like a detailed quote?";
    }
    else if (lowerInput.includes("help")) {
        response = "I can help you with our services, pricing, date/time, tell you a joke, or provide contact info. What do you need?";
    }
    // Basic Math Evaluation Fallback
    else if (/[0-9]/.test(lowerInput) && (lowerInput.includes("+") || lowerInput.includes("-") || lowerInput.includes("*") || lowerInput.includes("/"))) {
        try {
            let mathExpr = lowerInput.replace(/[^0-9+\-*/().]/g, "");
            if (mathExpr) {
                let result = eval(mathExpr);
                response = `The calculated answer is ${result}.`;
            } else {
                response = "I couldn't quite calculate that.";
            }
        } catch (e) {
            response = "I am still learning. Try asking me for a 'joke', 'what day is today', 'services', or 'time'.";
        }
    }
    // Ultimate Fallback
    else {
        response = "I'm still learning! Try asking me for a 'joke', 'what day is today', 'services', or 'time'.";
    }

    // Simulate typing delay for bot response
    setTimeout(() => {
        chatbox.innerHTML += `<div class="message bot-message">${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 600);
    
    // Scroll to bottom immediately for user message
    chatbox.scrollTop = chatbox.scrollHeight;
}
