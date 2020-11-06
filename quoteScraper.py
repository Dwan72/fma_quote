import sys

print("This script parses a text file to be readable")

if not sys.argv[1]:
    print("you have to enter a filename")
    sys.exit()


file_name = sys.argv[1]


file_obj = open(file_name, mode='r')
file_output = open("organized_quote.txt", mode='w')


print(file_obj)



# for line in file_obj:
#     if line[0] == "(":
#         continue

#     elif line[0] == '"':
#         continue


testArray = []
testObj = {1, "quote1", "alphonse"} 
testObj2 = {2, "quote2", "joseph"}

testArray.append(testObj)
testArray.append(testObj2)

print(testArray)

