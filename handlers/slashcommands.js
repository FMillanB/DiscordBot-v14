const fs = require('node:fs');
const categories = fs.readdirSync('./slashcommands');

module.exports = (client) => {
	categories.forEach(async (category) => {
		fs.readdir(`./slashcommands/${category}`, (error) => {
			if (error) return console.error(error);
			const commands = fs.readdirSync(`./slashcommands/${category}`).filter((archivo) => archivo.endsWith('.js'));
			for (const file of commands) {
				const command = require(`../slashcommands/${category}/${file}`);
				client.scommands.set(command.data.name, command);
			}
		});
	});
};