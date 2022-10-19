import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, args, command }) => {
	let _pp = './src/avatar_contact.png'
	 let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let url = 'https://telegra.ph/file/f85248abc7dce7f3e80c3.jpg'
	let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
	const text = ` [!] Hai Saya Adalah PENTAGRAM Bot, Salah Satu Bot Whatsapp Yang Siap Membantu Kamu Mempermudah Sesuatu Seperti Membuat Sticker Dan Lainnya, Kalo Kamu Mau Request Fitur Silahkan Ketik #request Pesan Atau Fitur Yang Kamu Inginkan!`.trim()

 await conn.send2ButtonDoc(m.chat, text, botdate, 'ʟɪꜱᴛ ᴍᴇɴᴜ', '.menu2', 'ᴀʟʟ ᴍᴇɴᴜ', '.? all', null, {
contextInfo: { externalAdReply :{
	                    renderLargerThumbnail: true,
                        mediaUrl: sig,
                        containsAutoReply: true,
                        mediaType: 1,
                        description: 'anu',
                        title: '© xᴩᴇɴᴛᴀ',
                        body: '',          
                        thumbnail: await (await fetch(url)).buffer(),
                        sourceUrl: ''
                      }}
})
}

handler.help = ['menu']
handler.command = ['menu', 'help']
handler.tags = ['main']  
handler.register = true 

export default handler
