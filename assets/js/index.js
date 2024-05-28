var dayInput = document.getElementById("dayI");
var monthInput = document.getElementById("monthI");
var yearInput = document.getElementById("yearI");

var alertDayP = document.getElementById("alertDay");
var alertMonthP = document.getElementById("alertMonth");
var alertYearP = document.getElementById("alertYear");

var yearInputLabel = document.getElementById("yearInputLabel");
var monthInputLabel = document.getElementById("monthInputLabel");
var dayInputLabel = document.getElementById("dayInputLabel");

var buton = document.getElementById("btn");

var outputYearP = document.getElementById("year");
var outputMonthP = document.getElementById("month");
var outputDayP = document.getElementById("day");

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();

var daysResult;
var monthsResult;
var yearsResult;


function isInputEmpty(Innput){
    if(Innput.value == ""){
        return true
    }
    else{
        return false
    }
}

function isKabesa(yaerX){
    if(yaerX % 4 == 0){
        return true
    }
    else{
        return false
    }
}

function yearValidation(){
    if(isInputEmpty(yearInput)){
        alertYearP.innerHTML = "*This field is required";
        alertYearP.classList.add("visibility-show");
        alertYearP.classList.remove("visibility-non");

        yearInput.classList.add("border-alert");
        yearInputLabel.classList.add("changeColorToRed"); 
        
        return false
    }
    else{

        if(yearInput.value < 100 | yearInput.value > currentYear){
            alertYearP.innerHTML = "Must be a valid input";
            alertYearP.classList.add("visibility-show");
            alertYearP.classList.remove("visibility-non");
    
            yearInput.classList.add("border-alert");
            yearInputLabel.classList.add("changeColorToRed");  

            return false
        }

        else{
            alertYearP.innerHTML = "";
            alertYearP.classList.remove("visibility-show");
            alertYearP.classList.add("visibility-non");
    
            yearInput.classList.remove("border-alert");
            yearInputLabel.classList.remove("changeColorToRed");  

            return true
        }
    }
}

function monthValidation(){

    if(isInputEmpty(monthInput)){
        alertMonthP.innerHTML = "*This field is required";
        alertMonthP.classList.add("visibility-show");
        alertMonthP.classList.remove("visibility-non");

        monthInput.classList.add("border-alert");
        monthInputLabel.classList.add("changeColorToRed"); 
        return false  
    }
    else{
        if(monthInput.value < 1 ||  monthInput.value > 12 ){
            alertMonthP.innerHTML = "Must be a valid input";
            alertMonthP.classList.add("visibility-show");
            alertMonthP.classList.remove("visibility-non");
    
            monthInput.classList.add("border-alert");
            monthInputLabel.classList.add("changeColorToRed"); 
            return false
        }
        else{
            alertMonthP.innerHTML = "";
            alertMonthP.classList.remove("visibility-show");
            alertMonthP.classList.add("visibility-non");
    
            monthInput.classList.remove("border-alert");
            monthInputLabel.classList.remove("changeColorToRed");

            return true
        }
    }
}

function dayValidation(){
    var daysNumberinMonths = [
        [1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]
    ]


    if(isInputEmpty(dayInput)){
        alertDayP.innerHTML = "*This field is required";
        alertDayP.classList.add("visibility-show");
        alertDayP.classList.remove("visibility-non");

        dayInput.classList.add("border-alert");
        dayInputLabel.classList.add("changeColorToRed"); 
        return false  
    }
    else{

        if(dayInput.value < 1 || dayInput.value > 31 ){
            alertDayP.innerHTML = "Must be a valid input";
            alertDayP.classList.add("visibility-show");
            alertDayP.classList.remove("visibility-non");
    
            dayInput.classList.add("border-alert");
            dayInputLabel.classList.add("changeColorToRed"); 
            return false 
        }
        else{
            if(isKabesa(yearInput.value)){

                daysNumberinMonths[1][1]= 29;
                if(monthInput.value <= 12  && monthInput.value != 0  && monthInput.value != ""  && parseInt(dayInput.value) <= daysNumberinMonths[parseInt(monthInput.value)-1][1]){

                    alertDayP.innerHTML = "";
                    alertDayP.classList.remove("visibility-show");
                    alertDayP.classList.add("visibility-non");
            
                    dayInput.classList.remove("border-alert");
                    dayInputLabel.classList.remove("changeColorToRed"); 

                    return true 

                }
                else{
                    alertDayP.innerHTML = "Must be a valid input";
                    alertDayP.classList.add("visibility-show");
                    alertDayP.classList.remove("visibility-non");
            
                    dayInput.classList.add("border-alert");
                    dayInputLabel.classList.add("changeColorToRed"); 
                    return false 
                }
            }
            else{
                if(monthInput.value <= 12  && monthInput.value != 0  && monthInput.value != ""  && dayInput.value <= daysNumberinMonths[parseInt(monthInput.value)-1][1]){
                    alertDayP.innerHTML = "";
                    alertDayP.classList.remove("visibility-show");
                    alertDayP.classList.add("visibility-non");
            
                    dayInput.classList.remove("border-alert");
                    dayInputLabel.classList.remove("changeColorToRed"); 

                    return true 

                }
                else{
                    alertDayP.innerHTML = "Must be a valid input";
                    alertDayP.classList.add("visibility-show");
                    alertDayP.classList.remove("visibility-non");
            
                    dayInput.classList.add("border-alert");
                    dayInputLabel.classList.add("changeColorToRed"); 
                    return false 

                }

            }

        }
    }
}


function calcAge(){

    yearValidation()
    monthValidation()
    dayValidation()

    if(yearValidation() && monthValidation() && dayValidation()){

        yearInput.value = parseInt(yearInput.value, 10).toString();
        monthInput.value = parseInt(monthInput.value, 10).toString();
        dayInput.value = parseInt(dayInput.value, 10).toString();
        
        yearsResult = currentYear - parseInt(yearInput.value, 10);
        monthsResult = currentMonth - parseInt(monthInput.value, 10);
        daysResult = currentDay - parseInt(dayInput.value, 10);


        if (monthsResult < 0) {
            yearsResult--;
            monthsResult *= -1; 
            monthsResult = 12 - monthsResult;
        }

        if(daysResult < 0){

            daysResult*= -1;

            if(monthsResult > 0){
                monthsResult--;
            }
        }

        return true
    }
     
}

function clearInputs(){
    dayInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
}

function displayResults(){
    if(calcAge()){

        outputYearP.innerHTML = `<span>${yearsResult}</span>  years`
        outputMonthP.innerHTML = `<span>${monthsResult}</span> months`
        outputDayP.innerHTML = `<span>${daysResult}</span> days</p>`
        
        clearInputs();

    }
    else{
        outputYearP.innerHTML = `<span>-</span> <span>-</span>  years`;
        outputMonthP.innerHTML = `<span>-</span> <span>-</span> months`;
        outputDayP.innerHTML = `<span>-</span> <span>-</span> days`;
    }
}


