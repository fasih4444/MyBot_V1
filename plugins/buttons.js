const DrkBox = require('../events');
const Config = require('../config');
const { MessageType } = require('@adiwajshing/baileys')

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBox.addCommand({ pattern: 'test', fromMe: wk}, (async (message, match) => {

   const buttonsMessage = {
            contentText: '✪〘 *FUNCIONANDO* 〙✪',
            footerText: 'Prueba',
            buttons: [
                {
                    buttonId: `/menu`,
                    buttonText: {
                        displayText: "📒 MENU"
                    },
                    "type": "RESPONSE"
                },
                {
                     buttonId: `/ping`,
                     buttonText: {
                         displayText: "🪀 PING"
                    },
                    "type": "RESPONSE"
                },
            ],
            headerType: 1
        }
    prep = await message.client.prepareMessageFromContent(message.jid, buttonsMessage, MessageType.buttonsMessage)
    message.relayWamessage(prep)
}));

DrkBox.addCommand({ pattern: 'atest', fromMe: wk}, (async (message, match) => {
        txtt = 'Hola'
        buttons = [
            { buttonId: `/menu`, buttonText:{displayText:'Menu'}, type:1 },
            { buttonId: `/ping`, buttonText:{displayText:'Ping'}, type:1 }
        ]

        buttonsMessage = {
            contentText: `${txtt}`,
            footerText: 'Prueba Botones',
            buttons: buttons,
            headerType: 1
        }

        prep = await message.client.prepareMessageFromContent(message.jid, {buttonsMessage}, {})
        message.relayWAMessage(prep)
}));
