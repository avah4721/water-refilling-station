// Authentication logic
document.addEventListener('DOMContentLoaded', () => {
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginTab && registerTab) {
    loginTab.addEventListener('click', () => {
      loginTab.classList.add('text-blue-600', 'border-blue-600');
      loginTab.classList.remove('text-gray-400', 'border-transparent');
      registerTab.classList.add('text-gray-400', 'border-transparent');
      registerTab.classList.remove('text-blue-600', 'border-blue-600');
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
    });

    registerTab.addEventListener('click', () => {
      registerTab.classList.add('text-blue-600', 'border-blue-600');
      registerTab.classList.remove('text-gray-400', 'border-transparent');
      loginTab.classList.add('text-gray-400', 'border-transparent');
      loginTab.classList.remove('text-blue-600', 'border-blue-600');
      registerForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    });
  }

  // Form submissions (static demo)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (form.id === 'adminLoginForm') {
        window.location.href = 'admin-dashboard.html';
      } else if (form.id === 'loginForm' || form.id === 'registerForm') {
        window.location.href = 'dashboard.html';
      }
    });
  });
});