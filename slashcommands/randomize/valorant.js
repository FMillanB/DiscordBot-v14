const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('valorant')
		.setDescription('Randomiza un agente del juego')
		.addStringOption(option =>
			option.setName('rol')
				.setDescription('Selecciona el rol del agente')
				.setRequired(false)
				.addChoices(
					{ name: 'Duelista', value: 'Duelista' },
					{ name: 'Controlador', value: 'Controlador' },
					{ name: 'Sentinela', value: 'Sentinela' },
					{ name: 'Iniciador', value: 'Iniciador' },
				)),
	async execute(interaction) {
		const string = interaction.options.getString('rol');
		if (interaction.channel.type === 'dm') return;

		const random = () => {
			return Math.floor(Math.random() * 6);
		};

		const getAgent = () => {
			switch (random()) {
			case 0:
				return { name:'Phoenix', color:'F92B2B' };
			case 1:
				return { name:'Jett', color:'FFFFFF' };
			case 2:
				return { name:'Neon', color:'4279F0' };
			case 3:
				return { name:'Yoru', color:'0A3591' };
			case 4:
				return { name:'Reyna', color:'4F1153' };
			case 5:
				return { name:'Raze', color:'B65618' };
			}
		};

		const agent = getAgent();

		const embed = new EmbedBuilder()
			.setColor(agent.color)
			.setTitle(agent.name);
		await interaction.deferReply();
		await wait(1000);
		await interaction.editReply({ embeds: [embed] });
	},
};