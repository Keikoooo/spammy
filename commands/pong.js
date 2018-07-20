exports.run = (client, message, args) => {
    message.channel.send(`Please do `fel ping` to check ping.`).catch(console.error);
}
