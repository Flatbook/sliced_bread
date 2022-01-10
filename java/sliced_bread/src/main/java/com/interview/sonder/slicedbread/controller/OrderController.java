package com.interview.sonder.slicedbread.controller;

import com.interview.sonder.slicedbread.entity.OrderEntity;
import com.interview.sonder.slicedbread.exception.OrderNotFoundException;
import com.interview.sonder.slicedbread.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService service;

    @GetMapping("/{id}")
    public ResponseEntity<OrderEntity> getOrderById(@PathVariable("id") UUID uuid) throws OrderNotFoundException {
        OrderEntity entity = service.getOrderByUUID(uuid);
        return new ResponseEntity<>(entity, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<OrderEntity> createOrUpdateOrder(@RequestBody OrderEntity order) throws OrderNotFoundException {
        OrderEntity updated = service.createOrder(order);
        return new ResponseEntity<>(updated, new HttpHeaders(), HttpStatus.OK);
    }
}
