// User Dashboard logic
console.log('User Dashboard loaded');

// Sidebar active state
document.querySelectorAll('aside nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    document.querySelectorAll('aside nav a').forEach(l => {
      l.classList.remove('bg-blue-50', 'text-blue-600');
    });
    this.classList.add('bg-blue-50', 'text-blue-600');
  });
});