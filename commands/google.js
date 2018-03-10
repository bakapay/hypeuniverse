const Discord = require('discord.js');
exports.run = function(client, message, args) { 
        let reason = args.slice(0).join('+');
const k = new Discord.RichEmbed()
.setAuthor("Command: /google", client.user.avatarURL)
.setDescription("**Description:** Search on google\n**Usage:** /!google [words]\n**Example:** /google Anime")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

if(!reason) return message.channel.send(k)
 const embed = new Discord.RichEmbed()
 .setTitle('Results')
 .setDescription(`https://www.google.com/search?q=${reason}`)
 .setThumbnail('https://images-ext-2.discordapp.net/external/_Trta_kSVcgDOMAjaG6EijLTnVJoy9GYtI_h4QWAXG0/http/logok.org/wp-content/uploads/2015/09/Google-logo-2015-G-icon.png?width=80&height=60')
 .setFooter(message.author.username)
 .setTimestamp()
message.channel.sendEmbed(embed)

};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'google',
  description: 'Search on google.',
  usage: 'search <words>'
};