import streamlit as st
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB

# Page Configuration
st.set_page_config(
    page_title="Machine Learning Text Processing - Day 9",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS for rich aesthetics (Glassmorphism, dark/vibrant gradient accents)
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@400;700&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Outfit', sans-serif;
    }
    
    .main-title {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 800;
        background: linear-gradient(135deg, #FF3366, #FF9933);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        margin-bottom: 5px;
        font-size: 3rem;
    }
    
    .subtitle {
        text-align: center;
        color: #7E8B9B;
        font-size: 1.2rem;
        margin-bottom: 30px;
        font-weight: 300;
    }
    
    .card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 25px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        margin-bottom: 25px;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    }
    
    .badge-spam {
        background-color: #FF3B30;
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-weight: bold;
        display: inline-block;
    }
    
    .badge-ham {
        background-color: #34C759;
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-weight: bold;
        display: inline-block;
    }
    
    .badge-pos {
        background-color: #007AFF;
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-weight: bold;
        display: inline-block;
    }
    
    .badge-neg {
        background-color: #FF9500;
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-weight: bold;
        display: inline-block;
    }
    
    .result-box {
        background: rgba(255, 255, 255, 0.03);
        border-left: 5px solid #FF3366;
        padding: 15px;
        margin-top: 15px;
        border-radius: 4px;
        font-family: 'Space Grotesk', monospace;
    }
    
    .matrix-cell {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 6px;
        padding: 10px;
        text-align: center;
        font-size: 1.1rem;
        font-weight: bold;
        color: #00FFCC;
    }
    
