package com.example.backendsellercrud.service;


import com.example.backendsellercrud.model.Book;
import com.example.backendsellercrud.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BooksService {



    public List<Book> fetchAllBooks(){
        Book book = new Book();
        book.setId(1);
        book.setName("book-1");
        List<Book> list = new ArrayList<>();
        list.add(book);
        return list;
    }
}
