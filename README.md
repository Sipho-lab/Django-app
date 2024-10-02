# Django and React Authentication System

This project is a web application that uses **Django** as a backend to handle user authentication and **React** as a frontend for user interaction. Users can log in, log out, and view their favorite Pokémon.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Creating a User](#creating-a-user)
- [Usage](#usage)

## Technologies Used
- **Backend**: Django, Django Rest Framework
- **Frontend**: React, Axios
- **Database**: SQLite (default)

## Features
- User registration through Django Admin
- Login and logout functionality
- Display of user's favorite Pokémon on the home page
- Basic error handling for authentication

## Setup Instructions

### Prerequisites
- Python 3.x
- Node.js and npm
- Django (3.x or later)
- Django Rest Framework

### Backend Setup
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. Create a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows use: venv\Scripts\activate
3. Install Django and Django Rest Framework:
    ```bash
    pip install django djangorestframework
4. Run initial migrations:
    ```bash
    python manage.py migrate
5. Create a superuser:
    ```bash
    python manage.py createsuperuser
Follow the prompts to set a username, email, and password for the superuser account.

6. Start the Django server:
     ```bash   
    python manage.py runserver

Frontend Setup

7. Navigate to the frontend directory:
    ```bash
    cd frontend
    
8. Install dependencies:
    ```bash
    npm install
9. Start the React development server:
    ```bash
    npm start

Creating a User

10. Open the Django Shell:
      ```bash
      python manage.py shell
      
11. Create a User in the Shell:
      ```bash
    from api.models import User 

    user = User.objects.create_user(
        username='newuser',         # Replace with desired username
        password='newpassword',     # Replace with desired password
        favourite_pokemon='Pikachu' # Set additional fields
    )
12. Exit the Shell:
      ```bash  
    exit()

Usage
Open your browser and go to http://localhost:3000 to access the React application.
Log in using the credentials of a user created in the Django admin interface.
Upon successful login, you will be redirected to the home page where your favorite Pokémon will be displayed.
Use the "Logout" button on the home page to log out and return to the login page.
