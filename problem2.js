function userEmail(email){
    if(!email.includes('@')){
        return 'invalid email';
    }
    const sliptEmail = email.split('@');
    const newUserEmail = sliptEmail[0];
    const domain = sliptEmail[1];
    const newFullEmail = newUserEmail + ' send an email ' + domain;
    return newFullEmail;
}
const result = userEmail('rakib@gmail.com');
console.log(result);