
function fullName(){
    const name = document.getElementById('name').value;
    let len = name.length;
    const re = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    if(len >= 16){
        document.getElementById('nameAns').innerHTML = 'Name Should Be 16 Character';
    }else if(name.charAt(0) === ' '){
        document.getElementById('nameAns').innerHTML = 'Not Start With Space';
    }else if(len <= 2){
        document.getElementById('nameAns').innerHTML = 'Name Contain More Than 2 Character'
    }
    else if(re.test(name)){
        document.getElementById('nameAns').innerHTML = '✅';
    }else{
        document.getElementById('nameAns').innerHTML = 'Invalid Name';
    }
}

function emailFunc(){
    const email = document.getElementById('email').value;
    const s = email.split('@');
    const len = s[0].length;
    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    if(reg.test(email)){
        document.getElementById('emailAns').innerHTML = "✅"
    }else if(len === 2){
        document.getElementById().innerHTML = 'first name must 3 character';
    }
    else{
        document.getElementById('emailAns').innerHTML = 'Invalid Email';
    }
}



function passwordValidation(){

    const password = document.getElementById('password').value;
    const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(reg.test(password)){
        document.getElementById('passAns').innerHTML = '✅';
    }else{
        document.getElementById('passAns').innerHTML = 'Invalid password';
    }

    return password
}


function showPass(){
    const password = document.getElementById('password');
    if (password.type === "password") {
       password.type = "text";
    }else{
        password.type = "password";
    }    
}


function passwordValidation2(){
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if(password === password2){
        document.getElementById('passAns2').innerHTML = '✅';
    }else if(!(password.length === password2.length)){
        document.getElementById('passAns2').innerHTML = 'Password not match';
    }
}

function showPass2(){
    const password2 = document.getElementById('password2');
    if (password2.type === "password") {
       password2.type = "text";
    }else{
        password2.type = "password";
    }    
}

function colorValidation(){
    const color = document.getElementById('color').value;
    console.log(color);

    if(color === '#000000'){
        document.getElementById('colorAns').innerHTML = 'Pick color';
    }else{
        document.getElementById('colorAns').innerHTML = color;
    }
}