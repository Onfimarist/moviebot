module.exports = {
    name: "movie",
    category: "category",
    description: "Adds a movie to the movie poll.",
    run: async (client, message) => {
        if (message.deletable) message.delete()

        message.channel.send("something")
    }
}