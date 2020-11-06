import sys

print("This script parses a text file to be readable")

if not sys.argv[1]:
    print("you have to enter a filename")
    sys.exit()


file_name = sys.argv[1]
file_obj = open(file_name, mode='r')
print(file_obj)

for line in file_obj:
    print(line)