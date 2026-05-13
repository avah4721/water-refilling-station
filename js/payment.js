// Payment logic
document.addEventListener('DOMContentLoaded', () => {
  const payButton = document.getElementById('payButton');
  
  if (payButton) {
    payButton.addEventListener('click', () => {
      payButton.textContent = 'Processing...';
      payButton.disabled = true;
      
      // Simulate payment processing
      setTimeout(() => {
        alert('Payment Successful! Thank you for your order.');
        window.location.href = 'dashboard.html';
      }, 2000);
    });
  }

  // Payment method selection styling
  const paymentOptions = document.querySelectorAll('input[name="payment"]');
  paymentOptions.forEach(option => {
    option.addEventListener('change', function() {
      document.querySelectorAll('label:has(input[name="payment"])').forEach(label => {
        label.classList.remove('border-blue-600', 'bg-blue-50');
        label.classList.add('border-gray-200');
      });
      if (this.checked) {
        this.closest('label').classList.add('border-blue-600', 'bg-blue-50');
        this.closest('label').classList.remove('border-gray-200');
      }
    });
  });
});