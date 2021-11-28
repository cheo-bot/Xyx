
//Oke lah
let { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
let { color, bgcolor } = require('./lib/color')
let  { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
let { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

let
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const yts = require('yt-search')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
zerokey = setting.ZeroKey
ownername = setting.OwnerName
zerkey = setting.ZerKey
monkey = setting.MonKey
hunterapi = setting.HunterApi
menusimpel = false

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        let content = JSON.stringify(mek.message)
		let from = mek.key.remoteJid
		let { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		let jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
	    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        let type = Object.keys(mek.message)[0]        
        let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        let prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		let args = body.trim().split(/ +/).slice(1)
		let isCmd = body.startsWith(prefix)
		let dtod = "6289653381067@s.whatsapp.net"
        let otod = "6289653381067@s.whatsapp.net"
        let zeroo = "CHEO BOT"
		let q = args.join(' ')
		let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
		let d = new Date
		let locale = 'id'
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		let Verived = "0@s.whatsapp.net"
		let txt = mek.message.conversation
		let botNumber = zeroyt7.user.jid
		let ownerNumber = [`${owner}@s.whatsapp.net`, `6289653381067@s.whatsapp.net`]
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let totalchat = await zeroyt7.chats.all()
		let groupMetadata = isGroup ? await zeroyt7.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let isNsfw = isGroup ? nsfww.includes(from) : false
		let conts = mek.key.fromMe ? zeroyt7.user.jid : zeroyt7.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        let pushname = mek.key.fromMe ? zeroyt7.user.name : conts.notify || conts.vname || conts.name || '-'
        
		let isAntiLink = isGroup ? _antilink.includes(from) : false
		let isWelkom = isGroup ? _welkom.includes(from) : false
		let isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		let isOwner = ownerNumber.includes(sender)
		let isUser = pendaftar.includes(sender)
		let isMybot = isOwner || mek.key.fromMe
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Wait Bro...',
			success: 'Done Jangan Lupa Follow instgram.com/iamghosky_',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error Jir'
			},
			only: {
				admin: 'ONLY ADMIN GRUB',
				group: 'ONLY GRUB'
			}
		}
		faketeks = 'CHEO X XYANN'
		let isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        let reply = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {quoted:mek})
        }
        let sendMess = (hehe, teks) => {
            zeroyt7.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zeroyt7.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zeroyt7.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        let zero = fs.readFileSync ('./zeroyt7/zerothumb.jpg')
        let costum = (pesan, tipe, target, target2) => {
			zeroyt7.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Selamat Malam🌚 Jangan Begadang Ya"; break;
                case 1: jamss = "Selamat Malam🌚 Jangan Begadang Ya"; break;
                case 2: jamss = "Selamat Malam🌚 Jangan Begadang Ya"; break;
                case 3: jamss = "Selamat Malam🌚 Jangan Begadang Ya"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi🌝 Jangan Lupa Sarapan"; break;
                case 6: jamss = "Selamat pagi🌝 Jangan Lupa Sarapan"; break;
                case 7: jamss = "Selamat pagi🌝 Jangan Lupa Sarapan"; break;
                case 8: jamss = "Selamat pagi🌝"; break;
                case 9: jamss = "Selamat pagi🌝"; break;
                case 10: jamss = "Selamat pagi🌞"; break;
                case 11: jamss = "Selamat siang🌞"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang🌞"; break;
                case 14: jamss = "Selamat sore✨"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore✨"; break;
                case 17: jamss = "Selamat sore✨"; break;
                case 18: jamss = "Selamat malam🌘"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam🌒"; break;
                case 21: jamss = "Selamat malam🌑"; break;
                case 22: jamss = "Selamat malam🌑"; break;
                case 23: jamss = "Selamat malam🌑"; break;
                         }
                         var put = '```'
                         var axz = '➛'
            var tampilUcapan = "" + jamss;
    let readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
     const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
		const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = zeroyt7.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "LIST MENU","footerText": "Follow Me on Instgram.com/iamghosky_\nSupport Me To 1K Follower","listType": "SINGLE_SELECT","sections": list}}, {})
            return zeroyt7.relayWAMessage(po, {waitForAck: true})
        }
    
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            zeroyt7.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await zeroyt7.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            zeroyt7.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return zeroyt7.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        
   const fakestatus = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zeroyt7/zero.jpg'), 
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const faketroli = {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: 1643697,

status: 200, 

surface: 200,

message: `${pushname}\n➸ ${command}`,

orderTitle: 'Ntah', 

thumbnail: fs.readFileSync('./zeroyt7/zero.jpg')

//sellerJid: '0@s.whatsapp.net'

}

}

}
        zeroyt7.chatRead(from, "read")
        const fakegroup = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zeroyt7/zero.jpg'), 
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 0,
                            status: 1,
                            surface : 1,
                            message: `CHEO X XYANN`, 
                            orderTitle: `CHEO X XYANN`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        let sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zeroyt7.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        let sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                let fn = Date.now() / 10000;
                let filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    zeroyt7.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zeroyt7.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		let isMedia = (type === 'imageMessage' || type === 'videoMessage')
		let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        function jsonformat(string) {
return JSON.stringify(string, null, 2)
}

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
	case 'menu':
	case 'help':
	timestamp = speed();
