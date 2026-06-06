import streamlit as st
import pandas as pd

from sklearn.linear_model import LinearRegression

# Dataset
data = {
    "Area": [500, 700, 900, 1100, 1300],
    "Price": [1500000, 2000000, 2500000, 3000000, 3500000]
}

df = pd.DataFrame(data)

# Input and Output
X = df[["Area"]]

y = df["Price"]

# Train Model
model = LinearRegression()

model.fit(X, y)

# Streamlit UI
st.title("House Price Predictor")

area = st.number_input("Enter House Area")

if st.button("Predict Price"):

    prediction = model.predict([[area]])

    st.success(f"Predicted House Price: ₹ {prediction[0]:.2f}")