const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
const k = new Discord.RichEmbed()
.setAuthor("Command: /mute", client.user.avatarURL)
.setDescription("**Description:** Get a reminder after an specified time\n**Usage:** /remind [time] [reminder]\n**Example:** /remind 10m Why not?!")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

let r = args.slice(1).join(' ');
let reason = "reason"
if (!r) {
  reason = "No reminder provided."
} else {
  reason = r
}

let arrrg = message.content.split(" ").slice(0)
let time = arrrg[1]
if (!time) return message.channel.sendEmbed(k)
	
message.channel.send(vemoji + "** You will receive a reminder after " + time + "**.")

  setTimeout(function() {
    message.author.send(":alarm_clock: **REMINDER:** " + reason)
  },ms(time))
  
  
};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'remind',
  description: 'COX.',
  usage: 'search <words>'
};