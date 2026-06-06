from sklearn.feature_extraction.text import CountVectorizer

# Define a sample text dataset (messages)
messages = [
    "Win money now",
    "Free offer available",
    "Hello friend",
    "Meeting tomorrow",
    "Claim your prize",
    "Project discussion"
]

print("--- Text Dataset ---")
for idx, msg in enumerate(messages):
    print(f"Message {idx+1}: {msg}")

print("\n--- Vectorized Numerical Output ---")
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(messages)

print("Vocabulary:")
print(vectorizer.get_feature_names_out())
print("\nNumerical Arrays (Vectorized Output):")
print(X.toarray())
