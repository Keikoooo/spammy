exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    
    var aeroroster = ["ohjustame", "SilverSky009", "111titanic223"];
    var artemisroster = ["mililu", "SnakeHenry", "Echanz"];
    
    if (args == 'aero') {
    message.channel.send("${aeroroster[0]}, ${aeroroster[1]}, ${aeroroster[2]}");
  } else
    if (args == 'artemis') {
    message.channel.send("${artemisroster[0]}, ${artemisroster[1]}, ${artemisroster[2]}");
  } 
}
