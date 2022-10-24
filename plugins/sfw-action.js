//Thanks To AyGemuy For This Feature
import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler  = async (m, { conn, args, text, command, usedPrefix: _p, participants }) => {
	let [jid, name, pesan] = text.split('|');
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
	let thumb = fs.readFileSync('./thumbnail.jpg')
	let type = (args[0] || '').toLowerCase()
	//=================================================//   
	const fblush = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": `${conn.getName(m.sender)} Blushes >\\\<`,
                        "h": `Hmm`,
                        'seconds': '3', 
                        'gifPlayback': 'true', 
                        'caption': `${conn.getName(m.sender)} Blushes 😳`,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
      const fconfus = {
             key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": `${conn.getName(m.sender)} Blushes >\\\<`,
                        "h": `Hmm`,
                        'seconds': '3', 
                        'gifPlayback': 'true', 
                        'caption': `${conn.getName(m.sender)} Is Confused 🤨`,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
    const fkiss = {
             key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": `${conn.getName(m.sender)} Blushes >\\\<`,
                        "h": `Hmm`,
                        'seconds': '3', 
                        'gifPlayback': 'true', 
                        'caption': `${conn.getName(m.sender)} Kisses ${conn.getName(data.jid)} 💋`,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
              const fhug = {
             key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": `${conn.getName(m.sender)} Blushes >\\\<`,
                        "h": `Hmm`,
                        'seconds': '3', 
                        'gifPlayback': 'true', 
                        'caption': `${conn.getName(m.sender)} Hugs ${conn.getName(data.jid)} 🤗`,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
             const fslap = {
             key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": `${conn.getName(m.sender)} Blushes >\\\<`,
                        "h": `Hmm`,
                        'seconds': '3', 
                        'gifPlayback': 'true', 
                        'caption': `${conn.getName(m.sender)} Slaps ${conn.getName(data.jid)}!!! 😤 `,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
      const fpat = {
             key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": `wm,
                        "h": `Hmm`,
                        'seconds': '3', 
                        'gifPlayback': 'true', 
                        'caption': `${conn.getName(m.sender)} Pats ${conn.getName(data.jid)}!!! 😁 `,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
   //=================================================//   
		if (command == 'blush') {
			let res = await (await fetch('https://raw.githubusercontent.com/BlackGopal/database/main/sfw/blush.json')).json()
    		let blush = pickRandom(gb)
			let stiker = await sticker(null, blush, global.packname, global.author)
			conn.sendFile(m.chat, stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: fblush})}
		if (command == 'confus') {
			let res = await (await fetch('https://raw.githubusercontent.com/BlackGopal/database/main/sfw/confused.json')).json()
    		let confus = pickRandom(gb)
			let stiker = await sticker(null, confus, global.packname, global.author)
			conn.sendFile(m.chat, stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: fconfus})}
		if (command == 'kiss') {
			if (!jid) throw `Tag Someone.`;
			let res = await (await fetch('https://raw.githubusercontent.com/BlackGopal/database/main/sfw/kiss.json')).json()
    		let kiss = pickRandom(gb)
			let stiker = await sticker(null, kiss, global.packname, global.author)
			conn.sendFile(m.chat, stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: fkiss})}
		if (command == 'slap') {
			if (!jid) throw `Tag Someone.`;
			let res = await (await fetch('https://raw.githubusercontent.com/BlackGopal/database/main/sfw/slap.json')).json()
    		let slap = pickRandom(gb)
			let stiker = await sticker(null, slap, global.packname, global.author)
			conn.sendFile(m.chat, stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: fslap})}
		if (command == 'pat') {
			if (!jid) throw `Tag Someone.`;
			let res = await fetch('https://api.waifu.pics/sfw/pat')
			let json = await res.json()
			let { url } = json
			let stiker = await sticker(null, url, global.packname, global.author)
			conn.sendFile(m.chat, stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: fpat})}
		if (command == 'hug') {
			if (!jid) throw `Tag Someone.`;
			let res = await fetch('https://api.waifu.pics/sfw/pat')
			let json = await res.json()
			let { url } = json
			let stiker = await sticker(null, url, global.packname, global.author)
			conn.sendFile(m.chat, stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: fhug})}
}

handler.tags = ['action']
handler.command = handler.help = ['consfus', 'blush', 'kiss <@tag user>', 'slap <@tag user>', 'pat <@tag user>', 'hug <@tag user>']

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
