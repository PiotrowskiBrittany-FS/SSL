import sys

#Asks the user their name
name = input("What is your name? ")
print("Welcome " + name)

#Asks the user the assignment name
assignment = input("What is the assignment name? ")
print("Assignment name: " + assignment)

grade = float(input("What is the grade you recieved for " +assignment + "? "))
# intgrade is the string of grade converted into an integer
intgrade = (int(grade))
# anything over a 90 will be displayed as an A
if intgrade >= 90:
    print(name + " you recieved a letter grade of an A for " + assignment)
# anything between 80 - 90 will be displayed as a B
elif intgrade >= 80 and intgrade <= 90:
    print(name + " you recieved a letter grade of a B for " + assignment)
# anything between 70 - 80 will be displayed as a C
elif intgrade >= 70 and intgrade <= 80:
    print(name + " you recieved a letter grade of a C for " + assignment)
# anything between 60 - 70 will be displayed as a D
elif intgrade >= 60 and intgrade <= 70:
    print(name + " you recieved a letter grade of a D for " + assignment)
# anything below a 60 will be displayed as an F
else:
    print(name + " you recieved a letter grade of a F for " + assignment)