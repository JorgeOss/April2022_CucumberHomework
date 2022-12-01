package pages;




import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;







public class LoginPage {
WebDriver driver;
public LoginPage(WebDriver driver) {
	this.driver = driver;

}

//	WEB ELEMENTS
@FindBy(how = How.XPATH, using = "//input[@id='username']")
WebElement UserNameField;

@FindBy(how = How.XPATH, using = "//input[@id='password']")
WebElement PasswordField;

@FindBy(how = How.XPATH, using = "//button[@name='login']")
WebElement LoginButtonField;







//Method interaction with the web elements

	public void enterUserName(String username) {
		UserNameField.sendKeys(username);
		try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
	}

	
	public void enterPassword(String password) {
		PasswordField.sendKeys(password);
		try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
	}
	
	public void loginButton() {
		LoginButtonField.click();
		try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
	}
	

}





