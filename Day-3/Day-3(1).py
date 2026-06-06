students = {}

print("================================")
print("    STUDENT MANAGEMENT SYSTEM")
print("================================")

while True:

    print("\n1. Add Student")
    print("2. View Students")
    print("3. Search Student")
    print("4. Exit")

    choice = input("\nEnter your choice: ")

    if choice == "1":

        name = input("Enter Student Name: ")
        age = input("Enter Student Age: ")
        course = input("Enter Student Course: ")

        students[name] = {
            "Age": age,
            "Course": course
        }

        print("Student Added Successfully ✅")

    elif choice == "2":

        print("\n===== STUDENT RECORDS =====")

        for name, details in students.items():

            print("\nName:", name)

            for key, value in details.items():
                print(key, ":", value)

    elif choice == "3":

        search = input("Enter student name to search: ")

        if search in students:

            print("\nStudent Found ✅")
            print("Name:", search)

            for key, value in students[search].items():
                print(key, ":", value)

        else:
            print("Student Not Found ❌")

    elif choice == "4":

        print("\nSystem Closed Successfully 🚀")
        break

    else:
        print("Invalid Choice")