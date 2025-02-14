package com.example.PlantCare;

import com.example.PlantCare.daos.UserDao;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@Disabled  // Désactive temporairement ce test
@SpringBootTest(classes = UserDao.class)


class PlantCareApplicationTests {

	@Test
	void contextLoads() {
	}

}
