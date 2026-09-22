document.addEventListener('DOMContentLoaded', () => {
    console.log("Página de tulipanes cargada correctamente");
    
    const titulo = document.querySelector('.titulo');
    
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = '#ffcc00';
    });

    titulo.addEventListener('mouseout', () => {
        titulo.style.color = '#d4a017';
    });
});