latensi = speed() - timestamp	
img = fs.readFileSync('./zeroyt7/zero.jpg')
ngntod = `${sender}`
zeroyt7.sendMessage(from, {"contentText":`Hallo ${pushname} Iam Cheo Bot Semoga Hari Mu Suram ahihi canda`
lett =
`━━━━[ BOT INFO ]━━━━
Creator : Xyann
Tag : @${xyx.split('@')[0]}
Lib : Baileys
Speed : ${latensi.toFixed(4)} second
Active : ${runtime(process.uptime())}

𝐔𝐬𝐞𝐫 𝐢𝐧𝐟𝐨
Status : ${isOwner ? 'Owner' : 'User'}
Nama User : ${pushname}
Nomor : @${ngntod.split('@')[0]}

❋──────────────────────❋
📰 Instagram
https://instagram.com/iamghosky_
📌 Github
Ada Private
❋──────────────────────❋`, 
"buttons": [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '☰ ALL MENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER BOT' }, type: 1 },
          { buttonId: `${prefix}store`, buttonText: { displayText: '☰ STORE BOT' }, type: 1 }
        ], "headerType": "DOCUMENT", "documentMessage": {

            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",

            "mimetype": "application/pdf",
            "title": "Xyann.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "99999999999999999999999999",
            "pageCount": 2007,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "Cheo Bot By Xyann Xyx",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/dmcok.jpg')}}, MessageType.buttonsMessage,{ quoted: mek, contextInfo: { "mentionedJid": [ ngntod, xyx], "forwardingScore": 508, "isForwarded": true, "externalAdReply":{"title":`Hai ${pushname}`,"body":`Follow My Instagram, Click Here!!!`,"mediaType":"2","thumbnail":fs.readFileSync('./stik/gblg.jpg'),"mediaUrl":`http://slynk.xyz/w9V`}}})

        break;
    break
case 'setmenu':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!q) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: `${prefix}setmenu ori`, buttonText: {displayText: '☰ ORI'}, type: 1},{buttonId: `${prefix}setmenu simpel`, buttonText: {displayText: '☰ SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: `Created by @${xyx.split('@')[0]}`,
    buttons: buttons,
    headerType: 1
}
await zeroyt7.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol, contextInfo: {mentionedJid: [xyx]}})
}
break
case 'allmenu':
  wbs = `${sender}`
