exports.run = (client, message, args) => {
  let rosters = require("./commands/roster.js");
  
  if (args == ${roster.args}) {
    rosters.run(client, message, args);
  } else
    message.channel.send(`Please insert a team.`);  
  }
}
