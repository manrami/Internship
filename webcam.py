import cv2

camera = cv2.VideoCapture(0)

if not camera.isOpened():
    print("Cannot access webcam")
    exit()

while True:

    success, frame = camera.read()

    if not success:
        print("Failed to capture frame")
        break

    cv2.imshow("Webcam Feed", frame)

    if cv2.waitKey(1) == ord('q'):
        break

camera.release()
cv2.destroyAllWindows()