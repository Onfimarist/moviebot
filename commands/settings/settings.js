const { MessageFlags } = require("discord.js")

module.exports = {
    name: "settings",
    run: async (client, message, args) => {
        message.channel.send(args(0))
        message.channel.send(args.slice(0))
    }
}