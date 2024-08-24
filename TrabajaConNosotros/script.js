document.getElementById('e2s-formularioTrabajo').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('#e2s-formularioTrabajo input[required], #e2s-formularioTrabajo textarea[required]');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (valid) {
        alert('Formulario enviado correctamente.');
        document.getElementById('e2s-formularioTrabajo').reset();
    } else {
        alert('Por favor, complete todos los campos requeridos.');
    }
});
