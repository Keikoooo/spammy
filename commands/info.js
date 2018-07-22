exports.run = (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    
    .setTitle("Bot Information")
    .setDescription("I am a bot created by Keiko.")
    .setColor(12887295)
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username)
    .addField("Created On", client.user.createdAt);

    message.channel.send({botembed});
}
