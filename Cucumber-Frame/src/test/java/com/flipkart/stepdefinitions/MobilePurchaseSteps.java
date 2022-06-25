package com.flipkart.stepdefinitions;

import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.When;

public class MobilePurchaseSteps {
	@When("User Seacrh the Mobile brand and Choose Mobile Model")
	public void user_Seacrh_the_Mobile_brand_and_Choose_Mobile_Model() throws InterruptedException {
		TVPurchaseSteps.driver.findElement(By.name("q")).sendKeys("Samsung");
		TVPurchaseSteps.driver.findElement(By.xpath("//button[@type= 'submit']")).click();
		Thread.sleep(3000);
	}

	@When("User Should Add the Selected Mobile To addToCart and Make a Payment")
	public void user_Should_Add_the_Selected_Mobile_To_addToCart_and_Make_a_Payment() throws InterruptedException {
		WebElement select = TVPurchaseSteps.driver.findElement(By.xpath("(//div[@class='_4rR01T'])[4]"));
		select.click();
		Thread.sleep(3000);
		String s = select.getText();
		System.out.println(s);
String prwnd = TVPurchaseSteps.driver.getWindowHandle();
		
		Set<String> allwin = TVPurchaseSteps.driver.getWindowHandles();
		for(String x :allwin ) {
			if(!x.equals(prwnd)){
				TVPurchaseSteps.driver.switchTo().window(x);
				
			}
		}
	}



}
