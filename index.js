const discord = require('discord.js');

const maxim  = new discord.Client();

maxim.login('MzUwOTgyODM1OTk1MTQ4Mjg4.DIL91Q.ZGQ3Uwgjtay-QEJ4NbrKFdsHIB8');

maxim.on('message',(message) => {
    if(message.content === 'MaximBot!')
        message.reply("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s");
});