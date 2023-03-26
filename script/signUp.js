// =========================================this is using for selecting element=================================
let signUP=document.getElementById('submit');
let userName=document.getElementById('username');
let email=document.getElementById('email');
let password=document.getElementById('password');
let captchaGernate=document.getElementById('captcha-gernate');
let captchaBox=document.getElementById('captcha-input');
let message=document.getElementById('msg');
// ==========================================================end==============================================



// ==========================this is for genrate captcha==========================================================
let random=Math.floor(Math.random()*10000);
captchaGernate.innerText=random;
// ==========================================================end===============================================




// ================this is for checkig valid captcha and should not empty input box==================================================
signUP.addEventListener('click',(e)=>{
     e.preventDefault();
    if(captchaBox.value!=random)
    {
        message.innerText='Pls Enter Valid Captcha'
        setTimeout(()=>{
            message.innerText='';
        },1000)
        message.style.color='red';
    }
    

     else if(userName.value.length > 1 && email.value.length > 1 && password.value.length > 1  && captchaBox.value==random)
    {
        message.innerText='SignUp sucessfull'
        setTimeout(()=>{
            message.innerText='';
            },1000);
            userName.value='';
            email.value='';
             password.value='';
             captchaBox.value='';
             message.style.color='green';
    }
    else{
        message.innerText='Pls Enter all Detail'
        setTimeout(()=>{
            message.innerText='';
            },1000);
    }
    
    
})

// ==========================================================end=========================================