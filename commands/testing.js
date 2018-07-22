exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    var aeroroster = "ohjustame";
    var artemisroster = "mililu";
    
    if (args == 'aero') {
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Aero",
    description: "Rank 7\n\n${aeroroster}"
    }});
  } else
    if (args == 'artemis') {
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "Rank 5\n\n${artemisroster}"
    }});
  } 
}