</style>
""", unsafe_allow_html=True)

# Main Title
st.markdown('<div class="main-title">Natural Language Processing (NLP)</div>', unsafe_allow_html=True)
st.markdown('<div class="subtitle">Day 9 of Internship Code Guide - Text Vectorization & Classification</div>', unsafe_allow_html=True)

# Tabs
tab1, tab2, tab3 = st.tabs([
    "🔢 1. Convert Text into Numbers", 
    "🛡️ 2. Build Spam Detector", 
    "🏷️ 3. Classify Text Data"
])

# ----------------- TAB 1: Convert Text into Numbers -----------------
with tab1:
    st.header("1. Convert Text into Numbers (Vectorization)")
    st.write("Machine Learning models require numerical input. We use `CountVectorizer` to convert text into token count matrices.")
    
    col1, col2 = st.columns([1, 2])
    
    with col1:
        st.subheader("Text Dataset")
        messages_t1 = [
            "Win money now",
            "Free offer available",
            "Hello friend",
            "Meeting tomorrow",
            "Claim your prize",
            "Project discussion"
        ]
        
        df_t1 = pd.DataFrame({"Messages": messages_t1})
        st.dataframe(df_t1, use_container_width=True)
        
    with col2:
        st.subheader("Vectorized Numerical Output")
        vectorizer_t1 = CountVectorizer()
        X_t1 = vectorizer_t1.fit_transform(messages_t1)
        vocabulary = vectorizer_t1.get_feature_names_out()
        
        st.write("**Feature Names (Vocabulary):**")
        st.code(str(list(vocabulary)))
        
        st.write("**Vectorized Array (X.toarray()):**")
        array_df = pd.DataFrame(X_t1.toarray(), columns=vocabulary)
        st.dataframe(array_df, use_container_width=True)

# ----------------- TAB 2: Build Spam Detector -----------------
with tab2:
    st.header("2. Build Spam Detector")
    st.write("Train a Naive Bayes classifier to identify messages as **Spam** or **Not Spam**.")
    
    # Dataset
    data_t2 = {
        "Message": [
            "Win money now",
            "Free offer available",
            "Hello friend",
            "Meeting tomorrow",
            "Claim your prize",
            "Project discussion"
        ],
        "Label": [
            "Spam",
            "Spam",
            "Not Spam",
            "Not Spam",
            "Spam",
            "Not Spam"
        ]
    }
    df_t2 = pd.DataFrame(data_t2)
    
    col_t2_1, col_t2_2 = st.columns([1, 1.2])
    
    with col_t2_1:
        st.subheader("Spam Detector Dataset")
        
        # Color label column for beautiful styling
        def color_label(val):
            color = '#FF3B30' if val == 'Spam' else '#34C759'
            return f'background-color: {color}; color: white; font-weight: bold;'
        
        st.dataframe(df_t2.style.map(color_label, subset=['Label']), use_container_width=True)
        
    with col_t2_2:
        st.subheader("Model Training & Prediction")
        
        # Explain split / full dataset options
        training_mode = st.radio(
            "Training Dataset Selection:",
            ["Train on Split Dataset (X_train)", "Train on Full Dataset (X)"],
            help="With split dataset (random_state=42), the only message containing 'Free' is in the test set. Training on full dataset solves this."
        )
        
        vectorizer_t2 = CountVectorizer()
        X_t2 = vectorizer_t2.fit_transform(df_t2["Message"])
        y_t2 = df_t2["Label"]
        
        if "Split" in training_mode:
            X_train, X_test, y_train, y_test = train_test_split(
                X_t2, y_t2, test_size=0.2, random_state=42
            )
            model_t2 = MultinomialNB()
            model_t2.fit(X_train, y_train)
            st.info("Model trained on 80% split dataset (4 samples).")
        else:
            model_t2 = MultinomialNB()
            model_t2.fit(X_t2, y_t2)
            st.success("Model trained on 100% full dataset (6 samples).")
            
        # Prediction
        test_msg_t2 = st.text_input("Enter Message to Test:", "Free lottery winner")
        
        if st.button("Predict Spam Status"):
            prediction_t2 = model_t2.predict(vectorizer_t2.transform([test_msg_t2]))[0]
            
            st.markdown("### Prediction Results:")
            if prediction_t2 == "Spam":
                st.markdown(f'<div class="result-box">Message: <strong>"{test_msg_t2}"</strong><br>Prediction: <span class="badge-spam">Spam</span></div>', unsafe_allow_html=True)
            else:
                st.markdown(f'<div class="result-box">Message: <strong>"{test_msg_t2}"</strong><br>Prediction: <span class="badge-ham">Not Spam</span></div>', unsafe_allow_html=True)

# ----------------- TAB 3: Classify Text Data -----------------
with tab3:
    st.header("3. Classify Text Data (Sentiment Analysis)")
    st.write("Categorize text reviews automatically into **Positive** or **Negative** categories using Naive Bayes.")
    
    texts_t3 = [
        "I love this product",
        "This is terrible",
        "Amazing experience",
        "Worst service ever"
    ]
    labels_t3 = [
        "Positive",
        "Negative",
        "Positive",
        "Negative"
    ]
    df_t3 = pd.DataFrame({"Text Review": texts_t3, "Sentiment": labels_t3})
    
    col_t3_1, col_t3_2 = st.columns([1, 1.2])
    
    with col_t3_1:
        st.subheader("Text Classification Dataset")
        
        def color_sentiment(val):
            color = '#007AFF' if val == 'Positive' else '#FF9500'
            return f'background-color: {color}; color: white; font-weight: bold;'
            
        st.dataframe(df_t3.style.map(color_sentiment, subset=['Sentiment']), use_container_width=True)
        
    with col_t3_2:
        st.subheader("Train & Classify")
        
        vectorizer_t3 = CountVectorizer()
        X_t3 = vectorizer_t3.fit_transform(texts_t3)
        
        model_t3 = MultinomialNB()
        model_t3.fit(X_t3, labels_t3)
        st.success("Model trained successfully on the 4 reviews!")
        
        test_msg_t3 = st.text_input("Enter Review to Test:", "Excellent product")
        
        if st.button("Predict Sentiment"):
            prediction_t3 = model_t3.predict(vectorizer_t3.transform([test_msg_t3]))[0]
            
            st.markdown("### Prediction Results:")
            if prediction_t3 == "Positive":
                st.markdown(f'<div class="result-box" style="border-left-color: #007AFF;">Review: <strong>"{test_msg_t3}"</strong><br>Sentiment: <span class="badge-pos">Positive</span></div>', unsafe_allow_html=True)
            else:
                st.markdown(f'<div class="result-box" style="border-left-color: #FF9500;">Review: <strong>"{test_msg_t3}"</strong><br>Sentiment: <span class="badge-neg">Negative</span></div>', unsafe_allow_html=True)
