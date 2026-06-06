

#Series in Panda
import pandas as pd

data = [10, 20, 30, 40]

series = pd.Series(data)

print(series)

#DataFrame in Pandas
student = {
    "Name": ["Man", "Rahul", "Krish"],
    "Age": [20, 21, 22],
    "Course": ["Python", "AI", "ML"]
}

df = pd.DataFrame(student)

print(df)

#Read CSV File
df = pd.read_csv("students.csv")

print(df)

#Display First Rows
print(df.head())

#Display Information About Data
print(df.info())

#Stastical Summary
print(df.describe())

#Select Specificc Column
print(df["Name"])

#Filter Data
print(df[df["Age"] > 20])

