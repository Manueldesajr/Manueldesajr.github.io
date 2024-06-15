let currMoleTile;
let score = 0;
const totalTiles = 9; // Number of tiles

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < totalTiles; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.className = "tile"; // add class to each tile
        tile.addEventListener('click', () => handleTileClick(tile)); // Add click event listener
        document.getElementById("board").appendChild(tile);
    }
    startGame();
}

function startGame() {
    // Clear the previous mole location
    if (currMoleTile) {
        currMoleTile.classList.remove('mole');
    }

    // Set a new mole location
    let randomTile = Math.floor(Math.random() * totalTiles);
    currMoleTile = document.getElementById(randomTile.toString());
    currMoleTile.classList.add('mole');

    // Set a timer to move the mole to a new location
    setTimeout(startGame, 1000);
}

function handleTileClick(tile) {
    if (tile === currMoleTile) {
        score++;
        document.getElementById('score').innerText = score;
    }
    tile.classList.remove('mole');
}
