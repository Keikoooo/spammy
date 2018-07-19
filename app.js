const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const prefix = '>>';

client.on('ready', () => {
    console.log(`I am ready!`);
    client.user.setPresence({ game: { name: `with Keiko!`, type: 0 } });
});

client.on('message', (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
  } else
  if (message.content.startsWith(prefix + "pong")) {
    message.channel.send("ping!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
