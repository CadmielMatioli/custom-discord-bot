// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'giveaway',
    execute(client, message, channelid){
        if (!message.guild) return;
        async function giveaway() {
            var time = '';
            var time2 = '';
            var time3 = '';
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não tem permissão suficiente para executar este comando.');
            if (message.content === `${prefix}giveaway`) return client.channels.cache.get(channelid).send(`Você não informou uma duração ou um prêmio para o sorteio.`)
            if (message.content !== `${prefix}giveaway`) {
                const stated_duration_hours = message.content.split(' ')[1];
                const stated_duration_hours2 = stated_duration_hours.toLowerCase();
                if (stated_duration_hours2.includes('s')) {
                    var time = 's';
                }
                if (stated_duration_hours2.includes('m')) {
                    var time = 'm';
                }
                if (stated_duration_hours2.includes('h')) {
                    var time = 'h';
                }
                if (stated_duration_hours2.includes('d')) {
                    var time = 'd';
                }
                const stated_duration_hours3 = stated_duration_hours2.replace(time, '');
                if (stated_duration_hours3 === '0') {
                   client.channels.cache.get(channelid).send('A duração deve ser pelo menos um.');
                }
                if (isNaN(stated_duration_hours3)) {
                   client.channels.cache.get(channelid).send('A duração deve ser uma variável de tempo válida.');
                }
                if (stated_duration_hours3 > 1) {
                    var time3 = 's';
                }
                if (time === 's') {
                    var actual_duration_hours = stated_duration_hours3 * 1000;
                    var time2 = 'segundo';
                }
                if (time === 'm') {
                    var actual_duration_hours = stated_duration_hours3 * 60000;
                    var time2 = 'minuto';
                }
                if (time === 'h') {
                    var actual_duration_hours = stated_duration_hours3 * 3600000;
                    var time2 = 'hora';
                }
                if (time === 'd') {
                    var actual_duration_hours = stated_duration_hours3 * 86400000;
                    var time2 = 'dia';
                }
                if (!isNaN(stated_duration_hours3)) {
                    const prize = message.content.split(' ').slice(2).join(' ');
                    // if (prize === '') return message.channel.send('Você tem que inserir um prêmio.');
                    if (prize === '') return client.channels.cache.get(channelid).send('Você tem que inserir um prêmio.');
                    if (stated_duration_hours3 !== '0') {
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${prize}`)
                        .setColor('ff0000')
                        .setThumbnail(`${client.user.displayAvatarURL({IMAGE_SIZE: 100})}`)
                        .setDescription(`**Reaja com  🎉  para participar!** \n Duração: **${stated_duration_hours3}** ${time2}${time3}\nCriado por: ${client.user}`)
                        .setTimestamp(Date.now() + (actual_duration_hours))
                        .setFooter('Termina em')
                        let msg = await client.channels.cache.get(channelid).send(':tada: **Sorteio** :tada:', embed)
                        // let msg = await message.channel.send(':tada: **Sorteio** :tada:', embed)
                        await msg.react('🎉')
                        setTimeout(() => {
                            msg.reactions.cache.get('🎉').users.remove(client.user.id)
                            setTimeout(() => {
                                let winner = msg.reactions.cache.get('🎉').users.cache.random();
                                if (msg.reactions.cache.get('🎉').users.cache.size < 1) {
                                    const winner_embed = new Discord.MessageEmbed()
                                    .setTitle(`${prize}`)
                                    .setColor('ff0000')
                                    .setThumbnail(`${client.user.displayAvatarURL({IMAGE_SIZE: 100})}`)
                                    .setDescription(`Vencedor: **Ninguém entrou no sorteio**. \n Criado por: ${client.user}`)
                                    .setTimestamp()
                                    .setFooter('Terminou em')
                                    msg.edit(':tada: **Sorteio Encerrado** :tada:', winner_embed);
                                }
                                if (!msg.reactions.cache.get('🎉').users.cache.size < 1) {
                                    const winner_embed = new Discord.MessageEmbed()
                                    .setTitle(`${prize}`)
                                    .setColor('ff0000')
                                    .setThumbnail(`${winner.displayAvatarURL({IMAGE_SIZE: 100})}`)
                                    .setDescription(`Vencedor:${winner}\nCriado por: ${client.user}`)
                                    .setTimestamp()
                                    .setFooter('Terminou em')
                                    msg.edit(':tada: **Sorteio Encerrado** :tada:', winner_embed);
                                }
                            }, 1000);
                        }, actual_duration_hours);
                    }
                }
            }
        }
        giveaway();
    }
}
