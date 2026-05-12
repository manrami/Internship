from datetime import datetime

print("================================")
print("      AGE CALCULATOR APP")
print("================================")

name = input("Enter your name: ")
birth_year = int(input("Enter your birth year: "))

current_year = datetime.now().year

age = current_year - birth_year

print("\n================================")
print("Hello,", name)
print("Your Age is:", age)
print("Current Year:", current_year)
print("================================")