const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, token } = require('./config.json');
const fs = require('node:fs');

console.log(clientId);

const rest = new REST({ version: '10' }).setToken(token);

async function createSlash() {
	try {
		const commands = [];
		fs.readdirSync('./slashcommands').forEach(async (category) => {
			const commandFile = fs.readdirSync(`./slashcommands/${category}`).filter(file => file.endsWith('.js'));
			for (const file of commandFile) {
				const command = require(`./slashcommands/${category}/${file}`);
				commands.push(command.data.toJSON());
				console.log(commands);
			}
		});
		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		)
			.then(() => console.log('Successfully registered application commands.'));
	}
	catch (e) {
		console.log(e);
	}
}

createSlash();