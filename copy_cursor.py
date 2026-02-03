import shutil
import os
import sys

# Define numeric codes for unicode characters to avoid source code encoding issues
# "한유진" in unicode code points
username_chars = [54620, 12624, 12616]
username = "".join([chr(c) for c in username_chars])

# Construct paths
base_user_dir = f"C:\\Users\\{username}"
source = os.path.join(base_user_dir, ".gemini", "antigravity", "brain", "09c15979-56d7-4959-8ab9-989f4c58c57a", "cursor_small_1770141137639.png")
dest = os.path.join(base_user_dir, "Downloads", "portfolio_yujin", "public", "cursor_small.png")

print(f"Copying from: {source}")
print(f"Copying to: {dest}")

try:
    shutil.copy2(source, dest)
    print("SUCCESS: File copied successfully.")
except Exception as e:
    print(f"ERROR: Failed to copy file. {e}")
