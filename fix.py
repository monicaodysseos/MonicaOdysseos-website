import re

with open("src/data/articles.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

start_idx = 23
end_idx = 48

raw_lines = lines[start_idx:end_idx]
joined_raw = "".join(raw_lines)

prefix = '    "content": "'
suffix = '"\n'

inner_text = joined_raw[len(prefix):-len(suffix)]
# Replace actual newlines with the 2-character string "\n"
fixed_inner_text = inner_text.replace('\n', '\\n')

fixed_line = prefix + fixed_inner_text + suffix

new_lines = lines[:start_idx] + [fixed_line] + lines[end_idx:]

with open("src/data/articles.js", "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print("Fixed!")
