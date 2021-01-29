const { Client, Collection } = require("discord.js");
const fs = require("fs");

require("dotenv").config({ allowEmptyVariables: true});

const client = new Client({
    disableMentions: "everyone"
})

client.prefix = "!"

client.footer = process.env.FOOTER
client.color = process.env.EMBEDCOLOR

client.commands = new Collection();
client.args = new Collection();

client.categories = fs.readdirSync("./commands");

["commands"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Logged in using ${client.user.username}`);

    client.user.setActivity(".help");
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(client.prefix)) return;
    if (!message.member) message.member = await message.guild.members.fetch(message);

    const args = message.content.slice(client.prefix.length).trim().split(/ + /g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.length(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
    command.run(client, message, args);
})

client.login(process.env.DEVTOKEN);