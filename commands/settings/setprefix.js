const { MessageFlags } = require("discord.js")

module.exports = {
    name: "setprefix",
    run: async (client, message, args) => {
        client.prefix = args
    }
}