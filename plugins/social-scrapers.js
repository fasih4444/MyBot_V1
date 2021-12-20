/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const { igDownloader, igstalk } = require('./datos.js')
const dbot = require('dbot-api');
const axios = require('axios');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('instagram');
const TLang = Language.getString('tiktok');
const KLang = Language.getString('keys');
const MLang = Language.getString('messages');
const iLoad = "🤖 Un momento, estoy buscando..."

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBox.addCommand({ pattern: 'insta ?(.*)', fromMe: wk, desc: Lang.DESC}, async (message, match) => {
    if (!match[1]) return await message.sendMessage(errorMessage(Lang.need))
    await message.sendMessage(infoMessage(Lang.loading))

    res = await igstalk(match[1])
    ytm = res
    const profileBuffer = await axios.get(`${ytm.profilePicHD}`, {responseType: 'arraybuffer'})
    const msg = `*Nombre:* ${ytm.fullName}\n*Usuario:* ${ytm.username}\n*Seguidores:* ${ytm.followers}\n*Siguiendo:* ${ytm.following}`
    await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: msg, quoted: message.data })
});

DrkBox.addCommand({pattern: 'igdl ?(.*)', fromMe: wk, desc: "Descarga de Instagram"}, async (message, match) => {
  try{
    if (!match[1]) return await message.sendMessage(infoMessage("🤖 Necesito un link!"));
    await message.sendMessage(infoMessage(iLoad))

    res = await igDownloader(match[1])
    ytm = res.result
    const profileBuffer = await axios.get(`${ytm.link}`, {responseType: 'arraybuffer'})
    const msg = `${ytm.link}`
     if (msg.includes('.mp4')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: `${MLang.by}`, quoted: message.data })}
     if (msg.includes('.jpg')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: `${MLang.by}`, quoted: message.data })}
  } catch {
     await message.sendMessage(errorMessage(Lang.iErr))
  }
});
