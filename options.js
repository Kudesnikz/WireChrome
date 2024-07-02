document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('settingsForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const serverAddress = document.getElementById('serverAddress').value;
      const serverPort = document.getElementById('serverPort').value;
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      chrome.storage.local.set({
        serverAddress: serverAddress,
        serverPort: serverPort,
        username: username,
        password: password
      }, function() {
        alert('Settings saved!');
      });
    });
  
    // Заполните форму существующими настройками, если они есть
    chrome.storage.local.get(['serverAddress', 'serverPort', 'username', 'password'], function(result) {
      document.getElementById('serverAddress').value = result.serverAddress || '';
      document.getElementById('serverPort').value = result.serverPort || '';
      document.getElementById('username').value = result.username || '';
      document.getElementById('password').value = result.password || '';
    });
  });
  