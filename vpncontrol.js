const { exec } = require('child_process');

function toggleVPN(callback) {
  // Вызов команды для включения/выключения Wireguard VPN
  exec('wg-quick up wg0', (error, stdout, stderr) => {
    if (error) {
      callback({ status: 'Failed to enable VPN', error: stderr });
    } else {
      callback({ status: 'VPN Enabled' });
    }
  });
}

function main() {
  let input = '';

  process.stdin.on('data', chunk => {
    input += chunk;
  });

  process.stdin.on('end', () => {
    try {
      const message = JSON.parse(input);
      if (message.command === 'toggle') {
        toggleVPN(response => {
          process.stdout.write(JSON.stringify(response));
        });
      }
    } catch (e) {
      process.stdout.write(JSON.stringify({ status: 'error', message: e.message }));
    }
  });

  process.stdin.resume();
}

if (require.main === module) {
  main();
}
