module.exports = {
    name: "settings",
    run: async (client, message, args) => {
           if (args[0] === null)
           message.channel.send("something")
    }
}