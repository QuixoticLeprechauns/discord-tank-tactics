const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('do_something')
		.setDescription('Tests if the code is working.'),
	async execute(interaction) {
		await interaction.reply('Im fully functional, I think...');
	},
};