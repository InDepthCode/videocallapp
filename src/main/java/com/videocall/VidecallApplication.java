package com.videocall;

import com.videocall.user.User;
import com.videocall.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VidecallApplication {

	public static void main(String[] args) {
		SpringApplication.run(VidecallApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserService userService) {
		return args -> {

			userService.register(User.builder().username("ram").password("ram").email("ram@ram.com").build());
			userService.register(User.builder().username("shyam").password("shyam").email("shyam@shyam.com").build());
			userService.register(User.builder().username("demo").password("demo").email("demo@demo.com").build());
		};

	}

}
