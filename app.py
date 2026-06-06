import streamlit as st
import pickle
import numpy as np

# Load Saved Model
model = pickle.load(open("house_model.pkl", "rb"))

# Title
st.title("House Price Prediction App")

st.write("Enter house details below")

# User Inputs
area = st.number_input("Enter Area (sq ft)", min_value=0.0, value=1200.0, step=50.0)
bedrooms = st.number_input("Enter Number of Bedrooms", min_value=0, value=2, step=1)
age = st.number_input("Enter House Age", min_value=0, value=5, step=1)

# Prediction Button
if st.button("Predict Price"):

    # Convert Input into Array
    input_data = np.array([[area, bedrooms, age]])

    # Predict
    prediction = model.predict(input_data)

    # Display Result
    st.success(f"Predicted House Price: ₹ {prediction[0]:,.2f}")
