import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    
    let [jid, name, pesan] = text.split('|');
    if (!jid) throw `Tag Someone.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
	let res = await fetch('https://api.waifu.pics/nsfw/blowjob')
			let json = await res.json()
			let { url } = json
	     let stiker = await sticker(null, url, global.packname, global.author)
	
	let fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": `${conn.getName(m.sender)} Blushes >\\\<`,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': `${conn.getName(m.sender)} gives Blowjob to ${conn.getName(data.jid)} 🥵`,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
	//--------------- EHE --------------//
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', false, {asSticker: true}, {quoted: fgif})
}
handler.tags = ['action']
handler.help = ['blowjob <tag user>']
handler.command = /^(blowjob)$/i

export default handler
