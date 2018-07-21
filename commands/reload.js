exports.run = (client, message, args) => {
  resetBot(message.channel);
  break;
  
  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(process.env.BOT_TOKEN));
  }
};
