/*CMD
  command: /global_track
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params == "A") {
let msg = User.getProperty("msgid");
var b = [[{ text: "GO BACK", callback_data: "/mycov"}]]
var val = JSON.parse(data.content)
var re1 = val.results[0].total_cases
var re2 = val.results[0].total_recovered
var re4 = val.results[0].total_deaths
var re5 = val.results[0].total_new_cases_today
var re6 = val.results[0].total_new_deaths_today
var re8 = val.results[0].total_serious_cases
var re9 = val.results[0].total_affected_countries

Api.sendPhoto({photo :"https://www.orfonline.org/wp-content/uploads/2020/03/Corona-and-conflict.jpg",caption:"*🌏GLOBAL INFO*\n\n*🤕Total Infected :* "+re1+"\n*🤒Total Recovered : *"+re2+"\n*☠️Total Death : *"+re4+"\n*👹Today Infected : * "+re5+"\n*💀Today Death : *"+re6+"\n*🤮Total Serious cases : *"+re8+"\n*🔥Total Infected Country : *"+re9+"",parse_mode:"Markdown",on_result:"/msgid", reply_markup: { inline_keyboard: b} })
Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
return
}
HTTP.post({
url: "https://api.thevirustracker.com/free-api?global=stats",
body: {},
success: "/global_track A"
})
