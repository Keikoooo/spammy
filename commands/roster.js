exports.run = (client, message, args) => {
  try {
    let rosterFile= require(`./rosters/${roster}.js`);
    rosterFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for ${rosters}",
    description: "./rosters/${rosters}.js"
    }});
    
  }
}
