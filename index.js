require('dotenv').config();
const Discord = require('discord.js');
const intents = new Discord.Intents();
const client = new Discord.Client({intents: 32767});

const welcome = require('./src/welcome');
const commands = require('./src/commands');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	welcome(client);
});

client.on('messageCreate', (message) => {
	let prefix = 'p!';

	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;
	if (!message.content.includes(prefix)) return;

	commands(message);
});

client.login(process.env.BOT_TOKEN);
