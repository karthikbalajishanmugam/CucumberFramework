package com.flipkart.stepdefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	@Before
	public void beforemethod() {
		System.out.println("Before every method");
		
	}
	
	@After
	public void aftermethod() {
		System.out.println("After every method");
	}

}
