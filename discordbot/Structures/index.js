const { Client, Collection } = require("discord.js");
const client = new Client({intents: 32767});
const discordModals = require('discord-modals')
discordModals(client);
const { Token } = require("./config.json");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");



client.commands = new Collection();

client.cooldowns = new Collection();



require("./Handlers/Modal")(client);



["Events", "Commands"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
});


client.login(Token);