exports.run = (client, message, args) => {
  let rosters = require("./roster.js");
  
  if (args == ${args}) {
    rosters.run(client, message, args);
  } else
    message.channel.send(`Please insert a team.`);  
  }
}
