const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the matrix effect
const characters = 'CODER CODER CODER CODER CODER CODER CODER CODER CODER CODER ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}:"<>?[];\',./`~';
const charactersArray = characters.split('');

// Settings
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height);
}

// Draw the matrix effect
function draw() {
  // Semi-transparent background to create a trailing effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set text style
  ctx.fillStyle = '#0f0'; // Green color for the code
  ctx.font = `${fontSize}px monospace`;

  // Draw characters
  for (let i = 0; i < drops.length; i++) {
    const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop if it reaches the bottom
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Move the drop down
    drops[i]++;
  }
}

// Animation loop
setInterval(draw, 50);

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});