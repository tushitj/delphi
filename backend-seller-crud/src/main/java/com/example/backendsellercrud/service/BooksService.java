package com.example.backendsellercrud.service;


import com.example.backendsellercrud.model.Book;
import com.example.backendsellercrud.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BooksService {

    @Autowired
    private BooksRepository _booksRepository;

    public List<Book> fetchAllBooks() {
        List<Book> result = new ArrayList<>();
        _booksRepository.findAll().forEach(result::add);
        return result;
    }

    public Book createOrUpdateBook(Book book) {
        return _booksRepository.save(book);
    }

    public Book getBookById(int id) {
        return _booksRepository.findById(id).orElse(null);
    }

    public void deleteById(int id) {
        _booksRepository.deleteById(id);
    }
}
