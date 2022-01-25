/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('simi');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'bot ?(.*)', fromMe: wk, desc: Lang.DESC}, async (message, match) => {
    if (match[1] === '') await message.sendMessage(Lang.what, MessageType.text, {quoted: message.data})
    if (match[1].includes('xxx') || match[1].includes('porno')) return await message.reply(Lang.err_type, {quoted: message.data});
	
    axios.get(`https://api.simsimi.net/v2/?text=${match[1]}&lc=es&cf=true`).then(async (response) => {
        try {
            const { text } = response.data.messages[0]
            if (text ==='Roberto' || text === 'maite' || text === 'Luis Mario.' || text === 'Ricardo milos\n') {
                await message.client.sendMessage(message.jid, '🤖 ' + '```mi nombre es DrkBot```', MessageType.text, {quoted: message.data});
            } else {
                console.log('🤖 ' + text)
                await message.client.sendMessage(message.jid, '🤖 ' + '```' + text + '```', MessageType.text, {quoted: message.data});
            }
        } catch {
            await message.client.sendMessage(message.jid, Lang.iErr, MessageType.text);
  	}
    })
        
})
