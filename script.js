
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberCheckbox = document.querySelector('input[type="checkbox"]');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      if (usernameInput.value === '' || passwordInput.value === '') {
        alert('Please fill in all fields.');
        return;
      }
      
      if (rememberCheckbox.checked) {
        localStorage.setItem('username', usernameInput.value);
      }
    
      alert('Logging In PLEASE WAIT!!!');
    });
        const rememberedUsername = localStorage.getItem('username');
    if (rememberedUsername) {
      usernameInput.value = rememberedUsername;
    }
  });
  