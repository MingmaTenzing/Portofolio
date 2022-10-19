/* template_qr9voxf */
/* service_spab4la */

//  User-ID :  5lDQ2fsinXAaz-OgN //



function contact(event) {
    event.preventDefault();

const loading = document.querySelector(' .modal__overlay--loading')
const success = document.querySelector( ' .modal__overlay--success')
loading.classList += ' modal__overlay--visible'
    setTimeout(()=> {
        loading.classList.remove('modal__overlay--visible');
        success.classList += ' modal__overlay--visible';
        console.log('it worked 1')
    },1000);
}