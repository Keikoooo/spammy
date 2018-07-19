const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const prefix = '>>';

client.on('ready', () => {
    console.log(`I am ready!`);
    client.user.setPresence({ game: { name: `with Keiko!`, type: 0 } });
});

client.on('message', message => {
    if (message.author.bot || message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(" ")
    const command = args.shift().toLowercase();
    
    if (command === 'ping') {
        const then = Date.now();
        message.channel.send('pinging...').then(>> => {
        >>.edit('Pong! It took ${Date.now - then}ms!\nDiscord Heartbeart:${bot.ping}');
        });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
