/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')

let wk = Config.WORKTYPE == 'public' ? false : true

/*################# MENSAJES #################*/
const comands = '┏━━━━━━━━━━━━━━━━━━━\n┃〘 *PRUEBA* 〙\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━'

const dapdate = '┏━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┣━━━━━━━━━━\n┠ NUEVA ACTUALIZACIÓN\n┠⊷️ *Version:*  ```'+Config.VERSION+'```\n┠⊷️ *Prefix:*  『/』\n┗━━━━━━━━━━\n┃\n┠⊷️ *CAMBIOS*\n┏━━━━━━━━━━━━\n  */qr*\nObten un codigo QR de algún texto o enlace enviado.\n\n*/apkmod*\nActualización del menú de aplicaciones.\n\n*/vip*\nYa los admin de grupos pueden usar los comandos vip por medio del *BOT*, para eso *DrkBot* necesita ser admin de ese grupo.\n┗━━━━━━━━━━━━'
/*################# FIN #################*/

/*################# VCard #################*/
const vCard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ian\n'
            + 'ORG:DrkBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=573508770421:+57 350 877 0421\n'
            + 'END:VCARD'
/*################# FIN #################*/

/*################# CHAT #################*/
DrkBox.addCommand({on: 'text', fromMe: wk}, (async (message, match) => {
	if (message.message.includes('dbot1')) {
		let buttons = [
		  {buttonId: 'id1', buttonText: {displayText: 'OWNER'}, type: 1},
		  {buttonId: 'id2', buttonText: {displayText: 'UPDATE'}, type: 1}
		]
		let buttonMessage = {
		  contentText: comands,
		  footerText: 'DrkBot',
		  buttons: buttons,
		  headerType: 1
		}
		await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
	} else if (message.message.includes('OWNER')) {
		await message.client.sendMessage(message.jid, {displayname: "Ian", vcard: vCard}, MessageType.contact);
	}
	else if (message.client.includes('UPDATE')) {
		await message.client.sendMessage(message.jid, dapdate, MessageType.text);
	} else if (message.message.includes('dbot1')) {
		const rows = [
		 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
		 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
		]

		const sections = [{title: "Section 1", rows: rows}]

		const button = {
		 buttonText: 'Click Me!',
		 description: "Hello it's list message",
	 	 sections: sections,
	 	 listType: 1
		}

		await message.client.sendMessage(message.jid, button, MessageType.listMessage)
	}
}));
/*################# FIN #################*/
