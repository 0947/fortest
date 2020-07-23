/*CMD
  command: /cet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!params){
HTTP.post({
  url: "https://api.thevirustracker.com/free-api?countryTotal=et",
  body: {},
  success: "/cet A",
})
}
if(params=="A"){
var b = [[{ text: "ተመለስ", callback_data: "/mycov"}]]
  var val = JSON.parse(content)
  var re1 = val.countrydata[0].total_cases
  var re2 = val.countrydata[0].total_recovered
  var re4 = val.countrydata[0].total_deaths
  var re5 = val.countrydata[0].total_new_cases_today
  var re6 = val.countrydata[0].total_new_deaths_today
  var re7 = val.countrydata[0].total_active_cases
  var re8 = val.countrydata[0].total_serious_cases
  var re9 = val.countrydata[0].total_danger_rank
  var re10 = val.countrydata[0].info.title
  var photo = "https://www.countryflags.io/et/flat/64.png"
let msg = User.getProperty("msgid");

  Api.sendPhoto({
    photo: photo,
    caption:
      "*STATISTICS*\n\n🇪🇹 ሀገር : " + re10 +
      "\n\n*🤧በአጠቃላይ የተያዙ : *" +
      re1 +
      "\n*💪በአጠቃላይ ያገገሙ : *" +
      re2 +
      "\n*☠️በአጠቃላይ የሞቱ : *" +
      re4 +
      "\n*🤒በአጠቃላይ በጸና የታመሙ  : *" +
      re7 +
      "\n*🏘ማቆያ ውስጥ ያሉ  : *" +
      re8 + "\n*🔢ይህ ሀገር ያለበት ደረጃ ከአለም : *" + re9 + 
      "\n\n*🔃የዛሬ መረጃ :*\n\n*👹 ዛሬ የተያዙ : * " +
      re5 +
      "\n*💀 ዛሬ የሞቱ : *" +
      re6 +
      "",
    parse_mode: "Markdown",on_result:"/msgid", reply_markup: { inline_keyboard: b} })
Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
