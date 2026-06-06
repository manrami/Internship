from sklearn.linear_model import LinearRegression
import numpy as np
import pickle

# Training Data
X = np.array([
    [1000, 2, 5],
    [1500, 3, 2],
    [2000, 4, 1],
    [1200, 2, 10],
    [1800, 3, 3]
])

y = np.array([300000, 450000, 600000, 280000, 500000])

# Create Model
model = LinearRegression()

# Train Model
model.fit(X, y)

# Save Model
pickle.dump(model, open("house_model.pkl", "wb"))

print("Model saved successfully")
