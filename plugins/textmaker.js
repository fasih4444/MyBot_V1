/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const drkApi = require('textmaker-thiccy');

const DrkBox = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''

const Language = require('../language');
const Lang = Language.getString('ttp');
const MLang = Language.getString('messages');

if (Config.LANG == 'ES') desc_msg = 'Herramientas de creación de textos con acceso ilimitado.'
if (Config.LANG == 'EN') desc_msg = 'Textmaker tools with unlimited access.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'infottp', fromMe: wk, desc: Lang.info_ttp}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *TTP COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ ➡️ /textdevil\n  Crear Logo Tema Devil.\n\n┠⊷️ ➡️ /textbear\n  Crear Logo Icono Oso.\n\n┠⊷️ ➡️ /textneon\n  Crear Logo Efecto Neon.\n\n┠⊷️ ➡️ /text2neon\n  Crear Logo Segundo Efecto Neon.\n\n┠⊷️ ➡️ /textlight\n  Crear Logo Tema Relámpago.\n\n┠⊷️ ➡️ /textjoker\n  Crear Logo Tema Joker.\n\n┠⊷️ ➡️ /textninja\n  Crear Logo Tema Ninja.\n\n┠⊷️ ➡️ /textglitter\n  Crear Logo Tema Brillantina.\n\n┠⊷️ ➡️ /textbokeh\n  Crear Logo Efecto Destello.\n\n┠⊷️ ➡️ /textwolf\n  Crear Logo Icono Lobo.\n\n┠⊷️ ➡️ /textmarvel\n  Crear Logo Marvel Blanco y Negro.\n\n┠⊷️ ➡️ /text2marvel\n  Crear Logo Marvel a Color.\n\n┠⊷️ ➡️ /textavengers\n  Crear Logo Avengers.\n\n┠⊷️ ➡️ /textglitch\n  Crear Logo Efecto Glitch.\n\n┠⊷️ ➡️ /textgraf\n  Crear Logo Tema Graffiti.\n\n┠⊷️ ➡️ /text2graf\n  Crear Logo Segundo Tema Graffiti.\n\n┠⊷️ ➡️ /textlion\n  Crear Logo Tema Leon.\n\n┠⊷️ ➡️ /text3neon\n  Crear Logo Tercer Efecto Neon.\n\n┠⊷️ ➡️ /textice\n  Crear Logo Tema Frio.\n\n┠⊷️ ➡️ /textspace\n  Crear Logo Tema Espacio.\n\n┠⊷️ ➡️ /textsmoke\n  Crear Logo Efecto Humo.\n\n┠⊷️ ➡️ /textglow\n  Crear Logo Tema Brillo.\n\n┠⊷️ ➡️ /textfire\n  Crear Logo Tema Llamas.\n\n┠⊷️ ➡️ /textharry\n  Crear Logo Harry Potter.\n\n┠⊷️ ➡️ /text4neon\n  Crear Logo Cuarto Efecto Neon.\n\n┠⊷️ ➡️ /textcemetery\n  Coloca Texto Puerta De Cementerio.\n\n┠⊷️ ➡️ /textcup\n  Coloca Texto En Una Taza.\n\n┏━━━━━━━━━━━━━━━━━━━\n  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
    }));

