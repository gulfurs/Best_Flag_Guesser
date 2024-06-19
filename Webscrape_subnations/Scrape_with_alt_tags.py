import requests
from bs4 import BeautifulSoup
import json

# URL of the webpage to scrape
url = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content
soup = BeautifulSoup(response.text, "html.parser")

# Find all image tags with alt attributes
image_tags = soup.find_all("img", alt=True)

# Create a list to store image-alt pairs
image_alt_list = []

# Extract and store alt text and image URLs
for img in image_tags:
    alt_text = img["alt"]
    image_url = img["src"]
    image_alt_list.append({"image": image_url, "name": alt_text})

# Write the image-alt pairs to a JSON file
with open("Sovereign_list.json", "w") as f:
    json.dump(image_alt_list, f, indent=2)
