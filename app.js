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
    
    var testChannel = client.channels.find(channel => channel.id ==='669405037155450891');
    	setInterval(() => {
    		textChannel.send(SpamMessage)}, 10000);
    };
});

client.on("message", async message => {
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
