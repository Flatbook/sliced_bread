package com.interview.sonder.slicedbread.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/")
	  public void homePage() {
	      
	  }
	
	@GetMapping("/cart")
	  public void cart() {
	      
	  }
	
	@GetMapping("/checkout")
	  public void checkout() {
	      
	  }
	
}
