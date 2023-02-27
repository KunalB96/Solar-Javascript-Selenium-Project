const {Builder, By, Key, util, WebDriver, Actions} = require("selenium-webdriver");
require("chromedriver");


async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://unergia-saas-staging-solarladder.vercel.app/login");
      await driver.findElement(By.name("email")).sendKeys("solarladdertest787@yopmail.com"); 
      await  driver.findElement(By.name("password")).sendKeys("password");
      await  driver.findElement(By.className("ant-btn ant-btn-text")).click();

   
     
 
    setTimeout(function(){
        driver.findElement(By.xpath("//button[@style='text-transform: none;']")).click();
    },3000);

    

    // await driver.findElement(By.xpath("//button[@style='text-transform: none;']")).click();
    

     setTimeout(function(){
        driver.findElement(By.name("projectSize")).sendKeys("5");
        driver.findElement(By.name("customerName")).sendKeys("Kenny");
        driver.findElement(By.className("form-control w-100")).sendKeys("9999999999");
        driver.findElement(By.name("location")).sendKeys("Jharkhand");
        driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div[2]/form/div[6]/button[1]')).click();
     }, 4000);
      
    	
   

      //To locate the source elements 
      setTimeout(function(){
        let draggable = driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/section[1]/div/div/div[1]/div/div[1]/div[1]/div'));
 
    //To perform drag and drop by offset
     driver.actions().dragAndDrop(draggable, { x: 500, y: 300 }).perform();
     },9000);

     
}

example();
