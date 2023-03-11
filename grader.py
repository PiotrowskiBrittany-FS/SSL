import sys

name = input("What is your name? ")
print("Welcome " + name)

assignment = input("What is the assignment name? ")
print("assignment name: " + assignment)

grade = float(input("What is the grade you recieved for " +assignment + "? "))
intgrade = (int(grade))
if intgrade >= 90 and intgrade <= 100:
    print(name + " you recieved a letter grade of an A for " + assignment)
elif intgrade >= 80 and intgrade <= 90:
    print(name + " you recieved a letter grade of a B for " + assignment)
elif intgrade >= 70 and intgrade <= 80:
    print(name + " you recieved a letter grade of a C for " + assignment)
elif intgrade >= 60 and intgrade <= 70:
    print(name + " you recieved a letter grade of a D for " + assignment)
else:
    print(name + " you recieved a letter grade of a F for " + assignment)