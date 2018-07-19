const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const prefix = '=';

client.on('ready', () => {
    console.log(`I am ready!`);
    client.user.setPresence({ game: { name: `with Keiko!`, type: 0 } });
});

client.on('message', function(msg) => {
    if (msg.author.bot) {
        return;
    }
    if(msg.content === prefix + "ping") {
        msg.channel.send(`Pinging...`).then(function(m) {
            m.edit(`Pong! The message took ${m.createTimestamp - msg.createdTimestamp}ms!`)
    })
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
