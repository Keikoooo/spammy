exports.run = (client, message, args[0], args[1]) => {
  let rosters = require("./roster.js");
  let [player, team] = args;
  
  if (!arg[1]) {
    rosters.run(client, message, args[1]);
  } else
    message.channel.send(`Pong! \`Please insert a team.`);  
  }
}
