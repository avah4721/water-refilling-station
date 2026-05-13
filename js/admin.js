// Admin Dashboard logic
console.log('Admin Dashboard loaded');

// Sidebar active state
document.querySelectorAll('aside nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    document.querySelectorAll('aside nav a').forEach(l => {
      l.classList.remove('bg-gray-800', 'text-amber-400');
    });
    this.classList.add('bg-gray-800', 'text-amber-400');
  });
});