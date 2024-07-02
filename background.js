chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleVPN') {
    // Ваша логика для переключения VPN
    // Предполагаем, что вы используете exec для выполнения команды Wireguard VPN

    // Возвращаем статус успешного подключения (предполагаем)
    sendResponse({ status: 'VPN Enabled' });

    // В случае ошибки возвращаем статус ошибки
    // sendResponse({ status: 'Failed' });

    return true;  // Указывает, что sendResponse будет вызван асинхронно
  } else if (request.action === 'getVPNStatus') {
    // Ваша логика для получения текущего состояния VPN
    // Пример возвращения текущего состояния, если оно доступно
    sendResponse({ status: 'Enabled' }); // Или 'Disabled', 'Failed' в зависимости от текущего состояния

    return true;  // Указывает, что sendResponse будет вызван асинхронно
  }
});
