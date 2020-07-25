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

var b = [[{ text: "ተመለስ", callback_data: "/mycov"}]]

let msg = User.getProperty("msgid");
let r = JSON.parse(content)
let err =r.message
let re8=r.active
let re1=r.cases
let re4=r.deaths
let re2=r.recovered
let re7=r.todayrecovered
let re6=r.todayDeaths
let re5=r.todayCases
let re9=r.countryInfo.iso2
let re10 =r.country
var photo =  r.countryInfo.flag

if(!err){
  Api.sendPhoto({
    photo: photo,
    caption:
     "*STATISTICS\n\n✔ሀገር : " + re10 +
      "\n\n🤧በአጠቃላይ የተጠቁ : *" +
      re1 +
      "\n*💪በአጠቃላይ ያገገሙ : *" +
      re2 +
      "\n*☠️ጠቅላላ ሞት : *" +
      re4 +
      "\n*🏠ማቆያ ውስጥ ያሉ  : *" +
      re8 +
      "\n\n*⛔️የዛሬ መረጃ :*\n\n*😷የተያዙ : * " +
      re5 +
      "\n*👽የሞቱ : *" +
      re6 +
      "",
    parse_mode: "Markdown", on_result:"/msgid",reply_markup: { inline_keyboard: b} })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}else{
Bot.sendMessage("not enter country")
}
