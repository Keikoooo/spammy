exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    if (args == 'aero') {     
    let embed = new Discord.RichEmbed()
        .setTitle("Roster for Aero")
        .setColor(12887295)
        .setDescription("Rank 7\n\n${aeroroster[0]}\n${aeroroster[1]}")
    message.channel.send({embed});
  } else
    if (args == 'artemis') {
    let embed = new Discord.RichEmbed()
       .setTitle("Roster for Artemis")
       .setColor(12887295)
       .setDescription("Rank 5\n\n${aeroroster[0]}\n${aeroroster[1]}")
    message.channel.send({embed});
  }
}
