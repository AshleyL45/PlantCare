package com.example.PlantCare.daos;

import com.example.PlantCare.entities.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)  // Permet d'utiliser Spring avec JUnit 5
@JdbcTest
@Import(UserDao.class)
public class UserDaoTest {

    @Autowired
    private UserDao userDao;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @BeforeEach
    void setUp() {
        jdbcTemplate.execute("CREATE TABLE user (id BIGINT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)");
    }

    @Test
    void testSaveAndFindById() {
        User user = new User(null, "test@example.com", "password123", LocalDateTime.now());
        User savedUser = userDao.save(user);

        assertNotNull(savedUser.getId());
        assertEquals("test@example.com", savedUser.getEmail());

        User fetchedUser = userDao.findById(savedUser.getId());
        assertEquals(savedUser.getEmail(), fetchedUser.getEmail());
    }

    @Test
    void testFindAll() {
        userDao.save(new User(null, "user1@example.com", "pass1", LocalDateTime.now()));
        userDao.save(new User(null, "user2@example.com", "pass2", LocalDateTime.now()));

        List<User> user = userDao.findAll();
        assertEquals(2, user.size());
    }

    @Test
    void testUpdate() {
        User user = userDao.save(new User(null, "update@example.com", "pass123", LocalDateTime.now()));

        user.setEmail("updated@example.com");
        User updatedUser = userDao.update(user.getId(), user);

        assertEquals("updated@example.com", updatedUser.getEmail());
    }

    @Test
    void testDelete() {
        User user = userDao.save(new User(null, "delete@example.com", "pass123", LocalDateTime.now()));

        boolean deleted = userDao.delete(user.getId());
        assertTrue(deleted);
    }
}
