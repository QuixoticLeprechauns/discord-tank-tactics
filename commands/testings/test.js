const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Tests bot functionality'),
	async execute(interaction) {
		return interaction.reply('Im working! YAAAAY!');
	},
};