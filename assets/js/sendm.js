function sendMail() {
  emailjs.init("oxwwOXC2BvvvooJ5_");
  const serviceID = "service_wj92xw5";
  const templateID = "template_plve4t5";
  
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  document.querySelector('.loading').classList.add('d-block');
  document.querySelector('.error-message').classList.remove('d-block');
  document.querySelector('.sent-message').classList.remove('d-block');

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (params.email.match(validRegex)) {
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          document.querySelector('.loading').classList.remove('d-block');
          document.querySelector('.sent-message').classList.add('d-block');
          // alert("ok bro! thank you");
          // if (res.text() == 'OK') {
          // }
      })
      .catch(err=>console.log(err));
      // return true;
  } else {
      document.querySelector('.loading').classList.remove('d-block');
      document.querySelector('.error-message').classList.add('d-block');
      // alert(params.email+" Invalid email address!");
      // return false;
  }
}

function aboutB() {
  document.querySelector('.about').classList.remove('d-none');
  setTimeout(() =>{ document.querySelector(".meme").classList.remove('headerN');},5e2)
}


// function removeE() {
//   document.querySelector(".skills").style.display = "none";
// }

// function resetE() {
//   document.querySelector(".skills").style.display = "block";
// }