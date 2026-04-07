# Stage 1: Build React Frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install
COPY frontend/ ./
RUN npm run build
# Build output goes to /app/src/main/resources/static/ (via vite.config.js outDir)

# Stage 2: Build Spring Boot Backend
FROM maven:3.9.6-eclipse-temurin-17 AS backend-build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Copy React build output into Spring Boot static resources
COPY --from=frontend-build /app/src/main/resources/static/ ./src/main/resources/static/
RUN mvn clean package -DskipTests

# Stage 3: Run
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=backend-build /app/target/category-management-1.0.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=render", "app.jar"]
