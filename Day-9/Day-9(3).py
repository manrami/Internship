from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Example Text Classification
texts = [
    "I love this product",
    "This is terrible",
    "Amazing experience",
    "Worst service ever"
]

labels = [
    "Positive",
    "Negative",
    "Positive",
    "Negative"
]

print("--- Text Classification Dataset ---")
for text, label in zip(texts, labels):
    print(f"Text: '{text}' -> Label: {label}")
print("-" * 40)

# Train Classification Model
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

model = MultinomialNB()
model.fit(X, labels)

# Test Prediction
prediction = model.predict(
    vectorizer.transform(
        ["Excellent product"]
    )
)

print("\n--- Prediction Output ---")
print("Input: 'Excellent product'")
print("Prediction:", prediction[0])
