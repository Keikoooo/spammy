const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const fs = require("fs")

// const config = require("./config.json");

client.on('ready', () => {
    console.log(`I am ready!`);
    client.user.setPresence({ game: { name: `on ${bot.servers.length} server | Keiko`, type: 0 } });
});

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('message', (message) => {
  const prefixes = ['fel ', 'Fel ', 'FEL ', 'fEl ', 'feL ', 'fEL ', 'FeL ', 'fEL ', 'FEl '];
  let prefix = false;
  for(const thisPrefix of prefixes) {
  if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  }
  if(!prefix) return;  
  
  // Exit and stop if the prefix is not there or if user is a bot
  if (message.author.bot) return;
  if (message.channel.type === "dm") return; // Ignore DM channels.
  if(message.content.indexOf(prefix) !== 0) return;
    
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    
  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
