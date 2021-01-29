const { MessageFlags } = require("discord.js")

module.exports = {
    name: "settings",
    run: async (client, message, args) => {
        message.channel.send(args.slice(1).join(" "))
    }
}