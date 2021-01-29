module.exports = {
    name: "movie",
    run: async (message, client, args) => {
        message.channel.send(message.args)
    }
}