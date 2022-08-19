const { ActivityType } = require('discord.js');

module.exports = {
	name: 'ready',
	async execute(client) {
		console.log(`Logged as ${client.user.tag}`);
		client.user.setActivity('hola', { type: ActivityType.Custom, 'Hola':'hola' });
	},
};