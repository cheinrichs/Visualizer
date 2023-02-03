import os
import re
import json

# Specify the directory to search
root_dir = '.'

# Create an empty list to store the file paths
files = []
fileMap = []
nodeMap={}

# Finds anything in quotes, usually a line like import React from 'React'
pattern = r'(["\'])(.*?)\1'

# Create the Data section of the graph
for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.tsx'):
            file_path = os.path.join(dirpath, filename)
            files.append(file_path)
            f = open(file_path, "r")
            for line in f:
                if "import" in line:
                    print(line)
                    match = re.search(pattern, line)
                    if match:
                        fileMap.append([file_path, match.group(2)])
                        if file_path in nodeMap:
                            nodeMap[file_path] += 10
                        else:
                            nodeMap[file_path] = 10
                        if match.group(2) in nodeMap:
                            nodeMap[file_path] += 10
                        else:
                            nodeMap[match.group(2)] = 10

# print(fileMap)
# print(nodeMap)

# Create the Nodes section of the graph

nodes = []

for node in nodeMap:
    newNode = {
        'id': node,
        'marker': {
            'radius':nodeMap[node]
        }
    }
    nodes.append(newNode)

chartOptions = {
    'chart': {
        'type': "networkgraph",
    },
    'title': {
        'text': "File Size and Connection Chart",
    },
    'series': [
        {
            'marker': {
                'radius': 13,
            },
            'dataLabels': {
                'enabled': "true",
                'linkFormat': "",
                'allowOverlap': "true",
                'style': {
                    'textOutline': "false",
                },
            },
            'data': fileMap,
            'nodes': nodes,
        }
    ]
}


with open('fileAnalyzer.json', 'w') as convert_file:
     convert_file.write(json.dumps(chartOptions))