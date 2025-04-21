// Datos de los personajes
const characters = [
  { name: 'Guerrero', color: 'red', abilityName: 'Espadazo', abilityDamage: 20 },
  { name: 'Mago', color: 'blue', abilityName: 'Bola de Fuego', abilityDamage: 25 },
  { name: 'Ninja', color: 'green', abilityName: 'Shuriken', abilityDamage: 15 }
];

let selectedCharacter = null;
let isGameRunning = false;
let currentLevel = 1; // Nivel actual
let monsters = [];
let animationFrame;
let records = []; // Lista de récords

// Elementos del DOM
const selectionScreen = document.getElementById('selection-screen');
const gameScreen = document.getElementById('game-screen');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const exitButton = document.getElementById('exit-button');
const restartButton = document.getElementById('restart-button');
const recordsTable = document.getElementById('records-table').querySelector('tbody');

// Jugador
const fighter = { x: 50, y: 350, width: 50, height: 50, health: 100, color: 'white' };

// Generar monstruos por nivel
function generateMonsters(level) {
  const monsterCount = 2 + level; // Ajustar la cantidad de monstruos
  monsters = [];
  for (let i = 0; i < monsterCount; i++) {
    monsters.push({
      x: canvas.width, // Aparecen en el borde derecho
      y: Math.random() * canvas.height, // Posición vertical aleatoria
      width: 50,
      height: 50,
      color: 'purple',
      speed: 1 + level * 0.3,
      damage: 3 + level,
      health: 30 + level * 5
    });
  }
}

// Cambiar de nivel
function nextLevel() {
  currentLevel++;
  console.log(`Pasaste al nivel ${currentLevel}`);
  generateMonsters(currentLevel);
  fighter.health = Math.min(fighter.health + 10, 100); // Recuperar salud limitada
}

// Iniciar el juego
function startGame() {
  selectionScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  fighter.color = selectedCharacter.color;
  generateMonsters(currentLevel);
  isGameRunning = true;
  gameLoop();
}

// Pausar el juego
function pauseGame() {
  isGameRunning = false;
  cancelAnimationFrame(animationFrame);
  console.log("Juego pausado");
}

// Reiniciar el juego
function restartGame() {
  saveRecord(); // Guardar el récord del jugador
  currentLevel = 1;
  fighter.health = 100;
  monsters = [];
  startGame();
}

// Guardar el récord del jugador
function saveRecord() {
  if (selectedCharacter) {
    records.push({ name: selectedCharacter.name, level: currentLevel });
    updateRecordsTable();
  }
}

// Actualizar la tabla de récords
function updateRecordsTable() {
  recordsTable.innerHTML = ''; // Limpiar la tabla
  records.forEach(record => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${record.name}</td><td>${record.level}</td>`;
    recordsTable.appendChild(row);
  });
}

// Salir del juego
function exitGame() {
  location.reload();
}

// Dibujar el luchador
function drawFighter() {
  ctx.fillStyle = fighter.color;
  ctx.fillRect(fighter.x, fighter.y, fighter.width, fighter.height);
}

// Dibujar los monstruos
function drawMonsters() {
  monsters.forEach(monster => {
    ctx.fillStyle = monster.color;
    ctx.fillRect(monster.x, monster.y, monster.width, monster.height);
    ctx.fillStyle = 'white';
    ctx.fillText(`HP: ${monster.health}`, monster.x, monster.y - 10);
  });
}

// Mover monstruos hacia el luchador
function moveMonsters() {
  monsters.forEach(monster => {
    monster.x -= monster.speed;
    if (monster.y > fighter.y) monster.y -= 0.5;
    if (monster.y < fighter.y) monster.y += 0.5;
  });
}

