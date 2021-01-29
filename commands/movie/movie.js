module.exports = {
    name: "movie",
    category: "category",
    description: "Adds a movie to the movie poll.",
    run: async (client, message, args) => {
        if (message.deletable) message.delete()

        message.channel.send(args.slice(0).join(" "))
    }
}