function firstButton(){
    let name = document.getElementById('fInput').value;
    let regName = /^[Aa-zA-Zz]+$/;
    if(!regName.test(name)){
        
        document.getElementById('ansF').innerHTML = 'Invalid name given.'
    }else{
        
        document.getElementById('ansF').innerHTML = 'Valid name given.'
    }
}

function lastButton(){
    let name = document.getElementById('lInput').value;
    let regName = /^[Aa-zA-Zz]+$/;
    if(!regName.test(name)){
        
        document.getElementById('ansL').innerHTML = 'Invalid name given.'
    }else{
        
        document.getElementById('ansL').innerHTML = 'Valid name given.'
    }
}


function nameButton(){
    let name = document.getElementById('nameInput').value;
    let regName = /^[A-Z][a-zA-Z]+ [A-Z][a-zA-Z]+$/;
    if(!regName.test(name)){
        
        document.getElementById('ans').innerHTML = 'Invalid name given.'
    }else{
        
        document.getElementById('ans').innerHTML = 'Valid name given.'
    }
}

function passButton(){
    let password = document.getElementById('passwordInput').value;
    let regNamePass = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if(!regNamePass.test(password)){
        
        document.getElementById('ansPass').innerHTML = 'Invalid Password'
    }else{
        
        document.getElementById('ansPass').innerHTML = 'Valid Password'
    }

}


function emailButton(){
    let email = document.getElementById('emailInput').value;
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regEmail.test(email)){
        document.getElementById('ansEmail').innerHTML = 'Valid Email';
    }else{
        document.getElementById('ansEmail').innerHTML = 'Invalid Email';
    }


}


function phoneNumber()
{
    let phoneNumber = document.getElementById('phoneInput').value;
    let regexCountry =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(regexCountry.test(phoneNumber)){
        document.getElementById('ansPhone').innerHTML = 'Valid Phone Number';
    }else{
        document.getElementById('ansPhone').innerHTML = "Invalid Phone Number";
    }
}


function dateOfBirth(){
    let date = document.getElementById('dateInput').value;
    let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    if(regex.test(date)){
        document.getElementById('ansDate').innerHTML = 'Valid Date of Birth';
    }
    else{
        document.getElementById('ansDate').innerHTML = "Invalid Date of Birth";
    }
}

function validate(){
    let text = document.getElementById('textArea').value;
    
    let  len = text.length;

    if (text == ""){
        if(len == 0){
            alert("Enter the permanent address");
            text.focus();
        }        
    }
    else {
        if(len < 250){
            alert(text);
        }else{
            alert('Limit of textarea is 250')
        }
    }
}


function fileValidation(){
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    let files = document.getElementById('file').value;
    if(allowedExtensions.exec(files)){
        alert('Valid file type');
    }else{
        alert('Invalid file type')
    }
}


function numberField(){
    let number = parseInt(document.getElementById('numberField').value);
    let regexNumber = /[0-9]/g;

    if(regexNumber.test(number)){
        document.getElementById('numberAns').innerHTML = 'Valid Number';
    }
    else{
        document.getElementById('numberAns').innerHTML = 'Invalid Number';
    }
}


function zipCode(){
    let zip = parseInt(document.getElementById('zipName').value);
    let zipRegex = /^[0-9]{6}(?:-[0-9]{6})?$/g;
    if(zipRegex.test(zip)){
        document.getElementById('ansZip').innerHTML = 'Valid Zip Code';
    }else{
        document.getElementById('ansZip').innerHTML = 'Invalid Zip Code';
    }
}


function checkField(){
    let check = document.getElementById('accept');
    let btn = document.getElementById('btn');

    btn.onclick = () =>{
        alert(check.value);
    }

}