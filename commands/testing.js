exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    var aeroroster = ["ohjustame", "SilverSky009", "111titanic223"];
    var artemisroster = ["mililu", "SnakeHenry", "Echanz"];
    
    if (args == 'aero') {
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Aero",
    description: "${aeroroster[0]}, ${aeroroster[1]}, ${aeroroster[2]}"
    }});
  } else
    if (args == 'artemis') {
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "${artemisroster[0]}, ${artemisroster[1]}, ${artemisroster[2]}"
    }});
  } 
}
