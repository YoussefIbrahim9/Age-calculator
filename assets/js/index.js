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



function calcAge(){
    ValidaiteInputAndAlert();
    
    
}



function ismonthValid(){
    if(monthInput.value >= 1 && monthInput.value <=12){
        return true
    }
    else{
        return false
    }
}





function ValidaiteInputAndAlert(){

    // day
    if(isDayInputEmpty()){
        alertDayP.innerHTML = "This field is required";
        alertDayP.classList.remove("visibility-non");
        alertDayP.classList.add("visibility-show");

        dayInput.classList.add("border-alert");
        dayInputLabel.classList.add("changeColorToRed");
    }
    else{
        alertDayP.innerHTML = "";
        alertDayP.classList.add("visibility-non");
        alertDayP.classList.remove("visibility-show");

        dayInput.classList.remove("border-alert");
        dayInputLabel.classList.remove("changeColorToRed");

    }

    // year
    if(isYearInputEmpty()){
        alertYearP.innerHTML = "This field is required";
        alertYearP.classList.remove("visibility-non");
        alertYearP.classList.add("visibility-show");

        yearInput.classList.add("border-alert");
        yearInputLabel.classList.add("changeColorToRed");
    }
    else{
        alertYearP.innerHTML = "";
        alertYearP.classList.add("visibility-non");
        alertYearP.classList.remove("visibility-show");

        yearInput.classList.remove("border-alert");
        yearInputLabel.classList.remove("changeColorToRed");
    }

    // month
    if(isMonthInputEmpty()){
        alertMonthP.innerHTML = "This field is required";
        alertMonthP.classList.remove("visibility-non");
        alertMonthP.classList.add("visibility-show");

        monthInput.classList.add("border-alert");
        monthInputLabel.classList.add("changeColorToRed");
    }
    else{
        alertMonthP.innerHTML = "";
        alertMonthP.classList.add("visibility-non");
        alertMonthP.classList.remove("visibility-show");

        monthInput.classList.remove("border-alert");
        monthInputLabel.classList.remove("changeColorToRed");
    }

}

function isDayInputEmpty(){
    if(dayInput.value == ""){
        return true
    }
    else{
        return false
    }
}

function isMonthInputEmpty(){
    if(monthInput.value == ""){
        return true
    }
    else{
        return false
    }
}
function isYearInputEmpty(){
    if(yearInput.value == ""){
        return true
    }
    else{
        return false
    }
}