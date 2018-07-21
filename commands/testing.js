exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    if (args == 'aero') {
    let [ohjustame, SilverSky009] = args[2];
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Aero",
    description: "Rank 7\n\n${args[2][0]}\n${args[2][1]}"
    }});
  } else
    if (args == 'artemis') {
    let [mililu, SnakeHenry] = args[2];
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "Rank 5\n\n${args[2][0]}\n${args[2][1]}"
    }});
  } 
}
