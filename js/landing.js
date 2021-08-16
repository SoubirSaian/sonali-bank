document.getElementById('submit-button').addEventListener('click',function(){
    const email = document.getElementById('input-email');
    const password = document.getElementById('input-password');

    const emailValue = email.value;
    const passwordValue = password.value;
    
    if(emailValue == 'soubir2018@gmail.com' && passwordValue == '12345'){
        window.location.href ='account.html';
    }
    else{
        window.alert('Enter the correct email & password');
    }
});