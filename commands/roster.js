exports.run = (client, message, args) => {
 try {
    let commandFile = require(`./rosters/${roster}.js`);
    commandFile.run(client, message, args);
}
