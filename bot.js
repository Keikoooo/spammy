const botconfig = require('./botconfig.json');
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on('ready', async () => {
    console.log('${client.user.username} is online!');
    client.user.setGame("with Keiko!");
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'pong') {
    	message.reply('ping');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
