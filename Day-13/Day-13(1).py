import speech_recognition as sr
import sys
import time

# Mocking system for automated execution/screenshots
if "--mock" in sys.argv:
    mock_idx = sys.argv.index("--mock")
    mock_text = sys.argv[mock_idx + 1] if mock_idx + 1 < len(sys.argv) else "hello welcome to speech recognition"
    print("Speak something...")
    time.sleep(1)
    print("You said:", mock_text)
    sys.exit(0)

# Real Speech Recognition
recognizer = sr.Recognizer()

try:
    with sr.Microphone() as source:
        print("Speak something...")
        # Adjust for ambient noise to improve accuracy
        recognizer.adjust_for_ambient_noise(source, duration=1)
        audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
        text = recognizer.recognize_google(audio)
        print("You said:", text)
except sr.WaitTimeoutError:
    print("Listening timed out while waiting for speech to start")
except sr.UnknownValueError:
    print("Google Speech Recognition could not understand audio")
except sr.RequestError as e:
    print(f"Could not request results from Google Speech Recognition; {e}")
except Exception as e:
    print(f"Error accessing microphone: {e}")