img = fs.readFileSync('./zeroyt7/zero.jpg')
zeroyt7.sendMessage(from, {"contentText":`───────❒ *[ ${botname} ]* ❒───────

╭─❒ 𝗪𝗔𝗞𝗧𝗨
│ ○ ➛ WIB : ${wib}
│ ○ ➛ WITA : ${wita}
│ ○ ➛ WIT : ${wit}
└❏
╭─❒ 𝗧𝗢𝗗𝗔𝗬
│ ○ ➛ ${tampilUcapan}
│ ○ ➛ JAM : ${jam}
│ ○ ➛ HARI : ${week}
│ ○ ➛ WETON : ${weton}
└❏ TANGGAL : ${calender}

𝒀𝑶𝑼𝑹 𝑰𝑵𝑭𝑶
𝗡𝗮𝗺𝗮 : *${pushname}*
𝗡𝗼𝗺𝗲𝗿 : *@${wbs.split('@')[0]}*
𝗦𝘁𝗮𝘁𝘂𝘀 : *${isOwner ? 'Owner' : 'User'}*
${readmore}
𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
➛ ${prefix}antilink
➛ ${prefix}welcome
➛ ${prefix}antivirtex
➛ ${prefix}group
➛ ${prefix}linkgrup
➛ ${prefix}promote
➛ ${prefix}demote
➛ ${prefix}add
➛ ${prefix}kick
➛ ${prefix}setpp
➛ ${prefix}setdesc
➛ ${prefix}setname
➛ ${prefix}hidetag
➛ ${prefix}tagall
➛ ${prefix}listadmin
➛ ${prefix}nsfw

𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐌𝐞𝐧𝐮
➛ ${prefix}attp
➛ ${prefix}toimg
➛ ${prefix}sticker
➛ ${prefix}tomp3
➛ ${prefix}tovideo

𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
➛ ${prefix}owner
➛ ${prefix}sewabot
➛ ${prefix}report
➛ ${prefix}runtime
➛ ${prefix}speed 
➛ ${prefix}sc
➛ ${prefix}rulesbot
➛ ${prefix}sharelock

𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮
➛ ${prefix}bc
➛ ${prefix}spam
➛ ${prefix}setppwa
➛ ${prefix}setbio
➛ ${prefix}leave

𝐌𝐚𝐤𝐞𝐫 𝐌𝐞𝐧𝐮
➛ ${prefix}harrypotter
➛ ${prefix}phkomen
➛ ${prefix}blackpink
➛ ${prefix}pornhub
➛ ${prefix}teks1917
➛ ${prefix}freefire
➛ ${prefix}pubg
➛ ${prefix}ytkomen
➛ ${prefix}nulis
➛ ${prefix}fakedonald
➛ ${prefix}greenneon
➛ ${prefix}advanceglow
➛ ${prefix}futureneon
➛ ${prefix}sandwriting
➛ ${prefix}sandsummer
➛ ${prefix}sandengraved
➛ ${prefix}metaldark
➛ ${prefix}neonlight
➛ ${prefix}holographic
➛ ${prefix}minion
➛ ${prefix}duluxesilver
➛ ${prefix}newyearcard
➛ ${prefix}bloodfrosted
➛ ${prefix}halloween
➛ ${prefix}jokerlogo
➛ ${prefix}fireworksparkple
➛ ${prefix}natureleaves
➛ ${prefix}bokeh
➛ ${prefix}toxic
➛ ${prefix}strawberry
➛ ${prefix}box3d
➛ ${prefix}roadwarning
➛ ${prefix}breakwall
➛ ${prefix}icecold
➛ ${prefix}luxury
➛ ${prefix}cloud
➛ ${prefix}summersand
➛ ${prefix}horrorblood
➛ ${prefix}thunder

𝐈𝐬𝐥𝐚𝐦𝐢 𝐌𝐞𝐧𝐮
➛ ${prefix}listsurah
➛ ${prefix}asmaulhusna
➛ ${prefix}jadwalsholat
➛ ${prefix}kisahnabi
➛ ${prefix}alquran
➛ ${prefix}alquranaudio

𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮
➛ ${prefix}tiktokmusic
➛ ${prefix}ytsearch
➛ ${prefix}play
➛ ${prefix}ytmp3
➛ ${prefix}ytmp4
➛ ${prefix}igdl
➛ ${prefix}fbdl
➛ ${prefix}brainly
➛ ${prefix}lirik
➛ ${prefix}tiktoknowm
➛ ${prefix}pinterest
➛ ${prefix}spotifysearch

𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
➛ ${prefix}suit
➛ ${prefix}artinama
➛ ${prefix}jodoh
➛ ${prefix}tebakumur
➛ ${prefix}weton
➛ ${prefix}jadian
➛ ${prefix}faktaunik
➛ ${prefix}anime
➛ ${prefix}truth
➛ ${prefix}dare
➛ ${prefix}dadu
➛ ${prefix}tebakgambar
➛ ${prefix}tembak udara 
➛ ${prefix}tembak laut
➛ ${prefix}tembak darat
➛ ${prefix}slot
➛ ${prefix}quotes
➛ ${prefix}quotesanime
➛ ${prefix}quotesdilan
➛ ${prefix}quotesimage
➛ ${prefix}katabijak
➛ ${prefix}randomnama
➛ ${prefix}meme
➛ ${prefix}darkjoke
➛ ${prefix}memeindo

𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
➛ ${prefix}kbbi
➛ ${prefix}jarak
➛ ${prefix}translate
➛ ${prefix}infogempa
➛ ${prefix}covidindo
➛ ${prefix}covidglobal
➛ ${prefix}wikipedia
➛ ${prefix}playstore
➛ ${prefix}kodepos
➛ ${prefix}newsinfo
➛ ${prefix}jadwaltv
➛ ${prefix}cuaca
➛ ${prefix}gimage
➛ ${prefix}wallpapersearch
➛ ${prefix}shopee
➛ ${prefix}google

𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
➛ ${prefix}igstalk
➛ ${prefix}mlstalk
➛ ${prefix}tkstalk
➛ ${prefix}githubstalk
➛ ${prefix}shortlink

𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
➛ ${prefix}asupan
➛ ${prefix}asupancecan
➛ ${prefix}asupanhijaber
➛ ${prefix}asupansantuy
➛ ${prefix}asupanukhti
➛ ${prefix}asupanbocil
➛ ${prefix}asupanghea
➛ ${prefix}asupanrika

𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮
➛ ${prefix}yuri
➛ ${prefix}hentai
➛ ${prefix}anal
➛ ${prefix}lesbian
➛ ${prefix}eroneko
➛ ${prefix}bj
➛ ${prefix}kitsune
➛ ${prefix}pussy
➛ ${prefix}wallpaper
➛ ${prefix}neko2
➛ ${prefix}baka
➛ ${prefix}slap
➛ ${prefix}poke
➛ ${prefix}keta
➛ ${prefix}awoo
➛ ${prefix}blowjob
➛ ${prefix}megumin
➛ ${prefix}neko
➛ ${prefix}trapnime
➛ ${prefix}ass
➛ ${prefix}femdom
➛ ${prefix}hentaigif
➛ ${prefix}ahegao
➛ ${prefix}cum
➛ ${prefix}masturbation
➛ ${prefix}jahy
➛ ${prefix}orgy
➛ ${prefix}thigs
➛ ${prefix}panties
➛ ${prefix}foot
➛ ${prefix}gangbang
➛ ${prefix}bdsm
➛ ${prefix}ero
➛ ${prefix}glasses

𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
➛ ${prefix}kurumi
➛ ${prefix}deku
➛ ${prefix}sao
➛ ${prefix}chika
➛ ${prefix}kaneki
➛ ${prefix}touka
➛ ${prefix}eren
➛ ${prefix}naruto
➛ ${prefix}minato
➛ ${prefix}sagiri
➛ ${prefix}sasuke
➛ ${prefix}sakura
➛ ${prefix}tsunade
➛ ${prefix}gojosatoru

𝐔𝐩𝐬𝐰 𝐌𝐞𝐧𝐮
➛ ${prefix}upswteks
➛ ${prefix}upswsticker
➛ ${prefix}upswaudio
➛ ${prefix}upswvideo
➛ ${prefix}upswimage

${put}THANKS TO${put}
${axz} _ZEROYT7_\n${axz} _BAYU_\n${axz} _ARASYA_\n${axz} _XYANN XYX_\n${put}BATAS SUCI${put}`, "buttons":
[

          {

            buttonId: `${prefix}igbanh`,
            buttonText: {
              displayText: `instagram`,
            },
            type: 1,
          },
                    {
            buttonId: `${prefix}donasi`,
            buttonText: {
              displayText: `Donasi`,
            },
            type: 1,
          }, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": fs.readFileSync('./stik/dmcok.jpg')}}, MessageType.buttonsMessage,{contextInfo: { mentionedJid: [wsnu]}});
break
case 'infobot': case 'info':
var _0x553a73=_0xcb99;function _0x21a8(){var _0x21e150=['length','\x0a*┃┃*\x20Nama\x20Bot\x20:\x20','3900192rYYOMT','uptime','©Created\x20:\x20YT MBP\x20_17','1385268sGZYbD','┏━➤\x20*INFO\x20BOT*\x20\x0a*┃┃*\x20Creator\x20Bot\x20:\x20YT MBP\x20_17\x0a*┃┃*\x20Nama\x20Owner\x20:\x20','toFixed','owner','61trxzgD','88WaaQEL','18026LfTEkk','24TEJUfw','\x0a*┃┃*\x20Prefix\x20:\x20Multi\x20Prefix\x0a*┃┃*\x20Total\x20Pengguna\x20:\x20','36VQYfQo','☰\x20SCRIPT','146385WnHMsj','315930uoBJpo','716991fxZrtE','412353aDMRHU','7YDPsZi'];_0x21a8=function(){return _0x21e150;};return _0x21a8();}function _0xcb99(_0x1aedf2,_0xc89308){var _0x21a816=_0x21a8();return _0xcb99=function(_0xcb9971,_0x5d5553){_0xcb9971=_0xcb9971-0x1ae;var _0x56f03c=_0x21a816[_0xcb9971];return _0x56f03c;},_0xcb99(_0x1aedf2,_0xc89308);}(function(_0x5ddc5e,_0x3a93ea){var _0x4dbf32=_0xcb99,_0x1a5829=_0x5ddc5e();while(!![]){try{var _0x2e82b7=-parseInt(_0x4dbf32(0x1b9))/0x1*(parseInt(_0x4dbf32(0x1bb))/0x2)+parseInt(_0x4dbf32(0x1b5))/0x3+-parseInt(_0x4dbf32(0x1bc))/0x4*(-parseInt(_0x4dbf32(0x1c0))/0x5)+-parseInt(_0x4dbf32(0x1b2))/0x6*(-parseInt(_0x4dbf32(0x1af))/0x7)+-parseInt(_0x4dbf32(0x1ba))/0x8*(parseInt(_0x4dbf32(0x1ae))/0x9)+-parseInt(_0x4dbf32(0x1c1))/0xa+parseInt(_0x4dbf32(0x1c2))/0xb*(parseInt(_0x4dbf32(0x1be))/0xc);if(_0x2e82b7===_0x3a93ea)break;else _0x1a5829['push'](_0x1a5829['shift']());}catch(_0x4fb0cc){_0x1a5829['push'](_0x1a5829['shift']());}}}(_0x21a8,0x61134),timestamp=speed(),latensi=speed()-timestamp,teks=_0x553a73(0x1b6)+ownername+_0x553a73(0x1b1)+botname+_0x553a73(0x1bd)+pendaftar[_0x553a73(0x1b0)]+'\x0a*┃┃*\x20Runtime\x20:\x20'+runtime(process[_0x553a73(0x1b3)]())+'\x0a*┃┃*\x20Speed\x20:\x20'+latensi[_0x553a73(0x1b7)](0x4)+'\x20second\x0a*┃┃*\x20Language\x20:\x20Javascript\x20&\x20Nodejs\x0a*┃┗━━━━━━━━*\x0a*┃◗\x20Thanks\x20To\x20Allah\x20S.W.T*\x0a*┃◗\x20Thank\x20To\x20Ortu*\x0a*┃◗\x20Thank\x20To\x20Xyann\x20Xyx\x20(Creator)*\x0a*┃◗\x20Thanks\x20To\x20All\x20Subscriberku*\x0a*┗━━━━━━━\x20•*',but=[{'buttonId':prefix+_0x553a73(0x1b8),'buttonText':{'displayText':'☰\x20OWNER'},'type':0x1},{'buttonId':prefix+'sc','buttonText':{'displayText':_0x553a73(0x1bf)},'type':0x1}],sendButton(from,teks,_0x553a73(0x1b4),but,mek));
break
case 'sewabot':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
sewa = 
`Hay ${pushname}, ${tampilUcapan}
Mau Sewa Bot Ya ? 

Silahkan Pilih List Di Bawah Ini`
but = [
          { buttonId: `${prefix}sebulan`, buttonText: { displayText: '☰ 1 BULAN' }, type: 1 },
          { buttonId: `${prefix}permanen`, buttonText: { displayText: '☰ PERMANEN' }, type: 1 }
        ]
        sendButLocation(from, sewa, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'sebulan':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
sebulan =
`Untuk Harga Sewa Bot 
Sebulan 10.000

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
          { buttonId: `${prefix}gopay`, buttonText: { displayText: '☰ GOPAY' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: '☰ DANA' }, type: 1 },
          { buttonId: `${prefix}ovo`, buttonText: { displayText: '☰ OVO' }, type: 1 }
        ]
        sendButLocation(from, sebulan, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'permanen':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
permanen =
`Untuk Harga Sewa Bot 
Permanen 5.000

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
          { buttonId: `${prefix}pulsa`, buttonText: { displayText: 'PULSA' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: '☰ DANA' }, type: 1 },
        ]
        sendButLocation(from, permanen, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
case 'dana':
dana =
`No Dana : 089653381067`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '☰ DONE' }, type: 1 }
]
sendButton(from, dana, faketeks, but, mek)
break
case 'store':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
store = 
`Hay ${pushname}, ${tampilUcapan}
Ada Yg Kepo Nich ><

Silahkan Pilih List Di Bawah Ini`
but = [
             { buttonId: `${prefix}mbayu`, buttonText: { displayText: '☰ KEPERLUAN BOT' }, type: 1 }
        ]
        sendButLocation(from, store, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
        break
case 'mbayu':
img = fs.readFileSync('./zeroyt7/zerothumb.jpg')
store =
`CHEO BOT`
storee =
`
𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗦𝗖 𝗕𝗢𝗧
➛ SC MENU PDF = 45.000\n ${axz}Sama Ada Fitur Culik Id Grup\n${axz} SC BIASA = 20.000\n ${axz}G Ada Tambahan Menu`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '☰ CHAT OWNER' }, type: 1 }
]
sendButLocation(from, store, storee, but, { thumbnail: Buffer.alloc(0) })
break
case 'bayar':
image = fs.readFileSync('./zeroyt7/zerothumb.jpg')
bayar =
`Hi ${pushname}, ${tampilUcapan}

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
          { buttonId: `${prefix}pulsa`, buttonText: { displayText: 'PULSA' }, type: 1 },
          { buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }
        ]
        sendButLocation(from, bayar, faketeks, image, but, { thumbnail: Buffer.alloc(0) })
break
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: '☰ BUKA' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: '☰ TUTUP' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await zeroyt7.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
zeroyt7.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zeroyt7.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateSubject(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateDescription(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zeroyt7.downloadAndSaveMediaMessage(mek, './database/media_user')
await zeroyt7.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
zeroyt7.sendMessage(from, options, text)
break
case 'listadmin':
if (!isGroup) return replyWithFakeLink(mess.only.group)
teks = `Name Gc : ${groupMetadata.subject}\n*List of Admin : ${groupAdmins.length}*\n\n`
for (let admon of groupAdmins) {
teks += `• @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'nsfw':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
but = [
{ buttonId: '!nsfwon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!nsfwoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk nsfw group", faketeks, but, mek)
break
case 'nsfwon':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (isNsfw) return reply('Sudah Aktif Kak')
nsfww.push(from)
fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
reply('Sukses mengaktifkan fitur nsfw')
break
case 'nsfwoff':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (!isNsfw) return reply('Sudah Mati Kak')
var ini = nsfww.indexOf(from)
nsfww.splice(ini, 1)
fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
reply('Sukses menonaktifkan fitur nsfw')
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Follow instagram.com/iamghosky_`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zeroyt7.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Follow instagram.com/iamghosky_`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
zeroyt7.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
zeroyt7.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await zeroyt7.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Follow instagram.com/iamghosky_' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM ]━━━━━━━━━━━━━━━━━//

case 'sharelock':
 if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Kota|Nama`)
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
zeroyt7.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: zero}, MessageType.liveLocation, {quoted: ftrol})
break
case 'rulesbot':
ruls =`*Syarat & Ketentuan ${botname}*
Harus di patuhi, Kalau tidak di Banned!

1. Dilarang Toxic Ke Bot. 
2. Dilarang VC/Call Bot.
3. Dilarang Spam Fitur Bot.
4. Dilarang Culik Bot ke Grup.

Kalo sudah dipahami Rules nya
*Silahkan lanjut gunakan ${botname}!*`
but = [{ buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }]
sendButton(from, ruls, faketeks, but, mek)
break
case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zeroyt7.contacts[i] != undefined ? zeroyt7.contacts[i].vname || zeroyt7.contacts[i].notify : undefined
inilist.push({
"displayName": 'Xyann Xyx',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zeroyt7.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: `${prefix}instagram`, buttonText: {displayText: '☰ INSTAGRAM'}, type: 1},
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await zeroyt7.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zeroyt7.sendMessage(`62896533810678@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow \ninstagram.com/iamghosky_`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = 
`*Bot Ini Menggunakan Sourcecode*
╭─────────────────────
├ Sc Ori = https://youtu.be/UaOyXY7h6eg
├─────────────────────
├ Creator = Bayu
├ Recode = Xyann
└─────────────────────`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
anu = await zeroyt7.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '☰ MENU'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: '☰ SEWA BOT'}, type: 1}]
const btnbc = {
contentText: `BROADCAST\n\n${q}`,
footerText: `*Regards : @${xyx.split('@')[0]}*`,
buttons: buttonss,
headerType: 1
}
await zeroyt7.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol, contextInfo: {mentionedJid: [xyx]}})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'spam':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix}spam teks|jumlah`)
argzi = q.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`Harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
zeroyt7.sendMessage(from, argzi[0], MessageType.text)
}
break
case 'setppwa':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply(`Reply Imagenya!`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(enmedia)
await zeroyt7.updateProfilePicture(botNumber, media)
reply('*Makasih Profile Barunya :)*')
break
case 'setbio':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
zeroyt7.setStatus(q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
reply(mess.success)
}
break
case 'leave':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
setTimeout( () => {
zeroyt7.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Bye Tod💔...')
}, 0)
break

//━━━━━━━━━━━━━━━[ INFO BOT ]━━━━━━━━━━━━━━━━━//

case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break

//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//

case 'harrypotter':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Bayu Tamvan :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${zero}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : YT MBP_17*'})
break
case 'phkomen':
if (args.length == 0) return reply(`Teksnya Mana Tod ?\nContoh : ${prefix + command} Bayu Tamvan :)`)
username = args[0]
comment = args[2]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/phcomment?apikey=${zerokey}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : YT MBP_17*'})
break
case 'blackpink':
if (args.length == 0) return reply(`Teksnya Mana Tod ?\nContoh : ${prefix + command} Bayu Tamvan :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol})
break
case 'pornhub':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu|Yoaimo`)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${zerokey}&text1=${txt1}&text2=${txt2}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol })
break
case 'text1917':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Tamvan :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/text1917?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol})
break
case 'freefire':
if (args.length == 0) return reply(`Teksnya Mana Tod ?\nContoh : ${prefix + command} Bayu Tamvan :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol})
break
case 'pubg':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Tamvan :)`)
txt1 = args[0]
txt2 = args[1]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/pubg?apikey=${zerokey}&text1=${txt1}&text2=${txt2}`)
zeroyt7.sendMessage(from, buffer, image, { quoted: mek })
break
case 'ytkomen':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Tamvan :)`)
username = args[0]
comment = args[2]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ytcomment?apikey=${zerokey}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : YT MBP_17*'})
break
case 'nulis':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Ikeh Kimochi`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'NIH TOD ASU'})
break
case 'fakedonald':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Tamvan :)`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${zerokey}&text=${zerr}`)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: '*©Creator : YT MBP_17*'})
break
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
if (args.length == 0) return reply(`Teks Nya Mana Tod ?\nContoh : ${prefix + command} Bayu Tamvan :)`)
zerr = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${zerokey}&text=${zerr}`).then((gambar) => {
zeroyt7.sendMessage(from, gambar, image, { quoted: ftrol, caption: '*©Creator : YT MBP_17*' })
})
break

//━━━━━━━━━━━━━━━[ FITUR ISLAMI ]━━━━━━━━━━━━━━━━━//

case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${zerokey}`)
get_result = get_result.result
zerr = '*List Surah :*\n'
for (var x in get_result) {
zerr += `${x}. ${get_result[x]}\n`
}
reply(zerr)
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Urutan :* ${get_result.index}\n`
zerr += `*Latin :* ${get_result.latin}\n`
zerr += `*Arab :* ${get_result.ar}\n`
zerr += `*Indonesia :* ${get_result.id}\n`
zerr += `*English :* ${get_result.en}`
reply(zerr)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Nama Kotanya Mana ?\nContoh : ${prefix + command} Temanggung`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Wilayah :* ${get_result.wilayah}\n`
zerr += `*Tanggal :* ${get_result.tanggal}\n`
zerr += `*Sahur :* ${get_result.sahur}\n`
zerr += `*Imsak :* ${get_result.imsak}\n`
zerr += `*Subuh :* ${get_result.subuh}\n`
zerr += `*Terbit :* ${get_result.terbit}\n`
zerr += `*Dhuha :* ${get_result.dhuha}\n`
zerr += `*Dzuhur :* ${get_result.dzuhur}\n`
zerr += `*Ashar :* ${get_result.ashar}\n`
zerr += `*Maghrib :* ${get_result.maghrib}\n`
zerr += `*Isya :* ${get_result.isya}`
reply(zerr)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Example : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Nama :* ${get_result.name}\n`
zerr += `*Lahir :* ${get_result.thn_kelahiran}\n`
zerr += `*Umur :* ${get_result.age}\n`
zerr += `*Tempat :* ${get_result.place}\n`
zerr += `*Story :* ${get_result.story}`
reply(zerr)
break
case 'alquran':
if (args.length < 1) return reply(`Nomer Surah Nya Mana ?\nContoh : ${prefix + command} 18\nAtau ${prefix + command} 18/10\nAtau ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${zerokey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
zerr = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
zerr += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
zerr = zerr.replace(/<u>/g, "").replace(/<\/u>/g, "")
zerr = zerr.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
zerr = zerr.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(zerr)
break
case 'alquranaudio':
if (args.length == 0) return reply(`Nomer Surah Nya Mana ?\nContoh : ${prefix + command} 18\nAtau ${prefix + command} 18/10`)
surah = args[0]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${zerokey}`)
await zeroyt7.sendMessage(from, buffer, audio, { quoted: fmen, mimetype: Mimetype.mp4Audio })
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOAD ]━━━━━━━━━━━━━━━━━//

