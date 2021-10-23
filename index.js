const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const prefix = '!';
const amountnitro = 0;

client.on('message', msg => {
    let args = msg.content.slice(prefix.length).trim().split(' ');

    if (msg.content.startsWith(`${prefix}nitro`)) {
        msg.delete()
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#8A2BE2')
	    .setTitle('-------- Nitro Send --------')
	    .setURL('https://discord.js.org/')
	    .addFields(
		   { name: 'Dm Message  ', value: 'I Sent You a 25 Nitro Check Your DMs :thumbsup: (Note: The Nitro Codes Are Not Checked)' },
	    )
	   .setTimestamp()
        msg.channel.send(exampleEmbed);

        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
        msg.author.send("https://discord.gift/" + randomstring.generate(16));
    }
    

    if (msg.content.startsWith(`${prefix}invitenitro`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;
        msg.delete()
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#8A2BE2')
	    .setTitle('-------- Invite Nitro Bot V3 --------')
	    .setURL('https://discord.js.org/')
	    .addFields(
		   { name: 'Link To Add Your Bot To Your Server - ', value: 'Link: https://discord.com/api/oauth2/authorize?client_id=892933858146795610&permissions=8&scope=bot' },
           { name: 'Note : ', value: 'Make Nitro Bot V3 As Administrator Or It Will Not Work' },
	    )
	   .setTimestamp()

        msg.channel.send(exampleEmbed);
    }


    if (msg.content.startsWith(`${prefix}chancesnitro`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;
        msg.delete()
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#8A2BE2')
	    .setTitle('-------- Nitro Chances --------')
	    .setURL('https://discord.js.org/')
	    .addFields(
		   { name: 'Nitro Classic : ', value: '0.1%' },
		   { name: 'Nitro : ', value: '0.00000001%' },
	    )
	   .setTimestamp()

        msg.channel.send(exampleEmbed);
    }

    if (msg.content.startsWith(`${prefix}helpnitro`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;
        msg.delete()
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#8A2BE2')
	    .setTitle('-------- Nitro Bot V3 Help --------')
	    .setURL('https://discord.js.org/')
	    .addFields(
		   { name: '!helpnitro  ', value: 'Help Nitro Commands' },
		   { name: '!nitro  ', value: 'Gen 25 Nitro To Your Dm' },
		   { name: '!invitenitro  ', value: 'Invite Nitro Bot V3 To Your Server',},
           { name: '!chancesnitro - ', value: 'See The Chances Of Nitro' },
           { name: 'Nitro Bot Made By : ', value: 'MashedPotato#0001' },
	    )
	   .setTimestamp()

        msg.channel.send(exampleEmbed);
    }
})

client.on('ready', async () => {
    console.log('Nitro Bot V3 Is Online!')

    let statuses = [
        `Free Nitro`,
        `${client.users.cache.size} Miners👀`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "STREAMING",
            url: "https://www.twitch.tv/"
        })
    }, 4000)
})

client.login('EnterTokenHere')
