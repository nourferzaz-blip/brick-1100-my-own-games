import bridge from 'https://jsdelivr.net';

// Game State
const state = {
    player: { x: 48, y: 32 }, // Start in center
    blocks: [{ x: 20, y: 20 }], // A simple block to "mine"
};

// Initialize Bridge
bridge.on('ready', () => {
    console.log('Minecraft for Brick 1100 is ready!');
});

// Handle Numpad Inputs
bridge.on('keypress', (key) => {
    switch(key) {
        case '2': state.player.y -= 2; break; // Up
        case '8': state.player.y += 2; break; // Down
        case '4': state.player.x -= 2; break; // Left
        case '6': state.player.x += 2; break; // Right
        case '5': placeBlock(); break;        // Place/Action
    }
    render();
});

function placeBlock() {
    state.blocks.push({ x: state.player.x, y: state.player.y });
}

function render() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear Screen (Nokia 1100 style)
    ctx.fillStyle = '#94b089'; // Typical green-gray background
    ctx.fillRect(0, 0, 96, 65); // Standard screen resolution
    
    // Draw Blocks
    ctx.fillStyle = '#000';
    state.blocks.forEach(b => ctx.fillRect(b.x, b.y, 4, 4));
    
    // Draw Player
    ctx.strokeRect(state.player.x, state.player.y, 4, 4);
}

// Start game
render();
