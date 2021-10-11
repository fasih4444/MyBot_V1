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
