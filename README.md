**HOMEVAULT - Home Inventory Manager**

HomeVault is a web-based home inventory management application that allows users to securely manage household inventory items. The application supports different user roles with different levels of access to the system.

---

## Identification
Student name: Autumn Mai
ID: n10119191
IFN636 Assignment 1 Software Requirements Analysis and Design

---

## Features
Register
Log in
Log out
Manage profile
Add inventory items
View inventory items
Edit inventory items
Delete inventory items

---

## Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Deployment: AWS EC2
Version Control: Git / GitHub
Design: Figma
Project Management: JIRA

---

## Architecture
HomeVault follows a client-server architecture. The React frontend provides the user interface and communicates with the Node.js/Express backend through API requests. The backend handles application logic, authentication, validation and database operations. MongoDB provides persistent storage for user and inventory data, with Mongoose used to define and interact with the database schemas.

---

## Prerequisites
Node.js and npm
MongoDB / MongoDB Atlas access
Git

---

## Setup

** 1. Clone the repository
git clone <repository-url>
cd home-inventory-manager

** 2. Configure environment variables
Create a .env file in the backend directory and add the required environment variables.

Example:

MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5000

** 3. Install dependencies
cd home-inventory-manager
npm run install-all

** 4. Run the application 
npm start

---

## Deployment 
The application is manually deployed to an AWS EC2 instance. CI/CD is outside the scope of this project.

**Deployment URL**: http://3.107.76.208:3000

---

## Known limitations
* The application is deployed using a manual deployment process; CI/CD is not implemented.
* Secondary user functionalities, including adding comments and flagging items, have not yet been implemented.
* Admin users are not yet able to add additional members to the inventory.
