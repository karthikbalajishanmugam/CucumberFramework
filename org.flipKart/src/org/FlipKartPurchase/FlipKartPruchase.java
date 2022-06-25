package org.FlipKartPurchase;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FlipKartPruchase {
	public static void main(String[] args) throws IOException, InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\balas\\eclipse-workspace\\org.flipKart\\driver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.flipkart.com/");
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("(//input[@autocomplete = 'off'])[2]")).sendKeys("9443822714");
		driver.findElement(By.xpath("(//input[@autocomplete = 'off'])[3]")).sendKeys("bala@1704");
		driver.findElement(By.xpath("(//button[@type= 'submit'])[2]")).click();
		Thread.sleep(3000);
		driver.findElement(By.name("q")).sendKeys("realme");
		driver.findElement(By.xpath("//button[@type= 'submit']")).click();
		Thread.sleep(3000);
		List<WebElement> mobiles = driver.findElements(By.xpath("//div[@class='_4rR01T']"));
		
	    
		for(WebElement x : mobiles) {
			String m =  x.getText();
			System.out.println(m);
			
		
	Thread.sleep(3000);
	    
		WebElement select = driver.findElement(By.xpath("(//div[@class='_4rR01T'])[4]"));
		select.click();
		Thread.sleep(3000);
		String s = select.getText();
		System.out.println(s);
String prwnd = driver.getWindowHandle();
		
		Set<String> allwin = driver.getWindowHandles();
		for(String k :allwin ) {
			if(!k.equals(prwnd)){
				driver.switchTo().window(k);
				
			}
		}
		
		Thread.sleep(3000);
		
		 TakesScreenshot tk = (TakesScreenshot)driver;
			File scr = tk.getScreenshotAs(OutputType.FILE);
			File trg = new File("C:\\Users\\balas\\eclipse-workspace\\org.flipKart\\src\\screen shot\\flipkart2.png");
			FileUtils.copyFile(scr,trg);
		
		
		
	    
	    
		 
			
		 
		
		}


}
	

}
