const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Tests if the code is working.'),
	async execute(interaction) {
		await interaction.reply('I\'m fully functional, I think...');
	},
};