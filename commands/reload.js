exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`:gear: I cannot find a command with name -  **${args[0]}**`);
  } else {
    message.channel.send(`:gear: Reloading......`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`:gear: **${command}** - DONE`);
          })
          .catch(e => {
            m.edit(`:gear: **ERROR**\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Dai reload unei comenzi. [doar developerul]',
  usage: 'reload <command>'
};
