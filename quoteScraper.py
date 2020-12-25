import sys
import json

print("This script parses a text file to be readable")

if not sys.argv[1]:
    print("you have to enter a filename")
    sys.exit()


file_name = sys.argv[1]


file_obj = open(file_name, mode='r', encoding="utf-8")
file_output = open("organized_quote.txt", mode='w', encoding="utf-8")


Lines = file_obj.readlines()


author = ""
quoteArray = []
quote_id = 0
for line in Lines:
    quote_txt = ""
    if line[0].isalpha():
        author = line.strip("\n")
    if line[0] =='"':
        stripped_quote = line.strip("\n")
        stripped_quote = stripped_quote.strip("\t")
        stripped_quote = stripped_quote.replace("\\", "")
        stripped_quote = stripped_quote.replace('"', '')
        quote_txt = str(quote_id) + "#" + author + "#" + stripped_quote
        quoteArray.append(quote_txt)

        quote_id += 1



json_obj_array = []
for quote in quoteArray:
    splitted_quote = quote.split("#")
    json_obj = {
        "id": splitted_quote[0],
        "author": splitted_quote[1],
        "quote": splitted_quote[2]
    }
    json_obj_array.append(json_obj)

print(json_obj_array)



