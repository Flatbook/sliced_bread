package com.interview.sonder.slicedbread.services;

import com.interview.sonder.slicedbread.entity.OrderEntity;
import com.interview.sonder.slicedbread.repository.OrderRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    private OrderService orderService;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
        orderService = new OrderService(orderRepository);
    }

    @Test
    public void saveOrder_whenEntityIsPassedToOrderService_thenOrderRepositoryCallsSave() {
        OrderEntity entity = new OrderEntity();
        when(orderRepository.save(entity)).thenReturn(entity);

        assertEquals(entity, orderService.createOrder(entity));
    }
}