case 'tiktokmusic':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${zerokey}&url=${link}`)
zeroyt7.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol})
break
case 'igdl':
if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
url = args[0]
url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${zerokey}&url=${url}`)
url = url.result
type = image
if (url.includes(".mp4")) type = video
buffer = await getBuffer(url)
zeroyt7.sendMessage(from, buffer, type, { quoted: ftrol})
break
case 'fbdl':
if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
url = args[0]
url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${zerokey}&url=${url}`)
url = url.result[0].link
buffer = await getBuffer(url)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol})
break
case 'brainly':
if (args.length == 0) return reply(`Apa Yang Mau Di Cari Tod ?\nContoh : ${prefix + command} Soekarno adalah`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
zerr = "Result Search : \n"
for (var x of get_result) {
zerr += `${x.title}\n`
zerr += `${x.url}\n\n`
}
reply(zerr)
break
case 'lirik':
if (args.length == 0) return reply(`Judul Lagu Nya Mana Tod ?\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${zerokey}&query=${query}`)
reply(get_result.result)
break
case 'tiktoknowm':
if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
url = args[0]
url = `https://api.lolhuman.xyz/api/tiktok?apikey=${zerokey}&url=${url}`
get_result = await fetchJson(url)
buffer = await getBuffer(get_result.result.link)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol})
break
case 'pinterest':
if (args.length == 0) return reply(`Example: ${prefix + command} Waifu`)
query = args.join(" ")
url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${zerokey}&query=${query}`)
url = url.result
buffer = await getBuffer(url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol})
break
case 'spotifysearch':
if (args.length == 0) return reply(`Judul Lagu Nya Mana Tod ?\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
zerr = ""
for (var x of get_result) {
zerr += `*Title :* ${x.title}\n`
zerr += `*Artists :* ${x.artists}\n`
zerr += `*Duration :* ${x.duration}\n`
zerr += `*Link :* ${x.link}\n`
zerr += `*Preview :* ${x.preview_url}\n\n\n`
}
reply(zerr)
break
case 'play':
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
image = fs.readFileSync('./zeroyt7/zero.jpg')
teks =
`Silahkan Pilih Tipe File Yg Mau Di Download`
but = [
{ buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: 'MUSIC' }, type: 1 },
{ buttonId: `${prefix}playmp4 ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 }
]
sendButLocation(from, teks, faketeks, image, but)
break
case 'playmp3':
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${zerokey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${zerokey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol})
})
})
break
case "playmp4":
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'ytsearch':
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp4':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${zerokey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await zeroyt7.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break

//━━━━━━━━━━━━━━━[ FITUR GABUT ]━━━━━━━━━━━━━━━━━//

case 'meme':
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
})
break
case 'darkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
})
break
case 'memeindo':
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
})
break
case 'quotes':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${zerokey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${zerokey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${zerokey}`)
reply(quotedilan.result)
break
case 'quotesimage':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
await zeroyt7.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
reply(get_result.result)
break
case 'randomnama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${zerokey}`)
reply(anu.result)
break
case 'dadu':
random = Math.floor(Math.random() * 6) + 1
damdu = fs.readFileSync(`./sticker/${random}.webp`)
zeroyt7.sendMessage(from, damdu, sticker, {quoted: ftrol})
break
case 'tembak':
                    if (args[0] == 'udara') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'darat') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'laut') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 12000)
                    }
                    break
                    case 'tebakgambar':
					anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=LolHumanzzh`, {method: 'get'})
					ngebuff = await getBuffer(anu.img)
					tebak = `Jawaban : *${anu.jawaban}*`
					setTimeout( () => {
					zeroyt7.sendMessage(from, tebak, text, {quoted: mek})
					}, 60000) // 1000 = 1s,
        			setTimeout( () => {
					zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                    setTimeout( () => {
					zeroyt7.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					zeroyt7.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: ftrol }) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            zeroyt7.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: ftrol })
            break
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
			if (args[0] === 'gunting' ) {
			gunting = [
	        "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 🗿",
		    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 😱",
	        "Kamu *Gunting*\nAku *Gunting*\nKita Seri 🗿"
		    ]
		    gun = gunting[Math.floor(Math.random() * gunting.length)]
		    reply(gun)
			} else if (args[0] === 'kertas') {
		    ker = [
		    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 🗿",
		    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 😱",
		    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 🗿"
		    ]
		    kertas = ker[Math.floor(Math.random() * ker.length)]
			reply(kertas)
			} else if (args[0] === 'batu') {
		   bat = [
		   "Kamu *Batu*\nAku *Gunting*\nKamu Menang 🗿",
		   "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 😱",
		   "Kamu *Batu*\nAku *Batu*\nKita Seri 🗿"
	       ]
		   batu = bat[Math.floor(Math.random() * bat.length)]
		   reply(batu)
		   } else {
		   reply('Pilih gunting/batu/kertas')
		   }
           break
case 'artinama':
if (args.length == 0) return reply(`Nama Nya Mana Tod ?\nContoh : ${prefix + command} zByy`)
nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${zerokey}&nama=${nama}`)
reply(get_result.result)
break
case 'jodoh':
if (args.length == 0) return reply(`Namanya Mana Tod ?\nContoh : ${prefix + command} Aku & Dia`)
nama = args.join(" ").split("&")
nama1 = nama[0].trim()
nama2 = nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Positif :* ${get_result.positif}\n\n`
zerr += `*Negative :* ${get_result.negatif}\n\n`
zerr += `*Deskripsi :* ${get_result.deskripsi}`
reply(zerr)
break
case 'tebakumur':
if (args.length == 0) return reply(`Nama Nya Mana Tod ?\nContoh : ${prefix + command} Bayu`)
name = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${zerokey}&name=${name}`)
get_result = get_result.result
zerr = `*Nama :* ${get_result.name}\n`
zerr += `*Umur :* ${get_result.age}`
reply(zerr)
break
case 'weton':
if (args.length == 0) return reply(`Tanggal Nya Mana Tod ?\nContoh : ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Weton :* ${get_result.weton}\n\n`
zerr += `*Pekerjaan :* ${get_result.pekerjaan}\n\n`
zerr += `*Rejeki :* ${get_result.rejeki}\n\n`
zerr += `*Jodoh :* ${get_result.jodoh}`
reply(zerr)
break
case 'jadian':
if (args.length == 0) return reply(`Tanggal Nya Mana Tod ?\nContoh : ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Karakteristik :* ${get_result.karakteristik}\n\n`
zerr += `*Deskripsi :* ${get_result.deskripsi}`
reply(zerr)
break
case 'faktaunik':{
const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
reply(`*Fakta Unik :*\n${ran_faktau}`)
}
break
case 'anime':
if (args.length == 0) return reply(`Nama Anime Nya Mana Tod ?\nContoh : ${prefix + command} Tokyo Revenger`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
zerr = `Id : ${get_result.id}\n`
zerr += `Id MAL : ${get_result.idMal}\n`
zerr += `Title : ${get_result.title.romaji}\n`
zerr += `English : ${get_result.title.english}\n`
zerr += `Native : ${get_result.title.native}\n`
zerr += `Format : ${get_result.format}\n`
zerr += `Episodes : ${get_result.episodes}\n`
zerr += `Duration : ${get_result.duration} mins.\n`
zerr += `Status : ${get_result.status}\n`
zerr += `Season : ${get_result.season}\n`
zerr += `Season Year : ${get_result.seasonYear}\n`
zerr += `Source : ${get_result.source}\n`
zerr += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
zerr += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
zerr += `Genre : ${get_result.genres.join(", ")}\n`
zerr += `Synonyms : ${get_result.synonyms.join(", ")}\n`
zerr += `Score : ${get_result.averageScore}%\n`
zerr += `Characters : \n`
character = get_result.characters.nodes
for (var x of character) {
    zerr += `- ${x.name.full} (${x.name.native})\n`
}
zerr += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
zeroyt7.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: zerr })
break
case 'truth':
const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
sendButton(from, `${ttrth}`, faketeks, [
{
buttonId: `${prefix}truth`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
}]);
break
case 'dare':
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
sendButton(from, `${der}`, faketeks, [
{
buttonId: `${prefix}dare`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
}]);
break

//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'google':
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break
case 'shopee':
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'gimage':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${zerokey}&query=${query}`)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${zerokey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'kbbi':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${zerokey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${zerokey}&kota1=${teks}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'translate':
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${zerokey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'infogempa':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Lokasi :* ${get_result.lokasi}\n`
zerr += `*Waktu :* ${get_result.waktu}\n`
zerr += `*Potensi :* ${get_result.potensi}\n`
zerr += `*Magnitude :* ${get_result.magnitude}\n`
zerr += `*Kedalaman :* ${get_result.kedalaman}\n`
zerr += `*Koordinat :* ${get_result.koordinat}`
buffer = await getBuffer(get_result.map)
await zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, caption: zerr })
break
case 'covidindo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Positif :* ${get_result.positif}\n`
zerr += `*Sembuh :* ${get_result.sembuh}\n`
zerr += `*Dirawat :* ${get_result.dirawat}\n`
zerr += `*Meninggal :* ${get_result.meninggal}`
reply(zerr)
break
case 'covidglobal':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Positif :* ${get_result.positif}\n`
zerr += `*Sembuh :* ${get_result.sembuh}\n`
zerr += `*Dirawat :* ${get_result.dirawat}\n`
zerr += `*Meninggal :* ${get_result.meninggal}`
reply(zerr)
break
case 'wikipedia':
if (args.length == 0) return reply(`Apa Yg Mau Di Cari Tod\nContoh : ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'playstore':
if (args.length == 0) return reply(`Apa Yg Mau Di Cari Tod ?\nContoh : ${prefix + command} telegram`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
zerr = 'Play Store Search : \n'
for (var x of get_result) {
zerr += `Name : ${x.title}\n`
zerr += `Type ID : ${x.appId}\n`
zerr += `Developer : ${x.developer}\n`
zerr += `Link : ${x.url}\n`
zerr += `Price : ${x.priceText}\n`
zerr += `Nominal : ${x.price}\n\n`
}
reply(zerr)
break
case 'kodepos':
if (args.length == 0) return reply(`Nama Kota Nya Mana Tod ?\nContoh : ${prefix + command} Temanggung`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${zerokey}&query=${daerah}`)
get_result = get_result.result[0]
zerr = `*Provinsi :* ${get_result.province}\n`
zerr += `*Kabupaten :* ${get_result.city}\n`
zerr += `*Kecamatan :* ${get_result.subdistrict}\n`
zerr += `*Kelurahan :* ${get_result.urban}\n`
zerr += `*Kode Pos :* ${get_result.postalcode}`
reply(zerr)
break
case 'newsinfo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${zerokey}`)
get_result = get_result.result
zerr = "*News TV Info :*\n\n"
for (var x of get_result) {
zerr += `*Title :* ${x.title}\n`
zerr += `*Author :* ${x.author}\n`
zerr += `*Source :* ${x.source.name}\n`
zerr += `*Url :* ${x.url}\n`
zerr += `*Published :* ${x.publishedAt}\n\n`
zerr += `*Description :* ${x.description}`
}
reply(zerr)
break
case 'jadwaltv':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${zerokey}`)
get_result = get_result.result
zerr = `*Info Televisi :*\n\n`
for (var x in get_result) {
zerr += `${x.toUpperCase()}${get_result[x]}\n\n`
}
reply(zerr)
break
case 'cuaca':
if (args.length == 0) return reply(`Nama Kota Nya Mana Tod ?\nContoh : ${prefix + command} Depok`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
zerr = `Tempat : ${get_result.tempat}\n`
zerr += `Cuaca : ${get_result.cuaca}\n`
zerr += `Angin : ${get_result.angin}\n`
zerr += `Description : ${get_result.description}\n`
zerr += `Kelembapan : ${get_result.kelembapan}\n`
zerr += `Suhu : ${get_result.suhu}\n`
zerr += `Udara : ${get_result.udara}\n`
zerr += `Permukaan laut : ${get_result.permukaan_laut}\n`
await zeroyt7.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(zerr)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'igstalk':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${body.slice(9)}?apikey=${zerokey}`, {method: 'get'})
get_result = get_result.result
zerr = `Link : https://www.instagram.com/${get_result.username}\n`
zerr += `Full : ${get_result.fullname}\n`
zerr += `Post : ${get_result.posts}\n`
zerr += `Followers : ${get_result.followers}\n`
zerr += `Following : ${get_result.following}\n`
zerr += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.photo_profile)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: zerr})
break
case 'githubstalk':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${body.slice(13)}?apikey=${zerokey}`, {method: 'get'})
get_result = get_result.result
zerr = `*Username :* ${get_result.name}\n`
zerr += `*Followers :* ${get_result.followers}\n`
zerr += `*Following :* ${get_result.following}\n`
zerr += `*Publick :* ${get_result.public_repos}\n`
zerr += `*Public Gits :* ${get_result.public_gists}\n`
zerr += `*User :* ${get_result.user}\n`
zerr += `*Compi :* ${get_result.company}\n`
zerr += `*Lokasi : ${get_result.location}\n`
zerr += `Email : ${get_result.email}\n`
zerr += `*Profile Bio :* ${get_result.bio}`
buffer = await getBuffer(get_result.avatar)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: zerr})
break
case 'tkstalk':
username = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${username}?apikey=${zerokey}`, {method: 'get'})
get_result = get_result.result
zerr = `*Link :* ${get_result.username}\n`
zerr += `*Profil Bio :* ${get_result.bio}\n`
zerr += `*Followers :* ${get_result.followers}\n`
zerr += `*Following :* ${get_result.followings}\n`
zerr += `*Likes :* ${get_result.likes}\n`
zerr += `*Video :* ${get_result.video}`
buffer = await getBuffer(get_result.user_picture)
zeroyt7.sendMessage(from, buffer, image, {quoted: mek, caption: zerr})
break
case 'mlstalk':
if (args.length == 0) return reply(`Id Ml Nya Mana Tod ?\nContoh : ${prefix + command} 84830127/2169`)
ml_id = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${zerokey}`)
reply(get_result.result)
break
case 'shortlink':
if (args.length == 0) return reply(`Link Nya Mana Tod ?\nContoh : ${prefix + command} https://instagram.com/bayu.kecce_`)
ini_link = args[0]
buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${zerokey}&url=${ini_link}`)
reply(buffer.result)
break

//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//

case 'asupan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Follow instagram.com/iamghosky_'})
break

//━━━━━━━━━━━━━━━[ FITUR NSFW ]━━━━━━━━━━━━━━━━━//

case 'yuri':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
zeroyt7.sendMessage(from, ini_img, image, {quoted:ftrol, caption: 'Jangan Sange Ama Kartun Tod🤣'})
break
case  'hentai': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'anal':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=${monkey}`)
kon = await getBuffer(aku)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'lesbian':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=${monkey}`)
kon = await getBuffer(kau)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'eroneko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'bj':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'kitsune':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'pussy':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=${monkey}`)
zeroyt7.sendMessage(from, hai, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'wallpaper':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'neko2':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'baka':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'slap':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'poke':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'keta':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=${monkey}`)
kon = await getBuffer(hai)
zeroyt7.sendMessage(from, kon, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'awoo':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'neko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fs.readFileSync('./zeroyt7/zerothumb.jpg')})
break
case 'ass':
case 'femdom':
case 'hentaigif':
case 'ahegao':
case 'cum':
case 'masturbation':
case 'jahy':
case 'orgy':
case 'thigs':
case 'panties':
case 'foot':
case 'gangbang':
case 'bdsm':
case 'ero':
case 'glasses':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw\nUntuk Mengaktifkan`)
reply(mess.wait)
ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
zeroyt7.sendMessage(from, ini_img, image, {quoted:ftrol})
break

//━━━━━━━━━━━━━━━[ FITUR WIBU ]━━━━━━━━━━━━━━━━━//

case 'kurumi':
case 'deku':
case 'sao':
case 'chika':
case 'kurumi':
case 'kaneki':
case 'touka':
case 'eren':
case 'naruto':
case 'minato':
case 'sagiri':
case 'sasuke':
case 'sakura':
case 'tsunade':
case 'gojosatoru':
reply(mess.wait)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pinterest?text=${command}&apikey=${hunterapi}`, {method: 'get'})
ngebuff = await getBuffer(anu.image)
zeroyt7.sendMessage(from, ngebuff, image, { quoted: ftrol })
break

//━━━━━━━━━━━━━━━[ FITUR UPSW ]━━━━━━━━━━━━━━━━━//

case 'upswteks':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
zeroyt7.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
case 'upswsticker':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
zeroyt7.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break
case 'upswaudio':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
zeroyt7.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break
case 'upswvideo':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await zeroyt7.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
zeroyt7.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break
case 'upswimage':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
zeroyt7.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return zeroyt7.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
