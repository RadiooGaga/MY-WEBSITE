import { fieldForm } from '../FieldForm/fieldForm';

//IMPORTAMOS LA LIBRERÍA DE EMAIL JS
import emailjs from '@emailjs/browser';
import './email.css';

export const Email = (parentDiv) => {

    const emailForm = document.createElement("form");
    emailForm.className = "contactForm";
    emailForm.method = "submit";

    const h2Contact = document.createElement('h2');
    h2Contact.textContent = "CONTACTO";
    h2Contact.id = "contactoH2";
     
    const errorMessage = document.createElement('p');
    errorMessage.id = "errorMessage";
    errorMessage.style.display = "none"; 

    const successMessage = document.createElement('p');
    successMessage.id = "successMessage";
    successMessage.style.display = "none"; 

    emailForm.appendChild(h2Contact);

    emailForm.innerHTML = `
    ${fieldForm({labelText: 'Email', className: "email", placeholder: "tuEmail@gmail.com"})}
    ${fieldForm({labelText: 'Asunto', className: "subject", placeholder: ""})}
    ${fieldForm({labelText: 'Contenido', className: "content", placeholder: "¿Cual es tu proyecto?"})}
     <button type='submit'>Enviar</button>
    `;

    emailForm.appendChild(errorMessage);
    emailForm.appendChild(successMessage);
    parentDiv.appendChild(emailForm);

    // BOTÓN "ENVIAR".
    emailForm.addEventListener('submit', submit);
}



const submit = async (e) => {
    e.preventDefault();
    console.log(e)
    const [email, subject, content] = e.target;
    console.log(email)
    console.log(subject)
    console.log(content)

    const errorMessage = e.target.querySelector("#errorMessage"); 
    const successMessage = e.target.querySelector("#successMessage");

    if (!email || !subject || !content) {
        errorMessage.textContent = "Faltan campos por rellenar"; 
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";  
        }, 1500);
        return;
    }

    const emailValue = email.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue)) {
        errorMessage.textContent = "Por favor, introduce un email válido.";
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const templateParams = {
        email: email.value,
        subject: subject.value,
        content: content.value
    }


    //empieza la carga
    e.target.classList.add('loading');
    errorMessage.textContent = "Enviando...";
    errorMessage.style.display = "block";

    try {
        const response = await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            { publicKey: import.meta.env.VITE_PUBLIC_KEY }
        );

        e.target.classList.remove('loading');

        if (response.status === 200) {
            errorMessage.style.display = "none";
            successMessage.textContent = "Mensaje enviado";
            successMessage.style.display = "block";
            console.log("Envío exitoso");
        } else {
            throw new Error("Error en el envío del formulario");
        }
    } catch (error) {
        console.error(error);
        errorMessage.textContent = "Hubo un error en el envío.";
        errorMessage.style.display = "block";
    }
};