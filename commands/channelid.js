// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');
const fs  = require('fs');

module.exports = {
    name: 'channelid',
    execute(client, message){
        if (!message.guild) return;
        async function channelid() {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Você não tem permissão suficiente para executar este comando.');
            if (message.content !== `${prefix}channelid`) {
                var channelidstr = message.content.split(' ')[1];
                let data = channelidstr;
                fs.writeFileSync('channel.txt', data);
                return client.channels.cache.get(channelidstr).send('Canal selecionado.');
            }
        }
        channelid();
    }
}