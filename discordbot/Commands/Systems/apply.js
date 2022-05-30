const { MessageEmbed, CommandInteraction, Client } = require("discord.js");
const { Modal, TextInputComponent, showModal } = require('discord-modals');
const config = require("../../Structures/config.json");

module.exports = {
  name: "apply",
  usage: "/apply",
  description: "Apply for moderator",
  /**
   * 
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const { guild, member } = interaction;
    if (!config.GuildID.includes(guild.id)) {
      return interaction.reply({
        content: "Wrong discord server degenerate",
      });
    }

    const modal = new Modal()
    .setCustomId('application')
    .setTitle('Staff Application')
    .addComponents(
    new TextInputComponent()
      .setCustomId('age')
      .setLabel('What is your age?')
      .setStyle('SHORT')
      .setMinLength(2)
      .setMaxLength(2)
      .setPlaceholder('Must be 18 or above')
      .setRequired(true),
    new TextInputComponent()
      .setCustomId('staff')
      .setLabel('Why do you want to be staff at MagicArk?')
      .setStyle('LONG')
      .setMinLength(0)
      .setMaxLength(200)
      .setPlaceholder('be honest.')
      .setRequired(true),
    new TextInputComponent()
      .setCustomId('what')
      .setLabel('What would you like to be in MagicArk?')
      .setStyle('LONG')
      .setMinLength(0)
      .setMaxLength(200)
      .setPlaceholder('Be reasonable.')
      .setRequired(true),
    new TextInputComponent()
      .setCustomId('experience')
      .setLabel('Do you have any experience as staff?')
      .setStyle('LONG')
      .setMinLength(0)
      .setMaxLength(200)
      .setPlaceholder('be honest.')
      .setRequired(true),
    new TextInputComponent()
      .setCustomId('steam')
      .setLabel('What is your steamname and steam64 id?')
      .setStyle('LONG')
      .setMinLength(0)
      .setMaxLength(200)
      .setPlaceholder('Please leave you credentials here.')
      .setRequired(true),
    );
    
    showModal(modal, {
      client: client,
      interaction: interaction
    })
  }
}