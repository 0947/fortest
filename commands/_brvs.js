/*CMD
  command: /brvs
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/3690",caption:  "🤔የኢየሱስ ክርስቶስ ወንድምና እህት?\n🌺\"፤ ይህ የጸራቢ ልጅ አይደለምን? እናቱስ ማርያም ትባል የለምን? ወንድሞቹስ ያዕቆብና ዮሳ ስምዖንም ይሁዳም አይደሉምን? \" \n(የማቴዎስ ወንጌል 13: 55)🌺\n⚠️ታድያ የማርያም ድንግልናስ⁉️\n   .          ••••• ክፍል 1⃣ •••••"})

var b = [[{ text: "ተመለስ", callback_data: "/thalk"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/3691",caption:  "🤔የኢየሱስ ክርስቶስ ወንድምና እህት?\n🌺\"፤ ይህ የጸራቢ ልጅ አይደለምን? እናቱስ ማርያም ትባል የለምን? ወንድሞቹስ ያዕቆብና ዮሳ ስምዖንም ይሁዳም አይደሉምን? \" \n(የማቴዎስ ወንጌል 13: 55)🌺\n\n⚠️ታድያ የማርያም ድንግልናስ⁉️\n   .             ••••• ክፍል 2⃣ •••••",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
