const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const prefix = '>>';

client.on('ready', () => {
    console.log(`I am ready!`);
    client.user.setPresence({ game: { name: `with Keiko!`, type: 0 } });
});

client.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    if (message.author.id === client.user.id) return;
    if (message.author.bot) return;

    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length).toLowerCase();

    var args = message.content.split(" ").slice(1);
    args[0] = args[0].toLowerCase();

    if (command === 'ping') {
        message.channel.sendMessage(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    } else  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
