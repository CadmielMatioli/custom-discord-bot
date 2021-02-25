// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message){
        if (message.guild) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não tem permissão suficiente para executar este comando.');
            message.channel.send('Verifique suas mengens!');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://discord.gg/jgxAgg4Jtm')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Ajuda')
            .setURL('https://discord.gg/jgxAgg4Jtm')
            .setColor('da7272')
            .addField(`${prefix}giveaway [duração] [premio]`, 'A duração está definida em um número e uma variável de tempo.\nO prêmio pode ser qualquer coisa, mas deve ser acima de um.')
            .addField('Exemplo:', `${prefix}giveaway 10h $9.99 Nitro\nCria uma duração de 10 horas giveaway com '$9.99 Nitro' como prêmio.`)
            .setFooter('BCL Craft 💖', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
        if (!message.guild) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não tem permissão suficiente para executar este comando.');
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://discord.gg/jgxAgg4Jtm')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Ajuda')
            .setURL('https://discord.gg/jgxAgg4Jtm')
            .setColor('da7272')
            .addField(`${prefix}giveaway [duração] [premio]`, 'A duração está definida em um número e uma variável de tempo.\nO prêmio pode ser qualquer coisa, mas deve ser acima de um.')
            .addField('Exemplo:', `${prefix}giveaway 10h $9.99 Nitro\nCria uma duração de 10 horas giveaway com '$9.99 Nitro' como prêmio.`)
            .setFooter('BCL Craft 💖', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
}
