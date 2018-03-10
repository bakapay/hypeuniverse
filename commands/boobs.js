const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "421649723049508865") return;
			  const text = [
      "http://media.oboobs.ru/boobs_preview/08222.jpeg",
      "http://media.oboobs.ru/boobs_preview/02815.jpg",
      "http://media.oboobs.ru/boobs_preview/04149.jpg",
	  "http://media.oboobs.ru/boobs_preview/11334.jpg",
	  "http://media.oboobs.ru/boobs_preview/04201.jpg",
	  "http://media.oboobs.ru/boobs_preview/09549.jpg",
	  "http://media.oboobs.ru/boobs_preview/03518.jpg"
  ]
  
      const eembed = new Discord.RichEmbed()
	 .setImage(text[Math.floor(Math.random() * text.length)])
	 .setColor(0x070707)
	 message.channel.send(eembed)
	 
	};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'boobs',
  description: "Iti prezinta un raspuns la orice intrebare.",
  usage: ''
};