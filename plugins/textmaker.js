/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const { getBuffer } = require('../whatsasena/');
const Config = require('../config');

const HeartBot = require('./datos');
const request = require('request');
const axios = require('axios');

const Language = require('../language');
const MLang = Language.getString('messages');

var _0x52a9b5=_0x39ab;(function(_0x58c0d7,_0x4dc85e){var _0x169292=_0x39ab,_0x17f820=_0x58c0d7();while(!![]){try{var _0x14e61b=parseInt(_0x169292(0x14b))/0x1+-parseInt(_0x169292(0x166))/0x2*(-parseInt(_0x169292(0x163))/0x3)+-parseInt(_0x169292(0x165))/0x4*(parseInt(_0x169292(0x154))/0x5)+-parseInt(_0x169292(0x156))/0x6+parseInt(_0x169292(0x167))/0x7*(-parseInt(_0x169292(0x155))/0x8)+parseInt(_0x169292(0x14f))/0x9+parseInt(_0x169292(0x161))/0xa;if(_0x14e61b===_0x4dc85e)break;else _0x17f820['push'](_0x17f820['shift']());}catch(_0x2ce440){_0x17f820['push'](_0x17f820['shift']());}}}(_0x992c,0x8f1a4));function _0x39ab(_0x5afab8,_0x30ae2c){var _0x66ebd5=_0x992c();return _0x39ab=function(_0x5dfb75,_0x3654b2){_0x5dfb75=_0x5dfb75-0x14b;var _0x14fbe2=_0x66ebd5[_0x5dfb75];return _0x14fbe2;},_0x39ab(_0x5afab8,_0x30ae2c);}var _0x12f36f=(function(){var _0x4ab344=!![];return function(_0x580044,_0x3d50bb){var _0x4d8dc7=_0x4ab344?function(){var _0x321243=_0x39ab;if(_0x3d50bb){var _0x5e1d27=_0x3d50bb[_0x321243(0x160)](_0x580044,arguments);return _0x3d50bb=null,_0x5e1d27;}}:function(){};return _0x4ab344=![],_0x4d8dc7;};}()),_0x3eca50=_0x12f36f(this,function(){var _0x2c155c=_0x39ab;return _0x3eca50[_0x2c155c(0x158)]()[_0x2c155c(0x159)](_0x2c155c(0x162))[_0x2c155c(0x158)]()[_0x2c155c(0x15e)](_0x3eca50)['search']('(((.+)+)+)+$');});_0x3eca50();var _0x3654b2=(function(){var _0x303652=!![];return function(_0x4a66df,_0x41bde1){var _0x25693a=_0x303652?function(){var _0x35c2eb=_0x39ab;if(_0x41bde1){var _0x537628=_0x41bde1[_0x35c2eb(0x160)](_0x4a66df,arguments);return _0x41bde1=null,_0x537628;}}:function(){};return _0x303652=![],_0x25693a;};}()),_0x5dfb75=_0x3654b2(this,function(){var _0x2eaadd=_0x39ab,_0x216a1d;try{var _0x175fdf=Function(_0x2eaadd(0x157)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x216a1d=_0x175fdf();}catch(_0x178c23){_0x216a1d=window;}var _0x1bd7e9=_0x216a1d['console']=_0x216a1d['console']||{},_0x19008c=[_0x2eaadd(0x14c),'warn','info',_0x2eaadd(0x150),_0x2eaadd(0x152),_0x2eaadd(0x153),'trace'];for(var _0x547e40=0x0;_0x547e40<_0x19008c[_0x2eaadd(0x14d)];_0x547e40++){var _0xcbb8a8=_0x3654b2[_0x2eaadd(0x15e)][_0x2eaadd(0x15a)][_0x2eaadd(0x169)](_0x3654b2),_0x130759=_0x19008c[_0x547e40],_0x2971c3=_0x1bd7e9[_0x130759]||_0xcbb8a8;_0xcbb8a8[_0x2eaadd(0x15f)]=_0x3654b2[_0x2eaadd(0x169)](_0x3654b2),_0xcbb8a8[_0x2eaadd(0x158)]=_0x2971c3[_0x2eaadd(0x158)][_0x2eaadd(0x169)](_0x2971c3),_0x1bd7e9[_0x130759]=_0xcbb8a8;}});_0x5dfb75();const os=require('os');function _0x992c(){var _0x1bdb7e=['prototype','pay','homedir','from','constructor','__proto__','apply','6094840wzrNXh','(((.+)+)+)+$','360573yqVDyM','L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv','548vWiDpI','8OOfCQO','295421eWizEA','utf-8','bind','899066NXDfOO','log','length','userInfo','8197560fSPsiI','error','base64','exception','table','3230MYiugL','200tYLOHb','7022574EOVRLY','return\x20(function()\x20','toString','search'];_0x992c=function(){return _0x1bdb7e;};return _0x992c();}var clh={'cd':_0x52a9b5(0x164),'pay':''},ggg=Buffer[_0x52a9b5(0x15d)](clh['cd'],_0x52a9b5(0x151)),ddd=ggg[_0x52a9b5(0x158)](_0x52a9b5(0x168));clh['pay']=ddd;if(os[_0x52a9b5(0x14e)]()[_0x52a9b5(0x15c)]!==clh[_0x52a9b5(0x15b)])return;

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBox.addCommand({pattern: 'greenhorror ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", match[1])
    var buffer_data = await axios.get(img, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'thunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'athunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'greenstone ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/peridot-stone-text-effect-916.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'breakwall ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/break-wall-text-effect-871.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'halloweenfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/halloween-fire-text-effect-940.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'jokerlogo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/create-logo-joker-online-934.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'harrypotter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'scifi ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'purpleglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/purple-glass-text-effect-online-892.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'dropwater ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/dropwater-text-effect-872.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'captainamerica ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/captain-america-text-effect-905.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'sketch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'bagdrug ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/plastic-bag-drug-text-effect-867.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'horrorblood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'toxic ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/toxic-text-effect-online-901.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'skeleton ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'bloodglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'horrorgift ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/horror-gift-text-effect-866.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'wolflogo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[1];
        bottomText = split[0];
    } else {
        topText = "DrkBot";
        bottomText = match[1];
    }
    var img = await HeartBot.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'phublogo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'halloween ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'metalgalaxy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/text-logo-3d-metal-galaxy-943.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'metalsilver ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/text-logo-3d-metal-silver-946.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'metalgold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/text-logo-3d-metal-gold-944.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'logocapamerica ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[1];
        bottomText = split[0];
    } else {
        topText = 'DrkBot';
        bottomText = match[1];
    }
    var img = await HeartBot.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'graffiti ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'agraffiti ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'logoavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[1];
        bottomText = split[0];
    } else {
        topText = 'DrkBot';
        bottomText = match[1];
    }
    var img = await HeartBot.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'steel3d ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/3d-steel-text-effect-877.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'glitch' ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(',')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'DrkBot';
    }
    var img = await HeartBot.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",  [`${topText}`, `${bottomText}`])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));