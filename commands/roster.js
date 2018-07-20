exports.run = (client, message, args) => {
    let rosterFile = require(`./rosters/${roster}.js`);
    rosterFile.run(client, message, args);
}
