# Category Management System

A full-stack web application for managing product categories, built with Spring Boot and a clean Bootstrap frontend. Supports creating, editing, viewing, and soft-deleting categories through a RESTful API.

---

## Features

- **Add Category** — Create new categories with name and description
- **View Categories** — List all active categories in a responsive table
- **Edit Category** — Update category details inline
- **Soft Delete** — Categories are deactivated (not permanently removed) for data safety
- **Form Validation** — Both client-side and server-side validation for required fields
- **Toast Notifications** — Real-time success/error feedback on every action

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Backend   | Java 17, Spring Boot 3.2            |
| Database  | MySQL                               |
| ORM       | Spring Data JPA (Hibernate)         |
| Frontend  | HTML, CSS, JavaScript, Bootstrap 5  |
| Build     | Maven                               |

---

## Project Structure

```
category-management/
├── pom.xml
├── README.md
└── src/main/
    ├── java/com/ecommerce/category/
    │   ├── CategoryManagementApplication.java
    │   ├── controller/
    │   │   └── CategoryController.java
    │   ├── entity/
    │   │   └── Category.java
    │   └── repository/
    │       └── CategoryRepository.java
    └── resources/
        ├── application.properties
        └── static/
            └── index.html
```

---

## Getting Started

### Prerequisites

- Java 17+
- Maven
- MySQL Server running on `localhost:3306`

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/category-management.git
   cd category-management
   ```

2. **Configure the database**

   Open `src/main/resources/application.properties` and update your MySQL credentials:

   ```properties
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

   > The database `category_db` will be created automatically on first run.

3. **Run the application**

   ```bash
   mvn spring-boot:run
   ```

4. **Open in browser**

   ```
   http://localhost:8080/
   ```

---

## API Endpoints

| Method   | Endpoint            | Description                        |
|----------|---------------------|------------------------------------|
| `GET`    | `/categories`       | Fetch all active categories        |
| `POST`   | `/categories`       | Create a new category              |
| `PUT`    | `/categories/{id}`  | Update an existing category        |
| `DELETE` | `/categories/{id}`  | Soft delete (sets status to false)  |

### Sample Request Body (POST / PUT)

```json
{
  "categoryName": "Electronics",
  "description": "Gadgets, phones, and accessories"
}
```

### Sample Response

```json
{
  "categoryId": 1,
  "categoryName": "Electronics",
  "description": "Gadgets, phones, and accessories",
  "createdAt": "2026-04-06T12:00:00",
  "updatedAt": "2026-04-06T12:00:00",
  "status": true
}
```

---

## Screenshots

<!-- Replace with actual screenshots -->

| View                | Screenshot                        |
|---------------------|-----------------------------------|
| Dashboard           | ![Dashboard](screenshots/dashboard.png)   |
| Add Category        | ![Add](screenshots/add-category.png)      |
| Edit Mode           | ![Edit](screenshots/edit-mode.png)        |

---

## Future Improvements

- Search and filter categories
- Pagination for large datasets
- Category image upload
- Role-based access control
- Export categories as CSV/Excel

---

## License

This project is open source and available under the [MIT License](LICENSE).
