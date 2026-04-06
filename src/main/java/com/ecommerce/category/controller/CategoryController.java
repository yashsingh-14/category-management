package com.ecommerce.category.controller;

import com.ecommerce.category.entity.Category;
import com.ecommerce.category.repository.CategoryRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "*")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    // CREATE - Add a new category
    @PostMapping
    public ResponseEntity<?> createCategory(@Valid @RequestBody Category category) {
        category.setStatus(true);
        Category savedCategory = categoryRepository.save(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    // READ - Get all active categories (status = true)
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryRepository.findByStatusTrue();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    // UPDATE - Update an existing category
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable int id, @Valid @RequestBody Category categoryDetails) {
        return categoryRepository.findById(id)
                .map(existingCategory -> {
                    existingCategory.setCategoryName(categoryDetails.getCategoryName());
                    existingCategory.setDescription(categoryDetails.getDescription());
                    Category updatedCategory = categoryRepository.save(existingCategory);
                    return new ResponseEntity<Object>(updatedCategory, HttpStatus.OK);
                })
                .orElse(new ResponseEntity<>("Category not found with id: " + id, HttpStatus.NOT_FOUND));
    }

    // DELETE - Soft delete (set status to false)
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable int id) {
        return categoryRepository.findById(id)
                .map(category -> {
                    category.setStatus(false);
                    categoryRepository.save(category);
                    return new ResponseEntity<Object>("Category deleted successfully", HttpStatus.OK);
                })
                .orElse(new ResponseEntity<>("Category not found with id: " + id, HttpStatus.NOT_FOUND));
    }
}
