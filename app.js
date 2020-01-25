const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const fs = require("fs")
const SpamMessage = "Bacon and eggs make a good breakfast, everyone."; // message you want to spam \\
const prefix = ";";

// const config = require("./config.json");

client.on('ready', () => {
    var testChannel = client.channels.find(channel => channel.id ==='669405037155450891');
    
    console.log(`I am ready!`);
    client.user.setPresence({ game: { name: `Pokecord | Keiko`, type: 0 } });
    
    setInterval(() => {
    testChannel.send(SpamMessage);}, 10000);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return; // Ignore DM channels.
  if(message.content.indexOf(prefix) !== 0) return;
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
