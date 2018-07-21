exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    if (args == 'aero') {
    let [ohjustame, SilverSky009] = player;
    const embed = new Discord.RichEmbed()
    .setTitle("Roster for Aero")
    .setColor(12887295)
    .setDescription("Rank 7\n\n${player[0]}\n${player[1]}")
    message.channel.send({embed});
    }});
  } else
    if (args == 'artemis') {
    let [mililu, SnakeHenry] = player;
    const embed = new Discord.RichEmbed()
    .setTitle("Roster for Artemis")
    .setColor(12887295)
    .setDescription("Rank 5\n\n${player[0]}\n${player[1]}")
    message.channel.send({embed});
    }});    
  } 
}
