exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    if (args == 'aero') {
    let [ohjustame, SilverSky009] = player;
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Aero",
    description: "Rank 7\n\n${player[0]}\n${player[1]}"
    }});
  } else
    if (args == 'artemis') {
    let [mililu, SnakeHenry] = args[2];
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "Rank 5\n\n${player[0]}\n${player[1]}"
    }});
  } 
}
