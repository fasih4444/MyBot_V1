/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const HeartBot = require('drkbot-npm')
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''

const Language = require('../language');
const Lang = Language.getString('ttp');
const MLang = Language.getString('messages');
/*
if (Config.LANG == 'ES') desc_msg = 'Herramientas de creación de textos con acceso ilimitado.'
if (Config.LANG == 'EN') desc_msg = 'Textmaker tools with unlimited access.'
*/
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'textdg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/dragon-fire-text-effect-111.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'textchr ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/glossy-chrome-text-effect-online-424.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'textglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'texthack ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'textviettel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/logo-viettel-156.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'textgraffiti ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'textlogteam ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/create-football-team-logo-online-free-671.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'texthollywood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/print-name-on-hollywood-walk-of-fame-star-451.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'textlogmtl ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/metal-mascots-logo-maker-486.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'texttv ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-vintage-television-online-670.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'textboom ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.ephoto(match[1], 'https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
