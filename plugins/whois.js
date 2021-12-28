/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const axios = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const Config = require('../config');
const Language = require('../language'); 
const Lang = Language.getString('whois'); // Language Support

let wk = Config.WORKTYPE == 'public' ? false : true

// wa.me
const WAME = "```Enlace de chat de``` @{}:\nhttps://wa.me/{}"
const NEED_UWONG = "*¡Menciona a un usuario!*"
// end wa.me

var ADMİN_USER = ''
var USER_USER = ''
var CO_USER = ''
var AR_USER = ''
var BO_USER = ''
var CL_USER = ''
var EC_USER = ''
var MX_USER = ''
var PE_USER = ''
var PY_USER = ''
var UY_USER = ''
var ES_USER = ''
var USA_USER = ''
var OTHER = ''

if (Config.LANG == 'ES') ADMİN_USER = '*Recuento de administradores:* ', USER_USER = '*Recuento de miembros:* ', CO_USER = '*Recuento de miembros de Colombia:*', AR_USER = '*Recuento de miembros de Argentina:*', BO_USER = '*Recuento de miembros de Bolivia:*', CL_USER = '*Recuento de miembros de Chile:*', EC_USER = '*Recuento de miembros de Ecuador:*', MX_USER = '*Recuento de miembros de México:*', PE_USER = '*Recuento de miembros de Perú:*', PY_USER = '*Recuento de miembros de Paraguay:*', UY_USER = '*Recuento de miembros de Uruguay:*', ES_USER = '*Recuento de miembros de España:*', USA_USER = '*Recuento de miembros de USA:*', OTHER = '*Recuento de miembros de otros paises:* '
if (Config.LANG == 'EN') ADMİN_USER = '*Admin Count:*', USER_USER = '*Member Count:*', TR_USER = '*Turkish Member Count:*', Hİ_USER = '*Indian Member Count:*', AZ_USER = '*Azerbayjan Member Count:*', SRİ_USER = '*Sri Lanka Member Count:*', RU_USER = '*Russian Member Count:*', USA_USER = '*USA Member Count:*', OTHER = '*Other Member Count:*'

    DrkBox.addCommand({ pattern: 'infogroup$', fromMe: wk, desc: Lang.PL_DESC }, async (message, match) => {
        if (message.jid.includes('-')) {
            var json = await message.client.groupMetadataMinimal(message.jid) 
            var code = await message.client.groupInviteCode(message.jid)
            var dtsjson = await message.client.groupMetadata(message.jid) 
            var jids = [];
            mesaj = '';
            var users1 = [];
            dtsjson['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = jids.length + '\n'
            var user_count = users1.length + '\n'
            var co_user = [];
            var ar_user = [];
            var bo_user = [];
            var cl_user = [];
            var ec_user = [];
            var mx_user = [];
            var pe_user = [];
            var py_user = [];
            var uy_user = [];
            var es_user = [];
            var usa_user = [];
            var other_user = [];
            dtsjson['participants'].map(async (reg) => {
                if (reg.jid.startsWith('57')) { co_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('54')) { ar_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('591')) { bo_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('56')) { cl_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('593')) { ec_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('52')) { mx_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('51')) { pe_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('595')) { py_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('598')) { uy_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('34')) { es_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
                if (reg.jid.startsWith('1')) { usa_user.push(reg.id.replace('c.us', 's.whatsapp.net')); } 
            });
            var cous = ' ' + co_user.length + '\n'
            var arus = ' ' + ar_user.length + '\n'
            var bous = ' ' + bo_user.length + '\n'
            var clus = ' ' + cl_user.length + '\n'
            var ecus = ' ' + ec_user.length + '\n'
            var mxus = ' ' + mx_user.length + '\n'
            var peus = ' ' + pe_user.length + '\n'
            var pyus = ' ' + py_user.length + '\n'
            var uyus = ' ' + uy_user.length + '\n'
            var esus = ' ' + es_user.length + '\n'
            var usaus = ' ' + usa_user.length + '\n'
            var oth = ' ' + user_count - cous - arus - bous - clus - ecus - mxus - peus - pyus - uyus - esus - usaus
            const user_count_msg = ADMİN_USER + admin_count + USER_USER + user_count + CO_USER + cous + AR_USER + arus + BO_USER + bous + CL_USER + clus + EC_USER + ecus + MX_USER + mxus + PE_USER + peus + PY_USER + pyus + UY_USER + uyus + ES_USER + esus + USA_USER + usaus + OTHER + oth + '\n'
            const msg = `*ID del grupo:* ${json.id}\n` + Lang.SUB + `${dtsjson.subject}\n` + Lang.OWN + `${json.owner}\n` + Lang.COD + `${code}\n\n` + user_count_msg + `\n\n` + Lang.DES + `\n${dtsjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid) 
            const resim = await axios.get(ppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resim.data), 
                MessageType.image, 
                {caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.JİD + `${usexists.jid} \n` + Lang.ST + `${status.status}`
            const resimnw = await axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });

    DrkBox.addCommand({pattern: 'wame ?(.*)', fromMe: wk, onlyGroup: true}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                }); 
            });
        } else {
            await message.client.sendMessage(message.jid, NEED_UWONG, MessageType.text);
        }
    }));
