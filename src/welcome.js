require('dotenv').config();
const Discord = require('discord.js');

/* module.exports = (client) => {
	const channelId = process.env.WELCOME_CHANNEL_ID;
	const rulesChannel = process.env.RULES_CHANNEL_ID;
	client.on('guildMemberAdd', async (member) => {
		console.log(member);
		const message = `Welcome <@${
			member.id
		}> to our server! Be sure to check out our ${member.guild.channels.cache
			.get(rulesChannel)
			.toString()}`;

		const channel = member.guild.channels.cache.get(channelId);
		channel.send(message);
	});
}; */

module.exports = (client) => {
	const channelId = process.env.WELCOME_CHANNEL_ID;
	const rulesChannel = process.env.RULES_CHANNEL_ID;
	client.on('guildMemberAdd', async (member) => {
		const Canvas = require('canvas');
		const canvas = Canvas.createCanvas(400, 400);
		const ctx = canvas.getContext('2d');

		const monster = [
			'https://res.cloudinary.com/dlexbrcrv/image/upload/v1635006118/Proyects/MonsterChompers-NFT-Mummy-example_nvpq6w.jpg',
			'https://res.cloudinary.com/dlexbrcrv/image/upload/v1635006087/Proyects/MonsterChompers-NFT-Werewolf-example_hmllql.jpg',
			'https://res.cloudinary.com/dlexbrcrv/image/upload/v1635006053/Proyects/MonsterChompers-NFT-Yeti-example_bhcvcr.jpg',
			'https://res.cloudinary.com/dlexbrcrv/image/upload/v1635006052/Proyects/MonsterChompers-NFT-Vampire-example_bnkzde.png',
		];

		const theeth = [
			'https://res.cloudinary.com/dlexbrcrv/image/upload/v1635010274/Proyects/teeth-e-min_cwnzls.png',
			'https://res.cloudinary.com/dlexbrcrv/image/upload/v1635010279/Proyects/teeth-d-min_vmbwbr.png',
			'https://res.cloudinary.com/dlexbrcrv/image/upload/v1635010412/Proyects/teeth-c-min_qzily0.png',
		];

		const random = Math.floor(Math.random() * monster.length);

		const background = await Canvas.loadImage(monster[random]);

		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		/* ctx.arc(x, y, r, sAngle, eAngle, counterclockwise); */
		ctx.arc(200, 227, 145, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();

		const avatar = await Canvas.loadImage(
			member.user.displayAvatarURL({format: 'jpg', size: 1024, dynamic: true})
		);
		ctx.drawImage(avatar, 50, 81, 298, 293);

		const dientes = await Canvas.loadImage(theeth[random]);
		ctx.drawImage(dientes, -2, 0, 405, 402);

		const attachment = new Discord.MessageAttachment(
			canvas.toBuffer(),
			'bienvenida-prueba.png'
		);
		client.channels.cache
			.get(channelId)
			.send(
				`:wave: Hello ${member} welcome to ${
					member.guild.name
				}! Be sure to check out our ${member.guild.channels.cache
					.get(rulesChannel)
					.toString()}`
			);
		client.channels.cache.get(channelId).send({files: [attachment]});
	});
};
