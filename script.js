document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8633'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
