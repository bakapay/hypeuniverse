const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let text = args.join(" ")
  
const asc = new Discord.RichEmbed()
.setAuthor("Command: /ascii", client.user.avatarURL)
.setDescription("**Description:** Turn your input into ascii text\n**Usage:** /ascii [input]\n**Example:** /ascii Chromatic")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

  if (!text) return message.channel.send(asc)
var request = require("request");
request("https://artii.herokuapp.com/make?text=" + text, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var ascii = body;
    message.channel.send("```yml\n" + ascii + "\n```");
	
  }
});

};

 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'COX.',
  usage: 'search <words>'
};