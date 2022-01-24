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
	const allChats = await message.client.chats.all()
	allChats.map(async uye => {
    	if(uye.jid.endsWith('@s.whatsapp.net')) {
    		await message.client.sendMessage(message.jid, msg, MessageType.text)
    	} else {
    		await message.client.sendMessage(message.jid, 'error', MessageType.text)
    	}
	})
}));

DrkBox.addCommand({pattern: 'adif ?(.*)', fromMe: wk}, (async (message, match) => {
	const msg = match[1]
	const chats = await message.client(messaje.jid)
	chats.map(async (uye) => {
    	if(uye.jid.endsWith('@s.whatsapp.net')) {
    		await message.client.sendMessage(message.jid, msg, MessageType.text)
    	} else {
    		await message.client.sendMessage(message.jid, 'error', MessageType.text)
    	}
	})
}));

DrkBox.addCommand({pattern: 'bdif ?(.*)', fromMe: wk}, (async (message, match) => {
	const msg = match[1]
	const chats = await message.client.all(messaje.jid)
	chats.map(async (uye) => {
    	if(uye.jid.endsWith('@s.whatsapp.net')) {
    		await message.client.sendMessage(message.jid, msg, MessageType.text)
    	} else {
    		await message.client.sendMessage(message.jid, 'error', MessageType.text)
    	}
	})
}));
