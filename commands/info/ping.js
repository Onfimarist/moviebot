module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message) => {
        if (message.deletable) message.delete()

        const msg = await message.channel.send(`🏓 Pinging...`)
        await msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency is ${client.ws.ping}ms`);
    }
}