import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = pickRandom(nek)
conn.sendButton(m.chat, 'Nyaww~ πΎπ', wm, neko, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]],m)
}
handler.command = /^(neko)$/i
handler.tags = ['nime']
handler.limit = 3
handler.help = ['neko']
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
