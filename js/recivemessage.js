function sendemail(){
var email=document.getElementById("email").value;
var name=document.getElementById("name").value;
var phone=document.getElementById("phone").value;
var subject=document.getElementById("subject").value;
var message=document.getElementById("message").value;
var templateParams = {
    name: name,
    phone: phone,
    email: email,
    subject:subject,
    message: message
  };
  emailjs.send('service_gm2rk1c', 'template_ii0sdh5', templateParams)
.then(function(response) {
 console.log('SUCCESS!', response.status, response.text);
 alert("Your message was sent successfully.")
 }
)
}