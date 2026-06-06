function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function getFormattedTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function sendMessage() {
    let inputField = document.getElementById("userInput");
    let input = inputField.value.trim();

    if (input === "") return;

    let chatbox = document.getElementById("chatbox");
    let currentTime = getFormattedTime();

    // Add user message to chatbox
    chatbox.innerHTML += `
        <div class="message-wrapper user-wrapper">
            <div class="message user-message">${input}</div>
            <div class="timestamp">${currentTime}</div>
        </div>
    `;
    
    // Clear input field and scroll down
    inputField.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;

    // Show Typing Indicator
    let typingId = 'typing-' + Date.now();
    chatbox.innerHTML += `
        <div id="${typingId}" class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatbox.scrollTop = chatbox.scrollHeight;

    let response;
    let lowerInput = input.toLowerCase();
    
    // --- Advanced AI Engine Logic ---
    if (lowerInput.includes("time")) {
        response = "The current time is " + new Date().toLocaleTimeString() + ".";
    }
    else if (lowerInput.includes("day") || lowerInput.includes("date")) {
        let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        response = "Today is " + new Date().toLocaleDateString('en-US', dateOptions) + ".";
    }
    else if (lowerInput === "hi" || lowerInput === "hey" || lowerInput.includes("hello")) {
        let hour = new Date().getHours();
        let greeting = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
        response = `${greeting} I am your AI assistant. How can I help you today?`;
    }
    else if (lowerInput.includes("how are you") || lowerInput.includes("how r u")) {
        response = "I'm running efficiently! My servers are cool, and I'm ready to assist you.";
    }
    else if (lowerInput.includes("your name") || lowerInput.includes("who are you")) {
        response = "I am an Advanced AI Support Bot, version 2.0. Designed for premium assistance.";
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
            "There are 10 types of people in the world: those who understand binary, and those who don't."
        ];
        response = jokes[Math.floor(Math.random() * jokes.length)];
    }
    else if (lowerInput.includes("services") || lowerInput.includes("offer")) {
        response = "We specialize in Premium Website Development, AI Automation, and Elite Digital Marketing.";
    }
    else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("phone")) {
        response = "Reach out to our VIP support team anytime at premium@company.com or 1-800-ELITE.";
    }
    else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("quote")) {
        response = "Our enterprise pricing starts at $499/month for full AI integration. Would you like a detailed proposal?";
    }
    else if (lowerInput.includes("help")) {
        response = "I can assist you with our services, VIP pricing, date/time, tell you a joke, or provide contact info. What do you need?";
    }
    else if (/[0-9]/.test(lowerInput) && (lowerInput.includes("+") || lowerInput.includes("-") || lowerInput.includes("*") || lowerInput.includes("/"))) {
        try {
            let mathExpr = lowerInput.replace(/[^0-9+\-*/().]/g, "");
            if (mathExpr) {
                let result = eval(mathExpr);
                response = `Calculation complete: The answer is **${result}**.`;
            } else {
                response = "I couldn't quite calculate that.";
            }
        } catch (e) {
            response = "I encountered an error calculating that math expression.";
        }
    }
    else {
        response = "I'm still learning! Try asking me for a 'joke', 'what day is today', 'services', or 'time'.";
    }

    // Simulate thinking delay depending on message length
    let delay = Math.random() * 1000 + 800; // Between 0.8s and 1.8s
    
    setTimeout(() => {
        // Remove typing indicator
        let indicator = document.getElementById(typingId);
        if(indicator) indicator.remove();
        
        let replyTime = getFormattedTime();
        // Add bot message
        chatbox.innerHTML += `
            <div class="message-wrapper bot-wrapper">
                <div class="message bot-message">${response}</div>
                <div class="timestamp">${replyTime}</div>
            </div>
        `;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, delay);
}
