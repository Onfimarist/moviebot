module.exports = {
    name: "movie",
    category: "movie",
    run: async (message, client, args) => {
        message.channel.send(args.slice(0).join(" "))
    }
}