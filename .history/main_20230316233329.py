import requests

url = "https://www.example.com/file.zip"
response = requests.get(url)

with open("file.zip", "wb") as f:
    f.write(response.content)