DrkBox.addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
 // var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    if (Config.LANG == 'ES') {
        t1 = 'Crear Logo Tema Devil.'
        t2 = 'Crear Logo Icono Oso.'
        t3 = 'Crear Logo Efecto Neon.'
        t4 = 'Crear Logo Segundo Efecto Neon.'
        t5 = 'Crear Logo Tema Relámpago.'
        t6 = 'Crear Logo Tema Joker.'
        t7 = 'Crear Logo Tema Ninja.'
        t8 = 'Crear Logo Tema Brillantina.'
        t9 = 'Crear Logo Efecto Destello.'
        t10 = 'Crear Logo Icono Lobo.'
        t11 = 'Crear Logo Marvel Blanco y Negro.'
        t12 = 'Crear Logo Marvel a Color.'
        t13 = 'Crear Logo Avengers.'
        t14 = 'Crear Logo Efecto Glitch.'
        t15 = 'Crear Logo Tema Graffiti.'
        t16 = 'Crear Logo Segundo Tema Graffiti.'
        t17 = 'Crear Logo Tema Leon.'
        t18 = 'Crear Logo Tercer Efecto Neon.'
        t19 = 'Crear Logo Tema Frio.'
        t20 = 'Crear Logo Tema Espacio.'
        t21 = 'Crear Logo Efecto Humo.'
    //  t22 = 'Crear Banner Naruto.'
        t23 = 'Crear Logo Tema Brillo.'
        t24 = 'Crear Logo Tema Llamas.'
        t25 = 'Crear Logo Harry Potter.'
        t26 = 'Crear Logo Cuarto Efecto Neon.'
        t27 = 'Coloca Texto Puerta De Cementerio.'
        t28 = 'Coloca Texto En Una Taza.'
    }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
     // t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t24 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t25 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t26 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t27 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t28 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'ES') {
        usage_cmd = '⌨️ *Ejemplo:* _'
        command_cmd = '💻 *Comando:* '
        desc_cmd = 'ℹ️ *Descripción:* _'
    } else { 
        usage_cmd = '*⌨️ Example:* _'
        command_cmd = '💻 *Command:* '
        desc_cmd = 'ℹ️ *Description:* _'
    }
    const msg = command_cmd + '```/textdevil``` \n' + t1 + '_\n' + usage_cmd + '/textdevil DrkBot\n\n' +
        command_cmd + '```/textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '/textbear DrkBot\n\n' +
        command_cmd + '```/textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '/textneon DrkBot\n\n' +
        command_cmd + '```/text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '/text2neon DrkBot\n\n' +
        command_cmd + '```/textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '/textlight DrkBot\n\n' +
        command_cmd + '```/textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '/textjoker DrkBot\n\n' +
        command_cmd + '```/textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '/textninja Desarrollador;DrkBot\n\n' +
        command_cmd + '```/textglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '/textglitter DrkBot\n\n' +
        command_cmd + '```/textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '/textbokeh DrkBot\n\n' +
        command_cmd + '```/textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '/textwolf Desarrollador;DrkBot\n\n' +
        command_cmd + '```/textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '/textmarvel Desarrollador;DrkBot\n\n' +
        command_cmd + '```/text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '/text2marvel Desarrollador;DrkBot\n\n' +
        command_cmd + '```/textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '/textavengers Desarrollador;DrkBot\n\n' +
        command_cmd + '```/textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '/textglitch Desarrollador;DrkBot' +
        command_cmd + '```/textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '/textgraf Desarrollador;DrkBot\n\n' +
        command_cmd + '```/text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '/text2graf Desarrollador;DrkBot\n\n' +
        command_cmd + '```/textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '/textlion Desarrollador;DrkBot\n\n' +
        command_cmd + '```/text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '/text3neon DrkBot\n\n' +
        command_cmd + '```/textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '/textice DrkBot\n\n' +
        command_cmd + '```/textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '/textspace Desarrollador;DrkBot\n\n' +
        command_cmd + '```/textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '/textsmoke DrkBot\n\n' +
        command_cmd + '```/textglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '/textglow DrkBot\n\n' +
        command_cmd + '```/textfire``` \n' + desc_cmd + t24 + '_\n' + usage_cmd + '/textfire DrkBot\n\n' +
        command_cmd + '```/textharry``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '/textharry DrkBot\n\n' +
        command_cmd + '```/text4neon``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '/text4neon DrkBot\n\n' +
        command_cmd + '```/textcemetery``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '/textcemetery DrkBot\n\n' +
        command_cmd + '```/textcup``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '/textcup DrkBot\n\n' +
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
DrkBox.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    drkApi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wolf.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon2.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/li.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/joker.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    drkApi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ninja.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bkh.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    drkApi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/marvel.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    drkApi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mar2.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    drkApi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/aven.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    drkApi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    drkApi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ttgra.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    drkApi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gra.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    drkApi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/lion.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon3.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ice.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    drkApi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/space.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/smoke.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/WhatsAsenaDuplicated/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/glowttp.jpg'), MessageType.image, { caption: `${MLang.by}` })
    })
}));
DrkBox.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tfire.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hp.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4n.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
DrkBox.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    drkApi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cup.jpg'), MessageType.image, { caption: `${MLang.by}` })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
