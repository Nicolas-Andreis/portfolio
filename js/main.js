// Obtén una referencia al elemento con clase "celeste"
const celesteElement = document.querySelector('.celeste');

// Agrega un evento de clic al elemento "celeste"
celesteElement.addEventListener('click', function () {
    // Encuentra los elementos "on" y "off" dentro de "celeste"
    const onElement = celesteElement.querySelector('.on');
    const offElement = celesteElement.querySelector('.off');

    // Cambia la clase del cuerpo en función del estado del interruptor
    if (onElement.classList.contains('active')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }

    // Alterna las clases "active" en el interruptor
    onElement.classList.toggle('active');
    offElement.classList.toggle('active');
});