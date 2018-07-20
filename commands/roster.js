exports.run = (client, message, args) => {
  try {
    let rosterFile= require(`./rosters/${roster}.js`);
    rosterFile.run(client, message, args);
    
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for ${rosters}",
    description: "./rosters/${rosters}.js"
    }});
  }
}
