package pages;

import java.util.Random;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {
WebDriver driver;

public DashboardPage(WebDriver driver) {
	this.driver = driver;
	
}

// Web Elements

@FindBy(how = How.XPATH, using = "//h2[contains(text(), ' Dashboard ')]")
WebElement DashboardField;

@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Bank & Cash')]")
WebElement BankAndCashField;

@FindBy(how = How.XPATH, using = "//a[contains(text(), 'New Account')]")
WebElement NewAccountField;
	
@FindBy(how = How.XPATH, using = "//input[@id='account']")
WebElement AccountTittleField;

@FindBy(how = How.XPATH, using = "//input[@id='description']")
WebElement DescriptionField;

@FindBy(how = How.XPATH, using = "//input[@id='balance']")
WebElement InitialBalanceField;

@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
WebElement AccountNumberField;

@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
WebElement ContactPersonField;

@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
WebElement PhoneField;

@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
WebElement InternetBankingField;

@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
WebElement SubmitButtonField;

@FindBy(how = How.XPATH, using = "//div[@class = 'alert alert-success fade in']") WebElement ValidationMessage;


public int generateRandomNumber(int boundaryNum) {
	
	Random rnd = new Random();
	int generateNum = rnd.nextInt(boundaryNum);
	return generateNum;
	
}
	


// Web elements interacting with the methods

public void dashboardPages() {
DashboardField.getText();
	
}

public void bankAndCash() {
	BankAndCashField.click();
	
	
}

public void newAccount() {
	NewAccountField.click();

}

public void accountTittle(String accountTitle) {
String insertedAccount = accountTitle + generateRandomNumber(999);
AccountTittleField.sendKeys(insertedAccount);
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	
}

public void descriptionAccount(String description) {
String insertedDescription = description + generateRandomNumber(999);
	DescriptionField.sendKeys(insertedDescription);
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
}

public void initialBalance(String initialBalance) {
	String insertedInitialBalance = initialBalance + generateRandomNumber(9999);
	InitialBalanceField.sendKeys(insertedInitialBalance); ;
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
}

public void accountNumber(String accountN) {
	String insertedAccount = accountN + generateRandomNumber(999);
	AccountNumberField.sendKeys(insertedAccount);
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
}

public void contactPerson(String contactP) {
	String insertedContactP = contactP + generateRandomNumber(99);
	ContactPersonField.sendKeys(insertedContactP);
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
}

public void PhoneNumber(String Phone) {
	String insertedPhone = Phone + generateRandomNumber(99999999);
	PhoneField.sendKeys(insertedPhone);
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
}

public void internetBanking(String bankingUrl) {
	String insertedBankingUrl = bankingUrl + generateRandomNumber(999);
	InternetBankingField.sendKeys(insertedBankingUrl);
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
}

public void submitButton() {
	SubmitButtonField.click();

}

public String accountCreatedSuccsess() {
	 return ValidationMessage.getText();
	
	
}


}
