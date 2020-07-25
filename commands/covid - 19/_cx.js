/*CMD
  command: /cx
  help: 
  need_reply: false
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b = [[{ text: "⬅️ተመለስ", callback_data: "/mycov"}]]

let msg = User.getProperty("msgid");
let r = JSON.parse(content)
let err =r.message
let re8=r.active
let re1=r.cases
let re4=r.deaths
let re2=r.recovered
let re7=r.todayRecovered
let re6=r.todayDeaths
let re5=r.todayCases
let re9=r.countryInfo.iso2
let re10 =r.country
var photo =  r.countryInfo.flag

if(!err){
  Api.sendPhoto({
    photo: photo,
    caption:
     "*የኮቪድ መረጃዎች\n\n🇪🇹ሀገር : " + re10 +
      "\n\n🤧ጠቅላላ የተያዙ : *" +
      re1 +
      "\n*💪ጠቅላላ ያገገሙ : *" +
      re2 +
      "\n*☠️ጠቅላላ ሞት : *" +
      re4 +
      "\n*🏠ማቆያ ውስጥ ያሉ  : *" +
      re8 +
      "\n\n*⛔️የዛሬ መረጃዎች :*\n\n*😷ዛሬ የተያዙ : * " +
      re5 +
      "\n*👽ዛሬ የሞቱ : *" +
      re6 +
      "\n*😃ዛሬ ያገገሙ : *" + re7,
    parse_mode: "Markdown", on_result:"/msgid",reply_markup: { inline_keyboard: b} })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}else{
Bot.sendMessage("not enter country")
}
