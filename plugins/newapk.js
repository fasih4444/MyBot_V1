/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('apk');
const MLang = Language.getString('messages');


if (Config.WORKTYPE == 'private') {}

else if (Config.WORKTYPE == 'public') {

/* ############### MENU APK ############### */
DrkBox.addCommand({pattern: "apkmod ?(.*)", fromMe: true}, (async (message, match) => {
      if (match[1] === "") {
         try{
            await message.reply(`${MLang.prefix}apkmod games\n${MLang.prefix}apkmod tools`, {quoted: message.data});
         }catch (err) {
            await message.reply(`Error:\n${Lang.err}`, MessageType.text)
          }
      }
      else if (match[1] === "games") {
         try{
await message.sendMessage(`
┏━━━━━━━━━━━━━━━━━━━
┃〘 ☣️ *JUEGOS MOD* ☣️ 〙
┗━━━━━━━━━━━━━━━━━━━
│
├❖ 1v1 Lol Mod
├⊷️ ${MLang.prefix}
├❖ Among Us Mod
├⊷️ ${MLang.prefix}
├❖ Archero
├⊷️ ${MLang.prefix}
├❖ Battle Ops
├⊷️ ${MLang.prefix}
├❖ Boom Karts
├⊷️ ${MLang.prefix}
├❖ CSR Racing 2
├⊷️ ${MLang.prefix}
├❖ Death Target
├⊷️ ${MLang.prefix}
├❖ Dust Settle
├⊷️ ${MLang.prefix}
├❖ Harry Poter (puzzles)
├⊷️ ${MLang.prefix}
├❖ Jetpack Joyride Mod
├⊷️ ${MLang.prefix}
├❖ Metal SLug (todos)
├⊷️ ${MLang.prefix}
├❖ Minecraft Mod
├⊷️ ${MLang.prefix}
├❖ PVZ Mod
├⊷️ ${MLang.prefix}
├❖ Sky Fighter
├⊷️ ${MLang.prefix}
├❖ Sniper 3D Mod
├⊷️ ${MLang.prefix}
├❖ State Of Survival
├⊷️ ${MLang.prefix}
├❖ Subway Surfer Mod
├⊷️ ${MLang.prefix}
├❖ WWE Undefeated
└⊷️ ${MLang.prefix}
┏━━━━━━━━━━━━━━━━━━━
  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉
┗━━━━━━━━━━━━━━━━━━━`);
         }catch (err) {
            await message.reply(`Error:\n${Lang.err}`, MessageType.text)
          }
      }
      else if (match[1] === "tools") {
         try{
await message.sendMessage(`
┏━━━━━━━━━━━━━━━━━━━
┃〘 ☣️ *HERRAMIENTAS* ☣️ 〙
┗━━━━━━━━━━━━━━━━━━━
◪ *LAUNCHER, ICON PACK*
│
├❖ Apex Launcher
├⊷️ ${MLang.prefix}
├❖ Blue IP (Icon Pack)
├⊷️ ${MLang.prefix}
├❖ Nova Launcher
├⊷️ ${MLang.prefix}
├❖ Rugos (Icon Pack)
└⊷ ${MLang.prefix}
◪ *EDICIÓN*
│
├❖ Canva Pro
├⊷️ ${MLang.prefix}
├❖ Kinemaster Mod
├⊷️ ${MLang.prefix}
├❖ LightRoom Mod
├⊷️ ${MLang.prefix}
├❖ Photo Editor
├⊷️ ${MLang.prefix}
├❖ Photoshop
├⊷️ ${MLang.prefix}
├❖ Pics Art Mod
├⊷️ ${MLang.prefix}
├❖ Retouch
├⊷️ ${MLang.prefix}
├❖ Snapseed
├⊷️ ${MLang.prefix}
├❖ Story Art
├⊷️ ${MLang.prefix}
├❖ VivaCut Mod
├⊷️ ${MLang.prefix}
├❖ VLC Player
└⊷ ${MLang.prefix}
◪ *HERRAMIENTAS*
│
├❖ Call Recorder Pro
├⊷️ ${MLang.prefix}
├❖ Down Acelerator Plus
├⊷️ ${MLang.prefix}
├❖ Drk-Calc (Calculator)
├⊷️ ${MLang.prefix}
├❖ Drk-Gen (CC-Gen)
├⊷️ ${MLang.prefix}
├❖ ES File
├⊷️ ${MLang.prefix}
├❖ Es File Mod
├⊷️ ${MLang.prefix}
├❖ Fing (Scaner Red)
├⊷️ ${MLang.prefix}
├❖ Grabador Pantalla Pro
├⊷️ ${MLang.prefix}
├❖ Photo Math Plus
├⊷️ ${MLang.prefix}
├❖ PowerAmp
├⊷️ ${MLang.prefix}
├❖ QR Creator
├⊷️ ${MLang.prefix}
├❖ RAR
├⊷️ ${MLang.prefix}
├❖ Shazam
├⊷️ ${MLang.prefix}
├❖ TeamViewer
├⊷️ ${MLang.prefix}
├❖ True Caller
├⊷️ ${MLang.prefix}
├❖ Vanced Manager
├⊷️ ${MLang.prefix}
├❖ WebVideoCaster Mod
├⊷️ ${MLang.prefix}
├❖ Whatsapp Mod
├⊷️ ${MLang.prefix}
├❖ Whatsapp Plus
├⊷️ ${MLang.prefix}
├❖ Whatsapp Tool
├⊷️ ${MLang.prefix}
├❖ WPS Office
├⊷️ ${MLang.prefix}
├❖ Xender
├⊷️ ${MLang.prefix}
├❖ Z-Camera
└⊷ ${MLang.prefix}
◪ *MULTIMEDIA*
│
├❖ Corner Kick (TV Pro)
├⊷️ ${MLang.prefix}
├❖ Deezer Mod
├⊷️ ${MLang.prefix}
├❖ eSound (Music Pro)
├⊷️ ${MLang.prefix}
├❖ Freezer (Music Down)
├⊷️ ${MLang.prefix}
├❖ Fun Player (TV Pro)
├⊷️ ${MLang.prefix}
├❖ Jet Audio
├⊷️ ${MLang.prefix}
├❖ Mx Player
├⊷️ ${MLang.prefix}
├❖ PlayHub+
├⊷️ ${MLang.prefix}
├❖ Radio Box Pro
├⊷️ ${MLang.prefix}
├❖ TikTok Mod
├⊷️ ${MLang.prefix}
├❖ TuneIn Mod
├⊷️ ${MLang.prefix}
├❖ YMusic
├⊷️ ${MLang.prefix}
├❖ Zedge Mod
└⊷ ${MLang.prefix}
◪ *VPN*
│
├❖ AppGuard (VPN)
├⊷️ ${MLang.prefix}
├❖ Hospot Shield
├⊷️ ${MLang.prefix}
├❖ Psiphon
└⊷ ${MLang.prefix}
┏━━━━━━━━━━━━━━━━━━━
  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉
┗━━━━━━━━━━━━━━━━━━━`);
         }catch (err) {
            await message.reply(`Error:\n${Lang.err}`, MessageType.text)
          }
      }
   }));
/* ############### FIN MENU APK ############### */

}
