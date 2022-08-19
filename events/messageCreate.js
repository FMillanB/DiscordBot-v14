const prefix = '?';

module.exports = {
	name: 'messageCreate',
	async execute(client, message) {
		if (!message.content.startsWith(prefix) || message.author.bot) return;
		const args = message.content.slice(prefix.length).split(/ +/);
		console.log(args);
		const commandName = args.shift().toLowerCase();
		const command = client.commands.get(commandName);
		console.log(command);
		if (!command) return;
		try {
			command.run(client, message, args);
		}
		catch (e) {
			console.log(e);
			return message.reply('Error al ejecutar el comando');
		}
		console.log(commandName);
	},
};