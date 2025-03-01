import os
import json
import requests

# === CONFIGURATION ===
JSON_INPUT_FILE = "Japan_flags.json"  # Change this to your actual JSON file
OUTPUT_FOLDER = "japan_prefectures"  # Change this to your desired folder name
METADATA_FILE = "japan_prefectures_metadata.json"
REQUEST_TIMEOUT = 10  # Timeout for image downloads (in seconds)

# Ensure output folder exists
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Load JSON file
try:
    with open(JSON_INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
except Exception as e:
    print(f"❌ Error reading {JSON_INPUT_FILE}: {e}")
    exit()

# Metadata list
metadata = []

# Function to download an image
def download_image(url, save_path):
    if not url.startswith("http"):
        url = "https:" + url  # Handle relative URLs
    try:
        response = requests.get(url, stream=True, timeout=REQUEST_TIMEOUT)
        if response.status_code == 200:
            with open(save_path, "wb") as f:
                f.write(response.content)
            print(f"✅ Downloaded: {save_path}")
            return True
        else:
            print(f"❌ Failed (Status {response.status_code}): {url}")
            return False
    except requests.RequestException as e:
        print(f"🚨 Error downloading {url}: {e}")
        return False

# Process each entry in the JSON file
for entry in data:
    name = entry.get("name", "unknown").replace(" ", "_").lower()
    image_url = entry.get("image", "")

    if not image_url:
        print(f"⚠️ Skipping {name}, no image URL provided.")
        continue

    # Define file path
    save_path = os.path.join(OUTPUT_FOLDER, f"{name}.png")

    # Download the image
    if download_image(image_url, save_path):
        # Modify path format to match expected metadata format
        metadata.append({
            "name": name,
            "image": f"/{OUTPUT_FOLDER}/{name}.png"  # Modified relative path
        })

# Save metadata.json
metadata_path = os.path.join(OUTPUT_FOLDER, METADATA_FILE)
with open(metadata_path, "w", encoding="utf-8") as f:
    json.dump(metadata, f, indent=4, ensure_ascii=False)

print(f"\n📄 Metadata file saved at: {metadata_path}")
print("✅ Image download and metadata creation completed!")
