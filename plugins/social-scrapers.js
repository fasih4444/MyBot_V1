/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs');

const dbot = require('dbot-api');

const Language = require('../language');
const Lang = Language.getString('instagram');
const TLang = Language.getString('tiktok');
const KLang = Language.getString('keys');
const MLang = Language.getString('messages');

let wk = Config.WORKTYPE == 'public' ? false : true
    
DrkBox.addCommand({ pattern: 'insta ?(.*)', fromMe: wk, desc: Lang.DESC}, async (message, match) => {
    const userName = match[1]
    if (userName === '') return await message.sendMessage(errorMessage(Lang.need))
    await message.sendMessage(infoMessage(Lang.loading))
    await axios.get(`https://api.zeks.xyz/api/igstalk?apikey=${KLang.KZ}&username=${userName}`).then(async (response) => {
        const { username, fullname, follower, following, profile_pic } = response.data
        const instascrap = await axios.get(profile_pic, { responseType: 'arraybuffer' })
        const msg = `*Nombre:* ${fullname}\n*Usuario:* ${username}\n*Seguidores:* ${follower}\n*Siguiendo:* ${following}`
        await message.sendMessage(Buffer.from(instascrap.data), MessageType.image, { caption: msg })
    }).catch(async (err) => {
        await message.sendMessage(errorMessage(Lang.iErr))
    })
});

DrkBox.addCommand({ pattern: 'twt ?(.*)', fromMe: wk, dontAddCommandList: true, desc: "Descargas de twitter" }, async (message, match) => {
    const twtLink = match[1]
    if (!twtLink) return await message.sendMessage(errorMessage("🤖 Necesito un link!"))
    await message.sendMessage(infoMessage("🤖 Haciendo Busqueda"))

    await axios.get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${twtLink}`).then(async (response) => {
        const {format, result,} = response.data
        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})
        const msg = `${format}`
    if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {caption: msg,})}
    if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {caption: msg,})}

    }).catch (async (err) => {
     await message.sendMessage(errorMessage("🤖 Parece que hay un error!0" ))
    });
});

DrkBox.addCommand({pattern: 'igdown ?(.*)', fromMe: wk}, (async (message, match) => {
    var igdesc = await dbot.igdl(match[1])
    var buffer_data = await axios.get(igdesc.url, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
