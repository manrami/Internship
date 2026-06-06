print("AI is ready! Type 'exit' to quit.")
print("-" * 40)

while True:
    try:
        user_input = input("You: ")
    except EOFError:
        print("\nGoodbye! (EOF reached)")
        break

    clean_input = user_input.lower().strip("?. ")

    if clean_input == "exit":
        print("Goodbye!")
        break

    # 1. Greetings (hello, helloo, hi, hey, etc.)
    if any(w in clean_input for w in ["hello", "hi", "hey", "greetings"]):
        reply = "Hello! How can I help you today? Ask me how I am doing or say 'Good afternoon'!"

    # 2. Time-of-day greetings (good afternoon, good morning, good evening)
    elif "good afternoon" in clean_input:
        reply = "Good afternoon! Hope you are having a wonderful and productive day. How can I assist you?"
    elif "good morning" in clean_input:
        reply = "Good morning! Wishing you a fantastic start to your day. How can I help you today?"
    elif "good evening" in clean_input:
        reply = "Good evening! Hope your day went well. How can I assist you tonight?"

    # 3. "how are you"
    elif "how are you" in clean_input:
        reply = "I'm doing absolutely great, thank you for asking! I am ready to help you with anything you need. How are you doing today?"

    # 4. Fallback for other inputs in demo mode
    else:
        reply = (
            "I am currently running in Offline Demo Mode. 🚀\n"
            "Try asking me:\n"
            "👉 'Hello' or 'Hi'\n"
            "👉 'Good afternoon'\n"
            "👉 'How are you?'\n"
            "👉 'Exit' (to close the chatbot)"
        )

    print(f"AI: {reply}")
    print("-" * 40)
