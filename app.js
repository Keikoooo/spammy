const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const fs = require("fs")
const SpamMessage = "Bacon and eggs make a good breakfast, everyone."; // message you want to spam \\
const prefix = ";";

// const config = require("./config.json");

client.on('ready', () => {
    console.log(`I am ready!`);
    client.user.setPresence({ game: { name: `Pokecord | Keiko`, type: 0 } });
});

client.on('message', (message) => {
    if(message.author.bot) return;
    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}spam`) {
	let Ping = message.mentions.users.first();
    	setInterval(function(){
    		Ping.send(SpamMessage)
    	},
    		1200
    	);
    };
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
