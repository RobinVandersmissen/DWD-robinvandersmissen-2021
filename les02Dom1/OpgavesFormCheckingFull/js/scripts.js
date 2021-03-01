const frmLogin = document.querySelector('#frmLogin');
const inpEmail = frmLogin.querySelector('#email');
const inpPw = frmLogin.querySelector('#pw');
const msgEmail = frmLogin.querySelector('.ctrlEmail .message');
const msgPw = frmLogin.querySelector('.ctrlPw .message');
// disable HTML5 validation 
frmLogin.setAttribute('novalidate', 'novalidate');
// halt form submissions and check form
frmLogin.addEventListener('submit', function (e) {
   e.preventDefault();
   let numErrors = 0;
   // clear all messages
   msgEmail.innerHTML = '';
   msgPw.innerHTML = '';
   // email can't be empty
   if (inpEmail.value == '') {
      msgEmail.innerHTML = 'email mag niet leeg zijn';
      numErrors++;
}   