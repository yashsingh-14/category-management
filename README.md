# Category Management System

A full-stack web application that allows administrators to effectively manage product categories. This project features a clean standalone frontend seamlessly integrated with a Spring Boot backend.

## ✨ Features

- **Create**: Add a new product category with a relevant name and description.
- **View**: Display all available categories dynamically in a clean data table.
- **Update**: Edit details of any existing category on the fly.
- **Delete (Soft Delete)**: Safely archive categories instead of permanently dropping them from the database, preventing accidental data loss.

## 🛠 Tech Stack

- **Backend**: Java, Spring Boot, Spring Data JPA
- **Frontend**: HTML5, Vanilla JavaScript, Bootstrap 5 
- **Database**: MySQL (Local Environment) / PostgreSQL (Production)

## 🏗 System Overview

The system is built on a straightforward client-server architecture:
- **Frontend Interface:** Built with clean HTML and Bootstrap. It uses the native JavaScript `fetch` API to make asynchronous background requests to the backend without reloading the page.
- **RESTful API:** A Spring Boot backend receives the network requests, processes the business logic, and prepares the data.
- **Database Engine:** MySQL handles data persistence. The soft-delete feature ensures that deleted records are simply flagged as inactive rather than destroyed entirely.

## 🔌 API Endpoints 

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/categories` | Fetch a list of all active categories |
| `POST` | `/categories` | Create and save a new category |
| `PUT` | `/categories/{id}` | Update details for an existing category |
| `DELETE` | `/categories/{id}` | Perform a soft delete on a given category |

## 🚀 How to Run Locally

### Prerequisites
- JDK 17 or higher
- MySQL Server installed and running
- Maven (optional, if you're not using your IDE's built-in tools)

### Step-by-Step Instructions

1. **Clone the repository**
   ```bash
   git clone [Your-GitHub-Repository-Link]
   cd category-management
   ```

2. **Configure Database Settings**
   Open `src/main/resources/application.properties` and update the database credentials to match your local MySQL configuration:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/category_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

3. **Compile and Run**
   Running via terminal using Maven:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   *(Alternatively, simply run `CategoryManagementApplication.java` from your favorite IDE).*

4. **Access the Application**
   Once the server spins up, open your web browser and travel to:
   ```text
   http://localhost:8080
   ```

## 🌍 Important Links

- **Live Project URL:** [https://category-management-tzht.onrender.com/](https://category-management-tzht.onrender.com/)
- **GitHub Repository:** [https://github.com/yashsingh-14/category-management](https://github.com/yashsingh-14/category-management)

## 📸 Screenshots

> *(Tip: Drag and drop your project preview screenshots here)*

- `[Screenshot 1: Main Dashboard inside the browser]`
- `[Screenshot 2: Add / Edit Form active]`
- `[Screenshot 3: Delete Confirmation dialogue]`

## 🔮 Future Improvements

- Add a real-time search bar to filter categories efficiently.
- Implement server-side pagination for handling massive datasets.
- Add simple user authentication to protect the dashboard routes.
