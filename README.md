6.47.57
 
# print("hello world")

# variables 
# name = "Tejas"
# age = 5
# print(name)
# print(age)

# isAdult = True
# print(isAdult)

# input 
# name = input("Enter name here ")
# print("Hello " + name)

# type conversion 
# old_age = input("Enter your old age ")
# new_age = int(old_age) + 2;
# print(new_age)

# similarly there are float() str() bool()

# number = 18
# print(float(number))

# first = input("Enter first number ")
# second = input("Enter second number ")
# # sum = first + second # it will concatenate the strings 
# sum = int(first) + int(second)
# print(sum)
# print("The sum is : " + str(sum))


# strings
# name = "Tony Stark"
# # these functions are not updating the string, it is giving us the new string
# print(name.upper()) # it will give all characters in uppercase
# print(name.lower()) # it will give all characters in lowercase
# print(name.find('S')) # if true it will return index otherwise -1
# print(name.find(' ')) # if true it will return index otherwise -1
# print(name.replace("Tony Stark", "Ironman")) # it will replace the Tony stark
# print(name.replace("T", "M")) # it will replace the T by M
# print(name)

# keywords 
# input() print() 
# name = "Tony Stark"
# print("Ironman" in name) # false
# print("k" in name) # true

# arithmetic operators
# print(5 + 2)
# print(5 - 2)
# print(5 * 2)
# print(5 / 2) # 2.5
# print(5 // 2) # 2 # decimal ke baad wala part hat jayega
# print(5 % 2) # 1
# print(5 ** 2) # 5^2 = 25

# comparison operators
# > < >= <= == !=

# logical operators
# print(3 > 2 or 5 < 2)
# print(3 > 2 and 5 < 2)
# print(not 3 > 2)

# if-else
# age = 20
# if(age >= 18):
#     print("You can vote")
# elif age < 18 and age > 3:
#     print("go to school")
# else:
#     print("Bacchaa haii tu")

# range
# range(5) # 0,1,2,3,4
# numbers = range(5)
# print(numbers)

# loops 

# i = 1
# while i <= 5:
#     print(i)
#     i += 1

# for i in range(5):
#     print(i)

# list
# collection of items # stores primitive datatypes
marks = [98,96,76]
# print(marks)
# print(marks[1])
# print(marks[-1])
# print(marks[0:2])

# for score in marks:
#     print(score)

# marks.append(99) # enters 99 at end
# marks.insert(0, 100) # enters 100 at start of list
# print(marks)
# print(len(marks)) # length of list

# print(99 in marks) # checks the presece of 99

# i = 0
# while i < len(marks):
#     print(marks[i])
#     i += 1

# marks.clear() # completely clears the list
# print(marks)

# LHS to RHS indexing => start from 0, 1 , ...
# RHS to LHS indexing => start from -1, -2, ...

# arr = [3,2,9,"hello"]
# print(arr)

# break and continue
# students = ["ram", "shyam", "kishan", "radha", "radhika"]

# for student in students:
#     if student == "radha":
#         break
#     print(student)

# for student in students:
#     if student == "kishan":
#         break
#     print(student)

# tuple
# it is immutable 
# once you made it you cannot change it 
# marks = (95,88,95, 99)
# # marks[0] = 100 # will give error as it is immutabe
# print(marks.count(95))
# print(marks.index(99))

# person = "ram", "shyam", "abhi"
# it will by-default a tuple

# set
# not have specific order and index
# use loop for iterating
# marks = {95, 99, 97, 97, 100}
# print(marks)

# dictionary
# marks = {"english":95, "chemistry":98}
# print(marks)
# print(marks["chemistry"])
# marks["physics"] = 99
# print(marks)

# marks["physics"] = 87 # we can upate it also
# print(marks)

# functions
# 1. in-built functions
# 2. module functions
# 3. user defined functions

# module functions

# import math 
# print(dir(math)) # u can see all the functions

# from math import sqrt # import specific function
# from math import * # import all functions at a time
# print(sqrt(16))
    
# user defined functins
# def function_name(parameters):
#     # do something

# def printSum(first, second):
#     print(first + second)

# printSum(4, 3)

# def printMul(first, second):
#     return first * second 

# num = printMul(3, 5)
# print(num)