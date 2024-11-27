package com.catering.repository;

import com.catering.model.Order;
import com.catering.model.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserIdOrderByOrderDateDesc(Long userId);
    List<Order> findByUserIdAndStatus(Long userId, OrderStatus status);
    List<Order> findByUserIdAndOrderDateBetween(Long userId, LocalDateTime start, LocalDateTime end);
}