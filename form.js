

function validateName(){

    let nameError = document.getElementById('name_error');
    let name = document.getElementById('full-name').value;

    if (name.trim() == ''){
        nameError.innerHTML = 'name cannot be blank';
        return false;
    }else if(name.length < 3){
        nameError.innerHTML = 'name must not be less than characters';
        return false;
    }

    else{
    nameError.innerHTML ='';
        return true;
    }
}




function validateEmail(){

    let emailError = document.getElementById('email-error');
    let email = document.getElementById('email').value;
    
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.trim() == ''){
        emailError.innerHTML = 'Email can not be blank';
        return false;
    }
    else if (!email.match(regEx)){
        emailError.innerHTML = 'Email not in global format'
        return false
    }
    else{
        emailError.innerHTML ='';
        return true
    }
}






function validateNumber(){
    let numberError = document.getElementById('number-error');
    let number = document.getElementById('phnumber').value;

   let regEx = /^[6-9]\d{9}$/gi;
    if (number.trim() == ''){
        numberError.innerHTML = 'Number can not be blank';
        return false;
    }
    else if (!number.match(regEx)){
        numberError.innerHTML = 'Type valid number'
        return false
    }
    else{
        numberError.innerHTML ='';
        return true  
    }

}

function validateCity(){
    let cityError = document.getElementById('city-error');
    let city = document.getElementById('inputcity').value;


    if (city.trim() == ''){
        cityError.innerHTML = 'Type value';
        return false;
    }
    
    else{
        cityError.innerHTML ='';
        return true  
    }

}



function selectValidation(){
    let state_value = document.getElementById('inputState').value
    let state_error = document.getElementById('state-error')

    if(state_value == '' ){
        state_error.innerHTML = '*select one'
        // alert('FJDSHFKHSHF')
        return false
    }else {
        state_error.innerHTML = ''
        return true
    }
}





function validateAddress(){

    let addressError = document.getElementById('address-error');
    let address = document.getElementById('inputAddress').value;

    if (address.trim() == ''){
        addressError.innerHTML = '* Address can not be blank';
        return false;
    }

    else{
    addressError.innerHTML ='';
        return true;
    }
}



function validateMessage(){

    let messageError = document.getElementById('message-error');
    let message = document.getElementById('exampleFormControlTextarea').value;

    if (message.trim() == ''){
        messageError.innerHTML = '*Message can not be blank';
        return false;
    }

    else{
    messageError.innerHTML ='';
        return true;
    }
}


function validateForm(){
    if(!validateName() || !validateEmail() ||
     !validatePassword() || validateConform() || 
     !validateNumber() || !validateCity() || 
     !selectValidation() || !validateAddress() || 
     !validateMessage()){
        return false
    }

    else{
        return true
    }
}


function validateUsername(){

    let nameError = document.getElementById('userName-error');
    let name = document.getElementById('userName').value;

    if (name.trim() == ''){
        nameError.innerHTML = 'name cannot be blank';
        return false;
    }else if(name.length < 3){
        nameError.innerHTML = 'name must not be less than characters';
        return false;
    }

    else{
    nameError.innerHTML ='';
        return true;
    }
}

function validatePassword(){
    let password = document.getElementById('password').value;
    let passError = document.getElementById('pass-error');

    let regEx =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(password.trim() === ''){
        passError.innerHTML ='*pasword can not be blank';
        return false;
    }
    else if (!password.match(regEx)){
        passError.innerHTML = 'Password can not strong Add A-Z,a-z,number and sings <8 characters'
        return false
    }
    else{
        passError.innerHTML = '';
        return true;
    }
}

function validateConform(){
    let password = document.getElementById('password')
    let confirmPassword = document.getElementById('cnfm-password')
    let confirmError = document.getElementById('cnfrm-error')

    if (password.value != confirmPassword.value){
        confirmError.innerHTML = 'Password mismatch'
        return false
    }
    else {
        confirmError.innerHTML =''
        return true
    }
}







function loginValidate(){
    if(!validatePassword() || !validateUsername()){
        return false;
    }
    else{
        return true;
    }
}


