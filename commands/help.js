const Discord = require('discord.js');
exports.run = (client, message, args) => {
const help = new Discord.RichEmbed()
.setAuthor("Command Prefix - /", client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.addField("Moderator Commands", "ban - Ban a member, optional time limit\nsoftban - Softban a member (ban and immediate unban)\nkick - Kick a member\nmute - Mute a member, optional time limit\npurge - Delete a number of messages from a channel. (limit 100)\nnick - Change the bot nickname\naddrole - Add a new role, with optional color\ndelrole - Delete a role")
.addField("Music Commands", "play - Add a song to queue and play\nstop - Stop playing\nqueue - List the songs in queue\nskip - Skip the currently playing song\n**The music system is supplied with dyno**")
.addField("Fun Commands", "ship - Check your relationship with another person\npsychopass - Check someone's crime coefficient\nascii - Turn your input into ascii text\nnuke - Nuke someone")
.addField("NSFW Commands", "boobs - Images with boobs")
.addField("Misc Commands", "serverinfo - Show information about a guild\nweather - Shows the weather in a certain location\nwhois - Show information about a user\nremind - Get a reminder after an specified time\ngoogle - Search on google")
.addField("Administrator Commands", "eval - Eval a code\nreload - Reload the code for a command")
.setColor(0x070707)

message.channel.send(help)
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Show information about a guild.',
  usage: 'ban [user]'
};