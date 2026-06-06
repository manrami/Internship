import streamlit as st
import numpy as np
from sklearn.linear_model import LinearRegression
 
# Training Data
area = np.array([500,750,1000,1250,1500,2000,2500,3000]).reshape(-1,1)
price = np.array([25,38,50,62,75,100,125,150])
 
# Train Model
model = LinearRegression()
model.fit(area, price)
 
# Streamlit App UI
st.title("House Price Predictor")
st.write("Enter the house area to predict its price.")
 
house_area = st.slider("House Area (sqft)", 500, 5000, 1500)
 
predicted_price = model.predict([[house_area]])[0]
st.success(f"Predicted Price: {predicted_price:.2f} Lakhs")
