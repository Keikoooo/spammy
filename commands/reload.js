exports.run = (client, message, args) => {
// Reboot command
    msg.channel.sendMessage('Restarting...')
    reboot().catch(console.log);
  }
}
