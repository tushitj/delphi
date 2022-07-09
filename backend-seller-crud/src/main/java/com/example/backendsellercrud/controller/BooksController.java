package com.example.backendsellercrud.controller;


import com.example.backendsellercrud.model.Book;
import com.example.backendsellercrud.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/books")
public class BooksController {

    @Autowired
    BooksService _bookService;

    @GetMapping
    public List<Book> getAllBooks(){
        return _bookService.fetchAllBooks();
    }
}
