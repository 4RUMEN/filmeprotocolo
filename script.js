// Seleciona todas as cenas
const scenes = document.querySelectorAll('.scene');
let currentSceneIndex = 0; // Índice da cena atual

// Função para mostrar a cena atual
function showScene(index) {
    console.log(`Exibindo cena ${index}`); // Log para depuração
    scenes.forEach((scene, i) => {
        // Adiciona a classe 'active' somente à cena atual
        scene.classList.toggle('active', i === index);
    });
}

// Inicializa a exibição com a primeira cena
showScene(currentSceneIndex);

// Configura o botão "Próximo"
document.getElementById('next-btn').addEventListener('click', () => {
    // Avança para a próxima cena
    currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    showScene(currentSceneIndex);
});

// Configura o botão "Anterior"
document.getElementById('prev-btn').addEventListener('click', () => {
    // Volta para a cena anterior
    currentSceneIndex = (currentSceneIndex - 1 + scenes.length) % scenes.length;
    showScene(currentSceneIndex);
});
