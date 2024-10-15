const editButton = document.querySelector('.header__edit-profile');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
const saveButton = document.getElementById('saveButton');
const profileName = document.querySelector('.header__name');
const profileSubtitle = document.querySelector('.header__subtitle');

editButton.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
});

// Función para guardar los cambios y actualizar la información del perfil
function saveChanges() {
    // Obtener los valores de los campos de entrada
    const newName = document.getElementById('name').value;
    const newAbout = document.getElementById('about').value;

    // Actualizar los elementos del perfil con los nuevos valores
    profileName.textContent = newName;
    profileSubtitle.textContent = newAbout;

    // Cerrar el popup
    popup.classList.remove('popup_opened');
}

// Añadir el evento al botón de guardar
saveButton.addEventListener('click', saveChanges);

// Ejemplo de cómo activar el botón en el futuro
document.querySelectorAll('.heart-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

// Suponiendo que tienes variables que contienen los valores del usuario
const userName = "Jacques Cousteau"; // Valor actual del nombre
const userAbout = "Explorador"; // Valor actual del "Acerca de mí"

// Función para abrir el formulario y rellenar los campos
function openForm() {
    // Mostrar el cuadro emergente
    document.getElementById('popup').classList.add('popup_opened');
    
    // Rellenar los campos con los valores actuales
    document.getElementById('name').value = profileName.textContent;
    document.getElementById('about').value = profileSubtitle.textContent;
}

// Añadir el evento al botón de editar perfil
document.querySelector('.header__edit-profile').addEventListener('click', openForm);

// Añadir el evento al botón de cerrar
document.getElementById('closeButton').addEventListener('click', () => {
    popup.classList.remove('popup_opened');
});