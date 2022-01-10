package com.interview.sonder.slicedbread.services;

import com.interview.sonder.slicedbread.entity.OrderEntity;
import com.interview.sonder.slicedbread.exception.OrderNotFoundException;
import com.interview.sonder.slicedbread.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public OrderEntity getOrderById(Long id) throws OrderNotFoundException
    {
        Optional<OrderEntity> order = orderRepository.findById(id);
        if(order.isPresent()) {
            return order.get();
        } else {
            throw new OrderNotFoundException("No order exists for given id");
        }
    }

    public OrderEntity getOrderByUUID(UUID uuid) throws OrderNotFoundException
    {
        Optional<OrderEntity> order = orderRepository.findByUuid(uuid);
        if(order.isPresent()) {
            return order.get();
        } else {
            throw new OrderNotFoundException("No order exists for given id");
        }
    }

    public OrderEntity createOrder(OrderEntity entity)
    {
            entity = orderRepository.save(entity);
            return entity;
    }
}
