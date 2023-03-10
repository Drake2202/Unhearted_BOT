import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) throw `β οΈ πππππππ ππ ππππ½ππ πΏπ ππ πππππππππππ πΏπ ππππππ½\n\nπ Ejemplo: ${usedPrefix + command} DORRAT-BOT-MD`
let res = await fetch(global.API('https://api.github.com', '/search/repositories', { q: text }))
let json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
β’ π¦ Resultado: ${1 + index}
β’ π Link: ${repo.html_url}
β’ π Creador: ${repo.owner.login}
β’ π Nombre: ${repo.name}
β’ π Creado: ${formatDate(repo.created_at)}
β’ β±οΈ Actualizado: ${formatDate(repo.updated_at)}
β’ π Visitas: ${repo.watchers}
β’ βοΈ Bifurcado: ${repo.forks}
β’ β­ Estrellas: ${repo.stargazers_count}
β’ π­ Issues: ${repo.open_issues}
β’ π DescripciΓ³n: ${repo.description ? `${repo.description}` : 'Sin DescripciΓ³n'}
β’ π₯ Clone: ${repo.clone_url}
`.trim()}).join('\n\nβββββββββββββββββ\n\n')
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
let buttonMessage= {
'document': { url: `https://github.com/Drake2202/Unhearted_BOT` },
'mimetype': `application/${document}`,
'fileName': `Unhearted`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Drake2202/Unhearted_BOT',
'mediaType': 2,
'previewType': 'pdf',
'title': `β’ Resultados Encontradosπ`,
'body': global.author,
'thumbnail': await (await fetch(json.items[0].owner.avatar_url)).buffer(),
'sourceUrl': 'https//wa.me/573244488043'}},
'caption': str,
'footer': `β’ ππΈ π³π΄ππ΄π° π³π΄ππ²π°ππΆπ°π ππ½\n*ππ΄πΏπΎππΈππΎππΈπΎ π³π΄ πΆπΈππ·ππ±*\n*π΄ππ²ππΈπ±π° ${usedPrefix}gitclone <LINK>*`,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'MenΓΊ π€'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info π¦'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
    m.reply('β οΈ *_πππππππΌπΏππ ππ πππΎπππππΌπΏππ_*')
  }
}
handler.help = ['githubsearch'].map(v => v + '')
handler.tags = ['search']

handler.command = /^(githubsearch)$/i
handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
