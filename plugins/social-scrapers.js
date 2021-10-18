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

const Language = require('../language');
const Lang = Language.getString('instagram');
const TLang = Language.getString('tiktok');
const KLang = Language.getString('keys');
const MLang = Language.getString('messages');
const iLoad = "🤖 Un momento, estoy buscando..."

const instagram = async (url, key) => {
    const _0x4a94a8 = _0x185a; function _0x3f3b() { const _0x37037c = ['drk', 'htt', 'ps:', 'nti', 'ouy', 'aw.', 'kit', '/in', 'sta', '?ur', 'dat', 'get', 'arr']; _0x3f3b = function () { return _0x37037c; }; return _0x3f3b(); } function _0x185a(_0x38e93d, _0x3f3b83) { const _0x185a5f = _0x3f3b(); _0x185a = function (_0x829ec5, _0x405d60) { _0x829ec5 = _0x829ec5 - 0xe5; let _0x20f676 = _0x185a5f[_0x829ec5]; return _0x20f676; }; return _0x185a(_0x38e93d, _0x3f3b83); } if (key != _0x4a94a8(0xe5) + 'bot') throw new Error('Drk' + 'bot'); const response = await axios(_0x4a94a8(0xe6) + _0x4a94a8(0xe7) + '//u' + _0x4a94a8(0xe8) + 'tle' + 'd-1' + _0x4a94a8(0xe9) + 'r1r' + 'szh' + _0x4a94a8(0xea) + 'run' + _0x4a94a8(0xeb) + '.sh' + _0x4a94a8(0xec) + _0x4a94a8(0xed) + _0x4a94a8(0xee) + 'l=' + url); const { status, result } = response[_0x4a94a8(0xef) + 'a']; if (!status) return { 'status': status }; const { type, data } = result[0x0]; const res = await axios[_0x4a94a8(0xf0)](data, { 'responseType': _0x4a94a8(0xf1) + 'ayb' + 'uff' + 'er' }); return { 'type': type, 'data': res[_0x4a94a8(0xef) + 'a'], 'status': status };
}

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
    await message.sendMessage(infoMessage(i.Load))

    await axios.get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${twtLink}`).then(async (response) => {
        const {format, result,} = response.data
        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})
        const msg = `${format}`
    if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: `${MLang.by}`, quoted: message.data })}
    if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: `${MLang.by}`, quoted: message.data })}

    }).catch (async (err) => {
     await message.sendMessage(errorMessage(Lang.iErr))
    });
});

DrkBox.addCommand({pattern: 'igd ?(.*)', fromMe: wk}, async (message, match) => {
    const { status, type, data } = await instagram(match[1], 'drkbot')
    if (!status) return await message.sendMessage(Lang.iErr)
    await message.client.sendMessage(message.jid, i.Load, MessageType.text, { quoted: message.data });
    if (type === 'image') return await message.sendMessage(data, MessageType.image, { caption: `${MLang.by}`, quoted: message.data })
    if (type === 'video') return await message.sendMessage(data, MessageType.video, { caption: `${MLang.by}`, quoted: message.data })
});
