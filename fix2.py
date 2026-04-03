import re

with open("src/data/articles.js", "r", encoding="utf-8") as f:
    text = f.read()

# I want to find the place where `help us build."` is and split it.
# The `fix.py` script literally replaced `\n` with `\\n` inside line 24.
# We will use regex to find where `{"slug": "superintelligence-what-is-it-really"` starts or something similar.
# Actually, the string looks like:
# ... help us build.\"\n  },\n  {\n    \"slug\": \"superintelligence-what-is-it-really\",\n    \"title\": \"Superintelligence: ...

# Let's fix this by replacing the escaped string with actual JSON.

# This string is currently INSIDE `    "content": "...`
match = re.search(r'(help us build\.")\\n  \},\\n  \{\\n    "slug":', text)
if match:
    # We will split the string at `help us build."`
    first_part = text[:match.end(1)] # Up to the end of the `"` 
    # The rest is the string from `\n  },\n  {\n...` which we need to unescape!
    rest = text[match.end(1):]
    
    # We remove the trailing `"\n` that was added by `fix.py` at the very end of line 24.
    # The suffix was `"\n`
    if rest.endswith('"\n'):
       rest = rest[:-2] + '\n'
       
    # Now we unescape `rest` 
    unescaped_rest = rest.replace('\\n', '\n').replace('\\"', '"') # Wait, did fix.py escape quotes? No, only newlines!
    # Let's just do replace('\\n', '\n')
    unescaped_rest = rest.replace('\\n', '\n')
    
    with open("src/data/articles.js", "w", encoding="utf-8") as f:
        f.write(first_part + unescaped_rest)
    print("Fixed formatting!")
    
