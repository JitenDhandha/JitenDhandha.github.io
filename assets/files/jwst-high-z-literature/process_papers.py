import json
import warnings
import requests
from bs4 import BeautifulSoup

# Ignore bs4 warnings
warnings.filterwarnings("ignore", module='bs4')

# Open json file
with open("./papers_abridged.json", "r") as f:
    json_data = json.load(f)

# Loop through json object and enhance file
n_papers = len(json_data)

for i in range(n_papers):
    paper = json_data[i]

    # Download paper
    paper_response = requests.get(paper["arxiv_url"])

    soup = BeautifulSoup(paper_response.text, "lxml")

    # Get title
    title_object = soup.find("meta", {"name": "citation_title"})
    title = title_object["content"]

    # Get authors
    authors_object = soup.findAll("meta", {"name": "citation_author"})

    authors = []

    for author_object in authors_object:
        authors.append(author_object["content"])

    # Get publication date
    date_object = soup.find("meta", {"name": "citation_date"})
    date = date_object["content"]

    # Get abstract
    abs_object = soup.find("meta", {"name": "citation_abstract"})
    abstract = abs_object["content"]

    # Add to JSON file
    json_data[i]["title"] = title
    json_data[i]["authors"] = authors
    json_data[i]["date"] = date
    json_data[i]["abs"] = abstract

# Save JSON file to unabridge json
with open("./papers.json", "w") as f:
    json_str = json.dumps(json_data)
    f.write("papers = " + json_str)
