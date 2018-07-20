exports.run = (client, message, args) => {
    if (args === 'artemis') {
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Artemis",
    description: "Rank 5\n\nmililu\nSnakeHenry"
    }});
  } else
    if (args === 'echo') {
    message.channel.send({embed: {
    color: 12887295,
    title: "Roster for Echo",
    description: "Rank 1\n\ycnan\naayanna"
    }});
  }
}
