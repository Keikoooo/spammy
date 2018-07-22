exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    if (args == 'aero') {
    const aeroroster = ["ohjustame", "SilverSky009"];
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Aero",
    description: "Rank 7\n\n${aeroroster}\n${aeroroster}"
    }});
  } else
    if (args == 'artemis') {
    const artemisroster = ["mililu", "SnakeHenry"];
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "Rank 5\n\n${artemisroster}\n${artemisroster}"
    }});
  } 
}
