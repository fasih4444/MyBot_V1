/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const handler = Config.HANDLERS
const prefix = handler[2]
const version = Config.VERSION
const wk = Config.WORKTYPE == 'public' ? false : true
const axios = require('axios');

const GMTh = new Date().getHours()
const GMTm = new Date().getMinutes()

/*Tarjeta Owner*/
const vCard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ian\n'
            + 'ORG:DrkBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=573508770421:+57 350 877 0421\n'
            + 'END:VCARD'


DrkBox.addCommand({pattern: 'alive', fromMe: wk}, async (message, match) => {
    var image = await axios.get('https://raw.githubusercontent.com/DrkBotBase/MyBot_V1/master/media/gif/PicsArt_07-18-06.46.26.jpg', {responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n*/menu* Muestra comandos del BOT'})
});

DrkBox.addCommand({pattern: 'owner', fromMe: wk}, async (message, match) => {
    await message.sendMessage({displayname: "Ian", vcard: vCard}, MessageType.contact);
});

DrkBox.addCommand({pattern: 'menu', fromMe: wk}, async (message, match) => {

if(GMTh < 5){
  var saludo = 'Es muy temprano, duerme un poco mas'
}else if(GMTh < 12){
  var saludo = 'Buenos Dias'
}else if(GMTh < 18){
  var saludo = 'Buenas Tardes'
}else if(GMTh < 23 && GMTm < 59){
  var saludo = 'Buenas Noches'
}

var id = message.jid
var user = message.client.user.name

const p = '╠❖'

await message.client.sendMessage(id, `Hola
*${user}*
*${saludo}*

╔══✪〘 *MENU* 〙✪══
${p} ${prefix}alive
${p} ${prefix}menu
${p} ${prefix}owner
${p} ${prefix}donar
${p} ${prefix}info
${p} ${prefix}nuevo
${p} ${prefix}bot
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
${p} ${prefix}img
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
${p} ${prefix}ttp
${p} ${prefix}attp
${p} ${prefix}animesay
${p} ${prefix}changesay
${p} ${prefix}trumpsay
╠══✪〘 *TEXTMAKER* 〙✪══
${p} ${prefix}greenhorror text
${p} ${prefix}thunder text
${p} ${prefix}athunder text
${p} ${prefix}greenstone text
${p} ${prefix}breakwall text
${p} ${prefix}halloweenfire text
${p} ${prefix}jokerlogo text
${p} ${prefix}harrypotter text
${p} ${prefix}scifi text
${p} ${prefix}purpleglass text
${p} ${prefix}dropwater text
${p} ${prefix}captainamerica text
${p} ${prefix}sketch text
${p} ${prefix}bagdrug text
${p} ${prefix}horrorblood text
${p} ${prefix}toxic text
${p} ${prefix}skeleton text
${p} ${prefix}bloodglass text
${p} ${prefix}horrorgift text
${p} ${prefix}wolflogo text1,text2
${p} ${prefix}phublogo text1,text2
${p} ${prefix}halloween text1,text2
${p} ${prefix}metalgalaxy text1,text2
${p} ${prefix}metalsilver text1,text2
${p} ${prefix}metalgold text1,text2
${p} ${prefix}logocapamerica text1,text2
${p} ${prefix}graffiti text1,text2
${p} ${prefix}agraffiti text1,text2
${p} ${prefix}logoavengers text1,text2
${p} ${prefix}steel3d text1,text2
${p} ${prefix}glitch text1,text2
╚══✪〘 *DrkBot* 〙✪══`)
})
