import { fieldForm } from '../FieldForm/fieldForm';

//IMPORTAMOS LA LIBRERÍA DE EMAIL JS
import emailjs from '@emailjs/browser';
import './email.css';

export const Email = (parentDiv) => {

    const emailForm = document.createElement("form");
    emailForm.className = "contactForm";
    emailForm.method = "submit";
     
    const errorMessage = document.createElement('p');
    errorMessage.id = "errorMessage";
    const successMessage = document.createElement('p');
    successMessage.id = "successMessage";

    // BOTÓN "ENVIAR".
    emailForm.addEventListener('submit', submit);
    errorMessage.innerHTML = "";
    
    emailForm.innerHTML = `
       ${fieldForm({labelText: 'Email', className: "email", placeholder: "tuEmail@gmail.com"})}
       ${fieldForm({labelText: 'Asunto', className: "subject", placeholder: ""})}
       ${fieldForm({labelText: 'Contenido', className: "content", placeholder: "¿Cual es tu proyecto?"})}
        <button>Enviar</button>
    `

    parentDiv.appendChild(emailForm);
    emailForm.appendChild(errorMessage);
    emailForm.appendChild(successMessage);

}


const submit = async (e) => {
    e.preventDefault();
    console.log(e)
    const [email, subject, content] = e.target;
    /*console.log(email.value)
    console.log(subject.value)
    console.log(content.value)*/

    const templateParams = {
        email: email.value,
        subject: subject.value,
        content: content.value
    }

    if (!email.value || !subject.value || !content.value) {
        const error = document.querySelector('#errorMessage');
        error.textContent = "Faltan campos por rellenar";
        error.style.display = "block"; 
        return; 
        
    } 

    //empieza la carga
    e.target.classList.add('loading');
    const error = document.querySelector('#errorMessage');
    error.innerHTML = "";
    error.textContent = "enviando..."

    const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        templateParams, 
        { 
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
    );
    // acaba la carga
    e.target.classList.remove('loading');

    if (response.status === 200) { 
        error.innerHTML = "";   
        const success = document.querySelector('#successMessage');
        success.textContent = "Mensaje enviado";
        success.style.display = "block";
        console.log("envío exitoso");
        return;

    } else {
        console.log("error en el envío del formulario")
    }
   
}