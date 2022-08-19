// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const eventos = require('./handlers/events.js');
const commands = require('./handlers/commands.js');
const slashcommands = require('./handlers/slashcommands.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();
client.scommands = new Collection();

// When the client is ready, run this code (only once)
eventos(client);
commands(client, Collection);
slashcommands(client, Collection);

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.scommands.get(interaction.commandName);

	if (!command) return;

	console.log(command);

	try {
		await command.execute(interaction);
	}
	catch (e) {
		console.log(e);
	}
});

// Login to Discord with your client's token
client.login(token);

