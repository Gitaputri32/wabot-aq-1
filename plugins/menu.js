let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {

let { name, limit, level, role, age, money, time, healt, premium, registered } = global.DATABASE.data.users[m.sender] 

  let fetch = require('node-fetch')

let fs = require('fs')

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

}

pp = await conn.getProfilePicture(global.conn.user.jid)

conn.send2ButtonImg(m.chat, 'Halo Kak Saya DZBotzz Jika Anda Pengguna GBWhatsapp Ketik .allmenu/.command\nhttps://bit.ly/3r5PqLZ', 'https://telegra.ph/file/daa5b421ce836642298b4.jpg', 

`*INFO=*

❏ Runtime : ${clockString(process.uptime() * 1000)}

❏ Battery : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}️

❏ Registered : ${registered ? 'Yes': 'No'}

❏ Name : ${name}

❏ Ticket : ${limit}

❏ Money : ${money}

❏ Level : ${level}

❏ Premium : ${premium ? 'Yes': 'No'} 

Klik Tombol Dibawah`.trim(), 'DAFTAR MENU', '.command','OWNER', '.owner',m)

  }

handler.help = ['menu']

handler.tags = ['main'] 

handler.command = /^(menu)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.register = false

handler.exp = 20

module.exports = handler
