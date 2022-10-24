// user id - 5lDQ2fsinXAaz-OgN //
// service id - service_spab4la //
// tempalte  id - template_687c8jp //

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += ' modal__overlay--visible'
  emailjs
    .sendForm(
      "service_spab4la",
      "template_qr9voxf",
      event.target,
      "5lDQ2fsinXAaz-OgN"
    )
    .then(() => {
        
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        
    }).catch (()=>{
        loading.classList.remove('modal__overlay--visible')
        alert(
            'the email service  is not working at the moment pls contact me directly '
        );
    })

 
}

let isModalOpen = false;
function toggleModal(){
  if (isModalOpen){
    isModalOpen = false;
    return document.body.classList.remove('modal__open')
  }
isModalOpen = true;
document.body.classList += ' modal__open'
   
    

}

function closemodalbutton() {
  console.log('it works')
  document.body.classList.remove('modal__open')
  isModalOpen = false;

}


let isdarkmodeon = false;
function enabledarkmode(){
 isdarkmodeon = !isdarkmodeon;
 if (isdarkmodeon) {
  document.body.classList += " dark__mode"
 }

 else {
  document.body.classList.remove ('dark__mode')
 }


}
