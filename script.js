const scenes = document.querySelectorAll('.scene');
let currentSceneIndex = 0;

function showScene(index) {
    console.log(`Exibindo cena ${index}`); // Log para depuração
    scenes.forEach((scene, i) => {
        scene.classList.toggle('active', i === index);
    });
}

showScene(currentSceneIndex);

document.getElementById('next-btn').addEventListener('click', () => {
    currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    showScene(currentSceneIndex);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentSceneIndex = (currentSceneIndex - 1 + scenes.length) % scenes.length;
    showScene(currentSceneIndex);
});
