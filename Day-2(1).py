import math

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Division by zero"
    return a / b

def power(a, b):
    return a ** b

def square_root(a):
    if a < 0:
        return "Error: Negative number"
    return math.sqrt(a)

def percentage(a, b):
    return (a / b) * 100


def calculator():

    print("\n==============================")
    print("   ADVANCED PYTHON CALCULATOR")
    print("==============================")

    while True:

        print("\nChoose Operation:")
        print("1. Addition")
        print("2. Subtraction")
        print("3. Multiplication")
        print("4. Division")
        print("5. Power")
        print("6. Square Root")
        print("7. Percentage")
        print("8. Exit")

        choice = input("\nEnter choice (1-8): ")

        if choice == "8":
            print("\nCalculator Closed Successfully 🚀")
            break

        elif choice in ["1", "2", "3", "4", "5", "7"]:

            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))

            if choice == "1":
                print("Result =", add(num1, num2))

            elif choice == "2":
                print("Result =", subtract(num1, num2))

            elif choice == "3":
                print("Result =", multiply(num1, num2))

            elif choice == "4":
                print("Result =", divide(num1, num2))

            elif choice == "5":
                print("Result =", power(num1, num2))

            elif choice == "7":
                print("Result =", percentage(num1, num2), "%")

        elif choice == "6":

            num = float(input("Enter number: "))
            print("Result =", square_root(num))

        else:
            print("Invalid Choice! Please try again.")


calculator()