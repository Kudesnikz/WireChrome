document.addEventListener('DOMContentLoaded', function() {
  const vpnStatusElement = document.getElementById('vpnStatus');
  const toggleButton = document.getElementById('toggleButton');

  // Отправляем сообщение background.js для получения текущего состояния VPN
  chrome.runtime.sendMessage({ action: 'getVPNStatus' }, function(response) {
    if (response && response.status) {
      vpnStatusElement.textContent = `VPN Status: ${response.status}`;
    } else {
      vpnStatusElement.textContent = 'VPN Status: Unknown';
    }
  });

  toggleButton.addEventListener('click', function() {
    // Отправляем сообщение background.js для переключения состояния VPN
    chrome.runtime.sendMessage({ action: 'toggleVPN' }, function(response) {
      if (response && response.status === 'VPN Enabled') {
        vpnStatusElement.textContent = 'VPN Status: Enabled';
      } else if (response && response.status === 'Failed') {
        vpnStatusElement.textContent = 'VPN Status: Failed to connect';
      } else {
        vpnStatusElement.textContent = 'VPN Status: Unknown';
      }
    });
  });
});
