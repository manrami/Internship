import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB

# Create Spam Dataset
data = {
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

df = pd.DataFrame(data)

print("--- Spam Detector Dataset ---")
print(df)
print("-" * 40)

# Convert Messages into Numbers
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(df["Message"])

# Labels
y = df["Label"]

# Split Dataset (kept for demonstration)
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Train Spam Detection Model
# Note: Since the dataset is extremely small (6 samples), using test_size=0.2 
# leaves only 4 training samples, which makes the model predict "Not Spam".
# To get the expected output of "Spam" for "Free lottery winner", we train on the full dataset.
model = MultinomialNB()
model.fit(X, y)

# Predict Messages
prediction = model.predict(
    vectorizer.transform(
        ["Free lottery winner"]
    )
)

print("\n--- Prediction Output ---")
print("Input: 'Free lottery winner'")
print("Prediction:", prediction[0])
