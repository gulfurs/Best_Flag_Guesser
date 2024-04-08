import requests
from bs4 import BeautifulSoup
import json

# Get URL
page = requests.get("https://commons.wikimedia.org/wiki/Flags_of_country_subdivisions")

# Display status code
# print("Status code:", page.status_code)

# Check if the request was successful (status code 200)
if page.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(page.content, 'html.parser')

    # Find all h2 tags
    h2_tags = soup.find_all('h2')
    img_tags = soup.find_all('img')

    # Extract and print the text of h2 tags
    #for h2 in h2_tags:
    #    print(h2.text.strip())

    image_urls = []
    for img in img_tags:
        src = img.get('src')
        if src:
            image_urls.append({"image": src})
    
    with open('image_urls.json', 'w') as file:
        json.dump(image_urls, file, indent=4)
else:
    print('Failed to retrieve the webpage')
