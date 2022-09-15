package example.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import example.model.Pet;

@RestController
public class PetController {

	@GetMapping(value="/pet")
	public Pet myMethod() {
		return new Pet("R2-D2", "Walking Trashcan");
	}
	
	@GetMapping(value="/name/{name}")
	public String myName(@PathVariable("name")String name) {
		System.out.println("You've pinged the server! Your name is: "+name);
		return name;
	}
}
