document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
  
    let angle = 0;
  
    function animate() {
      angle += 0.1;
      const y = 40 * Math.sin(angle) + 40;
      circle.style.top = `${y}px`;
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  
  