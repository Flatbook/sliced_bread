package com.interview.sonder.slicedbread.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.interview.sonder.slicedbread.entity.OrderEntity;
import com.interview.sonder.slicedbread.exception.OrderNotFoundException;
import com.interview.sonder.slicedbread.services.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.http.ResponseEntity;

import java.util.UUID;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class OrderControllerTest {

    @Mock
    private OrderService orderService;

    @Spy
    private ObjectMapper mapper = new ObjectMapper();

    @InjectMocks
    private OrderController orderController = new OrderController();

    private String name = "David";
    private Integer amount = 1;
    private String city = "Montreal";
    private String province = "Quebec";
    private String country = "Canada";
    private UUID uuid = UUID.randomUUID();

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void createOrder_whenGivenValidInformation_callsSaveOrderWithCorrectInformation() throws OrderNotFoundException {
        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setName(name);
        orderEntity.setAmount(amount);
        orderEntity.setCity(city);
        orderEntity.setProvince(province);
        orderEntity.setCountry(country);
        orderEntity.setUuid(uuid);

        ArgumentCaptor<OrderEntity> orderEntityCaptor = ArgumentCaptor.forClass(OrderEntity.class);
        when(orderService.createOrder(orderEntity)).thenReturn(orderEntity);

        ResponseEntity<OrderEntity> result = orderController.createOrUpdateOrder(orderEntity);
        verify(orderService).createOrder(orderEntityCaptor.capture());

        assertEquals(name, result.getBody().getName());
        assertEquals(amount, result.getBody().getAmount());
        assertEquals(city, result.getBody().getCity());
        assertEquals(province, result.getBody().getProvince());
        assertEquals(country, result.getBody().getCountry());
        assertEquals(uuid, result.getBody().getUuid());
    }
}
