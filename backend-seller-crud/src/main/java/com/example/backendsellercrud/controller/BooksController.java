package com.example.backendsellercrud.controller;


import com.example.backendsellercrud.model.Book;
import com.example.backendsellercrud.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/books")
public class BooksController {

    @Autowired
    BooksService _bookService;

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable int id)
    {
        return _bookService.getBookById(id);
    }

    @GetMapping
    public List<Book> getAllBooks()
    {
        return _bookService.fetchAllBooks();
    }


    @PostMapping
    public Book saveBook(@RequestBody Book book) {
        return _bookService.createOrUpdateBook(book);
    }

    @PutMapping
    public Book updateBook(@RequestBody Book book) {
        return _bookService.createOrUpdateBook(book);
    }

    @DeleteMapping("/{id}")
    public void deleteBookById(@PathVariable int id) {
        _bookService.deleteById(id);
    }
}
