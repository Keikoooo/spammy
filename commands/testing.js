exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    if (args == 'aero') {
    const aeroroster = ["ohjustame", "SilverSky009"];
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Aero",
    description: "Rank 7\n\n${aeroroster[0]}\n${aeroroster[1]}"
    }});
  } else
    if (args == 'artemis') {
    const artemisroster = ["mililu", "SnakeHenry"];
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "Rank 5\n\n${artemisroster[0]}\n${artemisroster[1]}"
    }});
  } 
}
