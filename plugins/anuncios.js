/* Copyright (C) 2022
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const { getBuffer } = require('../whatsasena/');
const Config = require('../config');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'dif ?(.*)', fromMe: wk}, (async (message, match) => {
	const msg = match[1]
	const getAll = await message.client.chats.all()
	getAll.forEach(async chats => {
    	if(chats.jid.endsWith('@s.whatsapp.net')) {
    		await message.client.sendMessage(message.jid, msg, MessageType.text)
    	} else {
    		await message.client.sendMessage(message.jid, msg, MessageType.text)
    	}
	})
}));
