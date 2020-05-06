/*CMD
  command: /catho
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: catholic, catholic malet mn malet new, ካቶሊክ, ካቶሊክ ምንድነው
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "⬆️ዋና ገፅ", callback_data: "/menu"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/9",caption:  "✍🏽በአንዲት ቅድስት ካቶሊካዊትና ሐዋርያዊት ቤተክርስቲያን እናምናለን\nለምን ቤተክርስቲያናችንን ካቶሊካዊት እንላለን⁉️\n\nካቶሊክ” ማለት አጠቃላይ፤ ዓለም አቀፋዊ፤ ለሁሉም ሰዉና ለሁሉም ዓለም የሚሆን ማለት ነዉ፡፡ ስለሆነም ቤተክርስቲያናችን ሁሉንም ዓለም፤ ሁሉንም አገር፤ ሁሉንም ዘር፤ ሁሉንም ባህልና፤ ሁሉንም ትዉልድ የምታቅፍ ስለሆነች ካቶሊክ ቤተክርስቲያን እንላታለን፡፡", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
