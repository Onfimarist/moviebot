module.exports = {
    name: "setchannel",
    category: "settings",
    run: async (client, message, args) => {
        if (message.deletable) message.delete()

        let movieChannel = message.guild.channels.cache.find(c => c.name === args)

        client.moviechannel = movieChannel

        movieChannel.toString()
    }
}