package com.example.backendsellercrud.model;


import lombok.Data;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@Data
public class Book {
    int id;
    String name;
}
