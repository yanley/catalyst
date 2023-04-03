# Catalyst Medical Recruitment - Jobs
This is a web application built with React frontend, Express backend and MySQL database, which allows doctors to search for jobs across Australia.

Prerequisites

To run this application, you need to have the following software installed on your computer:

- Node.js (v14 or higher)
- npm (v7 or higher)
- MySQL server (v8 or higher)


Getting Started
Clone this repository to your local machine.
git clone https://github.com/yanley/catalyst.git

Install the required packages by running the following command in the root directory of the project:

npm install
Create a MySQL database named catalyst_jobs and import the catalyst_jobs.users.sql file located in the database directory to create the required tables.

Create a .env file in the root directory of the project and add the following environment variables:

- DB_HOST=localhost
- DB_USER=your-mysql-username
- DB_PASSWORD=your-mysql-password
- DB_NAME=doctor_jobs_australia

Start the application by running the following command in the root directory of the project:

npm start

Open your browser and go to http://localhost:3000 to view the application.


Features
- Doctor registration and login
- Job search by location and specialty
- Job posting by recruiters
- Doctor application for jobs
- Doctor profiles

Tech Stack
- React: Frontend framework
- Express: Backend framework
- MySQL: Database
- Axios: Promise based HTTP client for the browser and node.js

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contributing

Contributions are very welcome!
