require('dotenv').config();

module.exports = (message) => {
	if (message.content.includes('test')) {
		message.reply(`${message.author} esta probando TEST`);
	}

	if (message.content.includes('ping')) {
		message.channel.send(
			`${message.author} Dijiste: ${message.content.toUpperCase()}`
		);
	}

	if (message.content.includes('help')) {
		message.channel.send(`Help here --> #rules`);
		console.log(message);
	}

	if (message.content.includes('links')) {
		message.channel.send(
			`Website https://www.monsterchompers.com/
				\nTwitter https://twitter.com/monsterchomp3rs
				\nInstagram https://instagram.com/monsterchompers
				\nOpenSea https://opensea.io/collection/monster-chompers
				`
		);
	}
};
