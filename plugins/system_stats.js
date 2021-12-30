/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const prefix = Config.HANDLERS
const version = Config.VERSION
const wk = Config.WORKTYPE == 'public' ? false : true

const axios = require('axios');
const moment = require('moment-timezone')
const time = moment().tz('America/Bogota').format('HH:mm:ss')


/*Tarjeta Owner*/
const vCard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ian\n'
            + 'ORG:DrkBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=573508770421:+57 350 877 0421\n'
            + 'END:VCARD'


DrkBox.addCommand({pattern: 'alive', fromMe: wk, desc: Lang.ALIVE_DESC}, async (message, match) => {
	var image = await axios.get('https://raw.githubusercontent.com/DrkBotBase/WhatsAsenaDuplicated/master/media/gif/PicsArt_07-18-06.46.26.jpg', {responseType: 'arraybuffer'})
	await message.sendMessage (Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n*/menu* Muestra comandos del BOT\n⚠️\n*/nuevo* Mustra actualizaciones'})
});

DrkBox.addCommand({pattern: 'owner', fromMe: wk}, async (message, match) => {
	await message.sendMessage({displayname: "Ian", vcard: vCard}, MessageType.contact);
});

DrkBox.addCommand({pattern: 'nuevo', fromMe: wk}, async (message, match) => {
	await message.sendMessage(`╔══════════
║〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙
╠══════════
║ NUEVA ACTUALIZACIÓN
║⊷️ *Version:*  ${version}
║⊷️ *Prefix:*  『${prefix}』
╠══════════
║
║⊷️ *CAMBIOS*
╠══════════
  */send*
Comando de mensaje anonimo.
⚠️ Usar solo en chat privado.

  */img*
Comando actualizado.

  */wallpaper*
Comando actualizado.
╚══════════`);
});

DrkBox.addCommand({pattern: 'menu', fromMe: wk}, async (message, match) => {

if(time <= "05:00:00"){var saludo = 'Es muy temprano, duerme un poco mas'}
else if(time <= "12:00:00"){var saludo = 'Buenos Dias'}
else if(time <= "19:00:00"){var saludo = 'Buenos Tardes'}
else if(time <= "23:59:59"){var saludo = 'Buenos Noches'}

const p = '╠❖'

await message.sendMessage(`Hola ${saludo}

╔══✪〘 *MENU* 〙✪══
${p} ${prefix}alive
${p} ${prefix}menu
${p} ${prefix}owner
${p} ${prefix}donar
${p} ${prefix}info
${p} ${prefix}nuevo
╠══✪〘 *GRUPOS* 〙✪══
${p} ${prefix}promote
${p} ${prefix}demote
${p} ${prefix}add
${p} ${prefix}ban
${p} ${prefix}welcome
${p} ${prefix}goodbye
${p} ${prefix}groupinfo
${p} ${prefix}mute
${p} ${prefix}unmute
${p} ${prefix}invite
${p} ${prefix}block
${p} ${prefix}unblock
${p} ${prefix}rename
${p} ${prefix}revoke
${p} ${prefix}tagall
${p} ${prefix}tagadmin
${p} ${prefix}wame
╠══✪〘 *UTILIDADES* 〙✪══
${p} ${prefix}yt
${p} ${prefix}song
${p} ${prefix}video
${p} ${prefix}igdl
${p} ${prefix}covid
${p} ${prefix}price
${p} ${prefix}cambio
${p} ${prefix}qr
${p} ${prefix}calc
${p} ${prefix}sfw
${p} ${prefix}nsfw
${p} ${prefix}ocr
${p} ${prefix}ip
${p} ${prefix}logo
${p} ${prefix}insult
${p} ${prefix}bin
${p} ${prefix}removebg
${p} ${prefix}scan
${p} ${prefix}trt
${p} ${prefix}detectlang
${p} ${prefix}tts
${p} ${prefix}wiki
${p} ${prefix}lyric
${p} ${prefix}ss
${p} ${prefix}spdf
${p} ${prefix}insta
${p} ${prefix}sticker
${p} ${prefix}voicy
${p} ${prefix}unvoice
${p} ${prefix}wallpaper
${p} ${prefix}weather
${p} ${prefix}short
╠══✪〘 *JUEGOS* 〙✪══
${p} ${prefix}slot
╠══✪〘 *IMAGEMAKER* 〙✪══
${p} ${prefix}attp
${p} ${prefix}ttp
${p} ${prefix}animesay
${p} ${prefix}changesay
${p} ${prefix}trumpsay
╚══✪〘 *DrkBot* 〙✪══`)
});
