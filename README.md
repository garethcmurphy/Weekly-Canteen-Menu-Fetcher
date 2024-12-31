# Weekly Canteen Menu Fetcher 🍽️📅  

This repository provides a script to fetch the weekly menu from the canteen's website and distribute it to staff. It automates the process of retrieving, formatting, and sharing the menu via email or other communication platforms.

---

## Features ✨  

- **Automated Fetching**: Retrieve the weekly menu from the canteen's website.  
- **Custom Formatting**: Process and format the menu for easy readability.  
- **Easy Distribution**: Share the menu with staff via email or messaging platforms.  

---

## Prerequisites 🛠️  

- Python 3.8+  
- Required Python libraries:
  - `requests`
  - `beautifulsoup4`
  - `smtplib` (for email notifications)  

Install dependencies:  
pip install requests beautifulsoup4  

---

## Installation  

1. Clone the repository:  
git clone https://github.com/your-username/canteen-menu-fetcher.git  
cd canteen-menu-fetcher  

2. Install dependencies:  
pip install -r requirements.txt  

---

## Usage 🔧  

1. **Fetch the Menu**:  
Run the script to fetch and format the weekly menu:  
python fetch_menu.py  

2. **Send to Staff** (via email):  
Ensure email credentials are set in the `.env` file:  
