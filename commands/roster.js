exports.run = (client, message, args) => {
 try {
    let rosterFile = require(`./rosters/${roster}.js`);
    rosterFile.run(client, message, args);
 }
}
