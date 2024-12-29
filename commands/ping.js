const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('ping')
          .setDescription('Replies with Pong!'),

  run: ({ interaction, client }) => {
    interaction.reply({ content: `Pong! ${client.ws.ping}ms`, ephemeral: true });
  },
  devOnly: true,
};
