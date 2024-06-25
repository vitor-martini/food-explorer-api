# Food Explorer API 
This repository contains the backend for the Food Explorer application, developed as a final project of the Explorer full-stack course by [Rocketseat](https://www.rocketseat.com.br). The primary purpose of this project is to solidify my understanding and skills in building backend applications.
## Overview 

The Food Explorer API is built with AdonisJs 4.1 and follows a structured architecture that emphasizes object-oriented programming (OOP) principles. The architectural layers include:
 
- **Repositories** : Handle data access and storage.
 
- **Services** : Contain business logic.
 
- **Service Providers** : Manage service instantiation and configuration.
 
- **Controllers** : Manage incoming requests and return responses.
 
- **Routes** : Define the API endpoints and link them to controllers.

## Project Structure 


```bash
/app
  /Controllers
  /Models
  /Services
  /Providers
  /Repositories
/routes
```

## Features 
 
- **Authentication** : Secure user login and registration.
 
- **Body Parsing** : Handle request bodies efficiently.
 
- **CORS** : Manage cross-origin resource sharing.
 
- **Database Management** : Utilize Lucid ORM for database interactions.
 
- **Migrations and Seeds** : Easily set up and populate the database.

## Setup 

To get started:
 
1. Clone the repository:


```bash
git clone https://github.com/vitor-martini/food-explorer-api
cd food-explorer-api
```
 
2. Install dependencies:


```bash
npm install
```
 
3. Run migrations:


```bash
adonis migration:run
```

## Motivation 

I developed this API entirely on my own by consulting various resources. This project was not part of a guided class but rather a self-driven endeavor to learn and apply my knowledge.

## Figma Design 
The design for the Food Explorer application can be found on [Figma](https://www.figma.com/community/file/1196874589259687769/food-explorer-v2) .
## Conclusion 

This project is a significant step in my learning journey, demonstrating my ability to build and manage a backend application.