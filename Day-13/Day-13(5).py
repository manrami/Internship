import speech_recognition as sr
import pyttsx3
import webbrowser
import sys
import time

# Mocking system
if "--mock" in sys.argv:
    mock_idx = sys.argv.index("--mock")
    command = sys.argv[mock_idx + 1] if mock_idx + 1 < len(sys.argv) else "open youtube"
    print("Speak Command...")
    time.sleep(1)
    print("You said:", command)
    print("Speaking: You said " + command)
    if "google" in command.lower():
        print("Opening Web Browser: https://www.google.com")
        webbrowser.open("https://www.google.com")
    elif "youtube" in command.lower():
        print("Opening Web Browser: https://www.youtube.com")
        webbrowser.open("https://www.youtube.com")
    sys.exit(0)

try:
    engine = pyttsx3.init()
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Speak Command...")
        recognizer.adjust_for_ambient_noise(source, duration=1)
        audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
        command = recognizer.recognize_google(audio)
        print("You said:", command)
        
        engine.say("You said " + command)
        engine.runAndWait()

        if "google" in command.lower():
            webbrowser.open("https://www.google.com")
        elif "youtube" in command.lower():
            webbrowser.open("https://www.youtube.com")
except sr.WaitTimeoutError:
    print("Listening timed out")
except sr.UnknownValueError:
    print("Speech could not be understood")
except sr.RequestError as e:
    print(f"Request error: {e}")
except Exception as e:
    print(f"Error: {e}")
