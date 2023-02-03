import re

pattern = r'(["\'])(.*?)\1'

text = "import { render, screen } from '@testing-library/react';"

match = re.search(pattern, text)
if match:
    print(match.group(2))