if(message.content.startsWith("addrole")
if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`Were sorry you need MANAGE_ROLES permission to use this command retard`)
        if (!args[0] || !args[1]) return message.channel.send(`You must be mentaly disabled, thats the wrong command son.`)
        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('<:Incorrect:881693511190216775> | \`User already has that role\`')
             const embed = new MessageEmbed()
             .setAuthor(`Role Name: ${roleName.name}`, member.user.displayAvatarURL({dynamic: true, format: 'png'}))
                 .setDescription(`Successfully given the role: **${roleName}** to: **${member.user}**`)
                 .setColor('#00ff12')
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send('RETARD ALAERT! didnt name a role.').then(() => console.log(e))
        }
}




//The command uptop of this message is for your index.js or if you are using glith put it in your server.js
//This is a discord.js command for your discord bot. If you have a command handler use this code: 





const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "addrole",
    description: "Gives a role to a member in guild",
 execute: async (message, args, client) => {
   if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`Were sorry you need MANAGE_ROLES permission to use this command retard`)
        if (!args[0] || !args[1]) return message.channel.send(`You must be mentaly disabled, thats the wrong command son.`)
        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('<:Incorrect:881693511190216775> | \`User already has that role\`')
             const embed = new MessageEmbed()
             .setAuthor(`Role Name: ${roleName.name}`, member.user.displayAvatarURL({dynamic: true, format: 'png'}))
                 .setDescription(`Successfully given the role: **${roleName}** to: **${member.user}**`)
                 .setColor('#00ff12')
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send('RETARD ALAERT! didnt name a role.').then(() => console.log(e))
        }
    }
}
