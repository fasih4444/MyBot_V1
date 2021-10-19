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

const igstalk = async (username) => {
    function _0x4b72(){const _0x12aa08=['then','catch','message','connected_fb_page','https://www.instagram.com/','profile_pic_url_hd','3077674vUuBfw','isBusinessAccount','GET','/?__a=1','linkedFacebookPage','biography','5WguwXT','12059064sasqxu','full_name','By\x20Ian','isRecentUser','8847834JvKQJu','mid=XBXl1AALAAEbFoAEfNjZlMMG9dwX;\x20ig_did=91E66A48-5AA2-445D-BFE6-84DC4456DE8F;\x20fbm_124024574287414=base_domain=.instagram.com;\x20ig_nrcb=1;\x20shbid=\x2212737,4008624962,1656157971:01f72a5102dc07af6845adf923ca70eb86e81ab95fa9dbfdaf157c9eef0e82fd1f10fe23\x22;\x20shbts=\x221624621971,4008624962,1656157971:01f74841fba8e77a0066b47ea891dec8fba6fdf9216c0816f9fb3532292f769828800ae2\x22;\x20fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ;\x20fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ;\x20csrftoken=PpiPMEl0R2pAwThsw4NXynO6cVIXHZDo;\x20ds_user_id=38316792800;\x20sessionid=38316792800:rQj5Tr3g5zkg7b:4;\x20rur=\x22RVA,38316792800,1656158332:01f759cf624bef147397144805bb4c26f6c8b36a232e0f5738c570ee492f6b629f84f6e5\x22','3937132AJVOJz','method','count','followers','is_private','isPrivate','highlight_reel_count','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4472.114\x20Safari/537.36','665993tBwvAw','graphql','isVerified','highlightCount','is_joined_recently','is_verified','accountCategory','username','3cSCWTN','9748277oogEKH','user-agent','postsCount','3985740jJOEyk','following','profilePicHD','get'];_0x4b72=function(){return _0x12aa08;};return _0x4b72();}function _0x1018(_0x183685,_0x25d802){const _0x4b729a=_0x4b72();return _0x1018=function(_0x10188d,_0x80f8c9){_0x10188d=_0x10188d-0x107;let _0x3d1b57=_0x4b729a[_0x10188d];return _0x3d1b57;},_0x1018(_0x183685,_0x25d802);}(function(_0x4bf2a2,_0xc8567b){const _0x17cf8f=_0x1018,_0x559fd5=_0x4bf2a2();while(!![]){try{const _0x2a26b2=-parseInt(_0x17cf8f(0x126))/0x1+parseInt(_0x17cf8f(0x111))/0x2*(parseInt(_0x17cf8f(0x12e))/0x3)+-parseInt(_0x17cf8f(0x11e))/0x4*(-parseInt(_0x17cf8f(0x117))/0x5)+-parseInt(_0x17cf8f(0x11c))/0x6+-parseInt(_0x17cf8f(0x12f))/0x7+parseInt(_0x17cf8f(0x118))/0x8+parseInt(_0x17cf8f(0x107))/0x9;if(_0x2a26b2===_0xc8567b)break;else _0x559fd5['push'](_0x559fd5['shift']());}catch(_0xc72f55){_0x559fd5['push'](_0x559fd5['shift']());}}}(_0x4b72,0xe5858));return new Promise((_0x433b89,_0x1e045e)=>{const _0x35529c=_0x1018,_0x17f55a={};_0x17f55a[_0x35529c(0x130)]=_0x35529c(0x125),_0x17f55a['cookie']=_0x35529c(0x11d);const _0x8eae61={};_0x8eae61[_0x35529c(0x11f)]=_0x35529c(0x113),_0x8eae61['headers']=_0x17f55a,axios[_0x35529c(0x10a)](_0x35529c(0x10f)+username+_0x35529c(0x114),_0x8eae61)[_0x35529c(0x10b)](({data:_0x30da8e})=>{const _0x15b60a=_0x35529c,_0x3f2085=_0x30da8e[_0x15b60a(0x127)]['user'],_0x36285e={};_0x36285e[_0x15b60a(0x10d)]=_0x15b60a(0x11a),_0x36285e['id']=_0x3f2085['id'],_0x36285e['biography']=_0x3f2085[_0x15b60a(0x116)],_0x36285e[_0x15b60a(0x121)]=_0x3f2085['edge_followed_by']['count'],_0x36285e[_0x15b60a(0x108)]=_0x3f2085['edge_follow']['count'],_0x36285e['fullName']=_0x3f2085[_0x15b60a(0x119)],_0x36285e[_0x15b60a(0x129)]=_0x3f2085[_0x15b60a(0x124)],_0x36285e[_0x15b60a(0x112)]=_0x3f2085['is_business_account'],_0x36285e[_0x15b60a(0x11b)]=_0x3f2085[_0x15b60a(0x12a)],_0x36285e[_0x15b60a(0x12c)]=_0x3f2085['business_category_name'],_0x36285e[_0x15b60a(0x115)]=_0x3f2085[_0x15b60a(0x10e)],_0x36285e[_0x15b60a(0x123)]=_0x3f2085[_0x15b60a(0x122)],_0x36285e[_0x15b60a(0x128)]=_0x3f2085[_0x15b60a(0x12b)],_0x36285e[_0x15b60a(0x109)]=_0x3f2085[_0x15b60a(0x110)],_0x36285e[_0x15b60a(0x12d)]=_0x3f2085[_0x15b60a(0x12d)],_0x36285e[_0x15b60a(0x131)]=_0x3f2085['edge_owner_to_timeline_media'][_0x15b60a(0x120)];let _0x174738=_0x36285e;_0x433b89(_0x174738);})[_0x35529c(0x10c)](_0x1e045e);});
}


let wk = Config.WORKTYPE == 'public' ? false : true
/*
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
*/
DrkBox.addCommand({ pattern: 'twt ?(.*)', fromMe: wk, dontAddCommandList: true, desc: "Descargas de twitter" }, async (message, match) => {
    const twtLink = match[1]
    if (!twtLink) return await message.sendMessage(errorMessage("🤖 Necesito un link!"))
    await message.sendMessage(infoMessage(iLoad))

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
    if (!match[1]) return await message.sendMessage(errorMessage("🤖 Necesito un link!"))
    const { status, type, data } = await instagram(match[1], 'drkbot')
    if (!status) return await message.sendMessage(Lang.iErr)
    await message.client.sendMessage(message.jid, iLoad, MessageType.text, { quoted: message.data });
    if (type === 'image') return await message.sendMessage(data, MessageType.image, { caption: `${MLang.by}`, quoted: message.data })
    if (type === 'video') return await message.sendMessage(data, MessageType.video, { caption: `${MLang.by}`, quoted: message.data })
});

DrkBox.addCommand({pattern: 'insta ?(.*)', fromMe: wk}, async (message, match) => {
    const response = await igstalk(match[1]);
    const { fullname, username, followers, following, profilePicHD } = response.data.result
    const profileBuffer = await axios.get(profilePicHD, {responseType: 'arraybuffer'})
    const msg = `*Nombre:* ${fullname}\n*Usuario:* ${username}\n*Seguidores:* ${followers}\n*Siguiendo:* ${following}`
    await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: msg })
});
