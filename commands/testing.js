exports.run = (client, message, args) => {
    let [add, remove, player, team] = args;
    var player = [0, 1];
    
    if (args == 'aero') {
    const ["ohjustame", "SilverSky009"] = aeroroster;
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Aero",
    description: "Rank 7\n\n${aeroroster}\n${aeroroster}"
    }});
  } else
    if (args == 'artemis') {
    const ["mililu", "SnakeHenry"] = artemisroster;
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "Rank 5\n\n${artemisroster}\n${artemisroster}"
    }});
  } 
}
