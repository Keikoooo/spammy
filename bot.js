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

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
      // Check arg.
        if (args[0] === 'stop') {
            mode = 'stop';
        } else 
        if (args[0] === 'start') {
            mode = 'start';
        }
     let currentTime;
        let run = setInterval(function() {
            currentTime = new Date().getSeconds(); // CHANGE
            if (currentTime % 10 === 0) {
                getProgram();
            }
            if (mode === 'stop') {
                clearInterval(run);
            }
        }, 1000);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
