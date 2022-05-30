const { Client, MessageEmbed } = require("discord.js")

module.exports = async (client) => {
  client.on("modalSubmit", async(modal) => {
    if(modal.customId == 'application') {

      const age = modal.getTextInputValue('age')
      const staff = modal.getTextInputValue('staff')
      const what = modal.getTextInputValue('what')
      const experience = modal.getTextInputValue('experience')
      const steam = modal.getTextInputValue('steam')

      const embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Staff Application`)
      .setDescription(`Sent by <@${modal.member.id}>`)
      .addField("Age", `${age}`, true)
      .addField("Why do you want to be staff at MagicArk?", `${staff}`, false)
      .addField("What would you like to be withing MagicArk?", `${what}`, false)
      .addField("Do you have any experience as staff?", `${experience}`, false)
      .addField("What is your steamname and steam64 id?", `${steam}`, false)

      const channel = client.channels.cache.get('383323203604578311')

      channel.send({embeds: [embed]})

      await modal.deferReply({ephemeral: true})
      modal.followUp('Your application was successfully submitted.')
    }
  })
}