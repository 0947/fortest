/*CMD
  command: /covo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b = [[{ text: "⬅️GO BACK", callback_data: "/coval"}]]
var co = User.getProperty("country")

let msg = User.getProperty("msgid");
  var val = JSON.parse(content)
  var re1 = val.countrydata[0].total_cases
  var re2 = val.countrydata[0].total_recovered
  var re4 = val.countrydata[0].total_deaths
  var re5 = val.countrydata[0].total_new_cases_today
  var re6 = val.countrydata[0].total_new_deaths_today
  var re8 = val.countrydata[0].total_serious_cases
  var re9 = val.countrydata[0].total_danger_rank
  var re10 = val.countrydata[0].info.title
  var photo = "https://www.countryflags.io/"+co+"/flat/64.png"
  Api.sendPhoto({
    photo: photo,
    caption:
      "*STATISTICS*\n\n✈️COUNTRY : " + re10 +
      "\n\n*🤧Total Infected : *" +
      re1 +
      "\n*💪Total Recovered : *" +
      re2 +
      "\n*☠️Total Death : *" +
      re4 +
      "\n*🤕Total Active Cases  : *" +
      re8 +
      "\n*⚠️Danger Rank : *" + re9 + 
      "\n\n*⛔️Today Info :*\n\n*😷 Today Infected : * " +
      re5 +
      "\n*👽 Today Death : *" +
      re6 +
      "",
    parse_mode: "Markdown", on_result:"/msgid",reply_markup: { inline_keyboard: b} })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
