def get_ai_response(user_message, role="assistant", temperature=0.7):
    """Generate a dynamic, high-quality offline AI response for demo purposes."""
    user_msg_lower = user_message.lower()
    
    if "explain python" in user_msg_lower:
        return (
            "[Role: Teacher]\n"
            "   Python is like a friendly tour guide! It is a programming language designed\n"
            "   to be extremely easy to read and write, reading almost like plain English.\n"
            "   It is the absolute gold standard for Web Development, Data Science, and AI!"
        )
    elif "reverse a string" in user_msg_lower:
        return (
            "[Role: Python Developer]\n"
            "   Here is the most elegant and Pythonic way to reverse a string:\n\n"
            "   ```python\n"
            "   def reverse_string(s):\n"
            "       return s[::-1]\n\n"
            "   # Example usage:\n"
            "   print(reverse_string(\"Hello\"))  # Output: olleH\n"
            "   ```"
        )
    elif "poem about coding" in user_msg_lower:
        return (
            "[Role: Creative Assistant | Temp: " + str(temperature) + "]\n"
            "   In threads of syntax, dreams align,\n"
            "   Through loops and logic, line by line,\n"
            "   A quiet world of keys and light,\n"
            "   Where thoughts turn real into the night."
        )
    else:
        return "I am currently in Offline Demo Mode. Please ask me about Python, reversing a string, or a poem!"

# Test with different roles
print("=== AI Teacher ===")
print(get_ai_response("Explain Python in simple terms", role="teacher"))

print("\n=== AI Coder ===")
print(get_ai_response("Write a function to reverse a string", role="Python developer"))

print("\n=== Creative AI (High Temperature) ===")
print(get_ai_response("Write a short poem about coding", temperature=0.9))
