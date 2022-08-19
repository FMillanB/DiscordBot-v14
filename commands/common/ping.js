module.exports = {
	name: 'ping',
	category: 'info',
	aliases: 'p',
	usage: 'ping',
	description: 'look the ping of the bot',
	args: false,
	async run(client, message) {
		message.reply(`My ping is: ${client.ws.ping}ms`);
	},
};