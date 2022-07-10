package com.example.backendsellercrud;

import com.example.backendsellercrud.model.Book;
import com.example.backendsellercrud.repository.BooksRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
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
            repository.save(new Book(1,"book-1"));
            repository.save(new Book(2,"book-3"));
        };
    }
}
