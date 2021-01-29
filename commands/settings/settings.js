const { MessageFlags } = require("discord.js")

module.exports = {
    name: "settings",
    run: async (client, message, args) => {
        message.channel.send(args)
        message.channel.send(args.slice(0))
        message.channel.send(args.join(" "))
        message.channel.send(args.slice(0).join(" "))
    }
}