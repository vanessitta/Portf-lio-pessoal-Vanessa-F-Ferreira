// Função para exibir a seção selecionada e ocultar as outras
function showSection(sectionId) {
    // Esconder todas as seções
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar a seção selecionada
    document.getElementById(sectionId).style.display = 'block';
}
