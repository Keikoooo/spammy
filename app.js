const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const prefix = '>>';

client.on('ready', () => {
    console.log(`I am ready!`);
    client.user.setPresence({ game: { name: `with Keiko!`, type: 0 } });
});

client.on('message', (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;;
  if (message.content.startsWith(prefix + "ping")) {
    let start = Date.now(); 
    bot.createMessage(msg.channel.id, 'Pong! ').then(msg => { 
        let diff = (Date.now() - start); 
        return msg.edit(`Pong! \`${diff}ms\``); })
  } else
  if (message.content.startsWith(prefix + "pong")) {
    message.channel.send("ping!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
