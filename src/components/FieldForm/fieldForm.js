export const fieldForm = ({ labelText, className, placeholder }) => {
    const inputId = `input-${className}`; // Generar un id único basado en la clase

    return `
    <div>
        <label for="${inputId}">${labelText}</label>
        <input id="${inputId}" class="input-form ${className}" placeholder="${placeholder}"/>
    </div>
    `;
};