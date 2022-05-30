const { Client } = require("discord.js")
const { Database } = require("../../Structures/config.json");


module.exports = {
    name: "ready",
    once: true,
    /**
    *  @param {Client} client
    */
    execute(client) {
        console.log("The client is now ready!")
        client.user.setActivity("/help", {type: "WATCHING"});   
            
    }
}