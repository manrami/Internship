from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

reviews = [
    "This product is excellent",
    "Very bad experience",
    "Amazing quality and service",
    "I am disappointed",
    "Highly recommended",
    "Worst purchase ever"
]

labels = [
    "Positive",
    "Negative",
    "Positive",
    "Negative",
    "Positive",
    "Negative"
]

vectorizer = CountVectorizer()

X = vectorizer.fit_transform(reviews)

model = MultinomialNB()

model.fit(X, labels)

test_review = ["Excellent service and amazing product"]

prediction = model.predict(
    vectorizer.transform(test_review)
)

print("Review:", test_review[0])
print("Sentiment:", prediction[0])