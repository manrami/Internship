import pandas as pd
import matplotlib.pyplot as plt

from sklearn.linear_model import LinearRegression

data = pd.read_csv("study_data.csv")

X = data[["StudyHours"]]
y = data["Marks"]

model = LinearRegression()

model.fit(X, y)

prediction = model.predict([[5]])
print("Predicted Marks:", prediction[0])

plt.scatter(data["StudyHours"], data["Marks"])
plt.plot(data["StudyHours"], model.predict(X))
plt.xlabel("Study Hours")
plt.ylabel("Marks")
plt.title("Study Hours vs Marks")
plt.show()
