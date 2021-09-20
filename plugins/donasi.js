let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [081515860089]
│ • Telkomsel [081334177340]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [085797188194]
│ • https://saweria.co/Nurutomo
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
