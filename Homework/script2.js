let classTitle ="JavaScript Class 1";
let name = "Eric";
let email ="123@1234.com"
let password = "redbikes90"
let userAge = "30";
let country = "USA";
let salary = 30000 / 12;
let annualSalary = 30000;
let personalComment = "Comment";
let carPrice ="50000"
let planet ="Earth";
let name2 = "Moore";
let food ="cheese burgers"
let firstPet = "tizzy"
let birthdate = "09/21/1961";
let timeMachine = "false";
let greenLight = "true";
let Mic = "true";
let gasPrice = "$2.50";
let gameOver = true;
let home = "Home";
let about ="About";
let contact="contact";





document.write(`

    
    <div class="menu">
        <div class ="logo">
            <a id="logo" href="#"> ${classTitle}</a>
        </div>

        <div class ="home">
            <a id="home" href="#"> ${home}</a>
            <a id="about" href="#"> ${about}</a>
            <a id="contact" href="#"> ${contact}</a>
        </div>
    </div>   

    <div class ="background">
        <div class="column-wrapper">
            <div class="col1">
                <p id="name"> Name: ${name}</p>
                <p>email: ${email}<p>
                <p>Password: ${password}<p>
                <p>Age: ${userAge}<p>
            <p>Country: ${country}<p>
                <p>Salary: ${salary}<p>
                <p>Annual Salary: ${annualSalary}<p>
                <p id="personalComment"> personalComment: ${personalComment}</p>
            </div>
            
            <div class="col2">
                <p id="carPrice"> carPrice: ${carPrice}</p>
                <p id="planet"> planet: ${planet}</p>
                <p id="food"> food: ${food}</p>
                <p id="name2"> name2: ${name2}</p>
                <p id="firstPet"> firstPet: ${firstPet}</p>
                <p id="birthdate"> birthdate: ${birthdate}</p>
                <p id="timeMachine"> timeMachine: ${false}</p>
                <p id="greenLight"> greenLight: ${greenLight}</p>
                <p id="Mic"> Mic: ${Mic}</p>
                <p id="gasPrice"> gasPrice: ${gasPrice}</p>
            </div>
        </div>
       </div>
            
            `);


     
      
         
    
