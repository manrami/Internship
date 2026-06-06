import pyttsx3
import sys

# Mocking system for automated execution
if "--mock" in sys.argv:
    print("Initializing Text-to-Speech engine...")
    print("Speaking: Hello, welcome to AI Voice Assistant")
    print("Text-to-Speech finished successfully.")
    sys.exit(0)

try:
    engine = pyttsx3.init()
    engine.say("Hello, welcome to AI Voice Assistant")
    engine.runAndWait()
except Exception as e:
    print(f"Error initializing or running Text-to-Speech engine: {e}")
