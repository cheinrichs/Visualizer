import os
import re

# Specify the directory to search
root_dir = '.'

# Create an empty list to store the file paths
files = []
fileMap = []

# Finds anything in quotes, usually a line like import React from 'React'
pattern = "'(.*?)'|\"(.*?)\""
# pattern = r'"(.*?)"'

# Use os.walk to recursively search the directory
for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.js'):
            file_path = os.path.join(dirpath, filename)
            files.append(file_path)
            f = open(file_path, "r")
            for line in f:
                if "import" in line:
                    print(line)
                    match = re.search(pattern, line)
                    if match:
                        fileMap.append([file_path, match.group()])

print(fileMap)
