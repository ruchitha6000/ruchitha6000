# Online Hospital Management System

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java"/>
</div>

## Overview

The Online Hospital Management System is a comprehensive web application designed to streamline hospital operations by integrating patient, doctor, and administrative functionalities. Built with a **React.js** frontend, a **Spring Boot** backend, and a **MySQL** database, this system aims to reduce the time, manpower, and costs associated with traditional hospital record management.

## Features

### 1. Doctor's Interface

- **Access Patient Records**: View detailed patient information, including medical history and previous prescriptions.
- **Appointment Management**: Review and manage scheduled appointments.
- **Medical Updates**: Upload and update patient reports, symptoms, and ongoing treatments.
- **Prescription Management**: Provide and update prescriptions accessible to patients.

### 2. Patient's Interface

- **User Registration and Login**: Create and manage personal profiles securely.
- **Appointment Booking**: Schedule, view, and cancel appointments with preferred doctors.
- **Prescription Access**: View prescriptions and treatment plans provided by doctors.

### 3. Administrative Interface

- **Patient Record Management**: Create and update patient profiles, including personal details and medical history.
- **Doctor Profile Management**: Add and update doctor profiles, qualifications, and availability.
- **Appointment Status Tracking**: Monitor and update the status of appointments.
- **Data Archiving**: Organize and archive records of patients who have completed their treatments.

## System Architecture

The application is divided into three main components:

1. **Frontend**: Developed using React.js, it provides an interactive and user-friendly interface for patients, doctors, and administrative staff.
2. **Backend**: Built with Spring Boot, it handles business logic, data processing, and communication between the frontend and the database.
3. **Database**: MySQL is used to store and manage all application data securely.

## Installation and Setup

### Prerequisites

- **Java Development Kit (JDK)**: Version 8 or higher.
- **Node.js and npm**: Ensure you have the latest versions installed.
- **MySQL**: Set up a MySQL server and create a database for the application.

### Backend Setup (Spring Boot)

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/hospital-management-system.git
   cd hospital-management-system/backend
   ```

2. **Configure the Database**:
   - Update `application.properties` or `application.yml` with your MySQL database credentials.

3. **Build and Run the Backend**:
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```

   The backend server should now be running on `http://localhost:8080/`.

### Frontend Setup (React.js)

1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure API Endpoints**:
   - Update API endpoint configurations to match the backend server URL (`http://localhost:8080/`).

4. **Run the Frontend**:
   ```bash
   npm start
   ```

   The frontend application should now be running on `http://localhost:3000/`.

## Usage

- **Access the Application**: Navigate to `http://localhost:3000/` in your web browser.
- **Login or Register**: Use the appropriate interface to log in or register as a patient, doctor, or admin.
- **Explore Features**: Utilize the system's functionalities based on your user role.

## Contributing

We welcome contributions from the community to enhance the system's features and functionality. To contribute:

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page.
2. **Create a New Branch**: Use `git checkout -b feature/your-feature-name` to create a new branch.
3. **Make Changes**: Implement your feature or fix.
4. **Commit Changes**: Use `git commit -m 'Add your feature description'`.
5. **Push to Branch**: Use `git push origin feature/your-feature-name`.
6. **Create a Pull Request**: Navigate to the original repository and click "New Pull Request".

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

We extend our gratitude to all contributors and the open-source community for their invaluable support and resources.
