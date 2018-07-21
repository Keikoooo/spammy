exports.run = (client, message, args[0], args[1]) => {
  let rosters = require("./roster.js");
  let [player, team] = args;
  
  if (args[1]) {
    rosters.run(client, message, args[1]);
  } else
    message.channel.send(`Please insert a team.`);  
  }
}
