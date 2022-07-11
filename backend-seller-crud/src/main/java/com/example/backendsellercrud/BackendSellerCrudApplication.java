package com.example.backendsellercrud;

import com.example.backendsellercrud.model.Book;
import com.example.backendsellercrud.repository.BooksRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendSellerCrudApplication {

    @Autowired
    private BooksRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(BackendSellerCrudApplication.class, args);
    }

    @Bean
    InitializingBean sendDatabase() {
        return () -> {
            repository.save(new Book(1, "book-1", 100, "English"));
            repository.save(new Book(2, "book-2", 200, "Hindi"));
            repository.save(new Book(3, "book-3", 300, "French"));
            repository.save(new Book(4, "book-4", 400, "Spanish"));
            repository.save(new Book(5, "book-5", 500, "German"));
        };
    }
}
