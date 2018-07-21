exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    
   // TWC Rosters
    const aeroroster = ["ohjustame", "SilverSky009"];
    const artemisroster = ["mililu", "SnakeHenry"];
    
    if (args == 'aero') {
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Aero",
    description: "Rank 7\n\n${aeroroster[0]}\n${aeroroster[1]}"
    }});
  } else
    if (args == 'artemis') {
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "Rank 5\n\n${aeroroster[0]}\n${aeroroster[1]}"
    }});
  }
}
