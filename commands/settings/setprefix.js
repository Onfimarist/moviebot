const { MessageFlags, Channel } = require("discord.js")

module.exports = {
    name: "setprefix",
    category: "settings",
    run: async (client, message, args) => {
        if (message.deletable) message.delete

        client.prefix = args

        message.channel.send("Changed prefix to: `" + client.prefix + "`")
    }
}