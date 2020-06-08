/*CMD
  command: /vaud
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"ባቲ major",command:"/bmaj"},{title:"አንቺ ሆዬ",command:"/anch"}],
[{title:"Harmony",command:"/harmo"},{title:"ድምፀት",command:"/demx"}],
[{title:"የድምፅ ቲምበር",command:"/timber"},{title:"ክሮማቲክ ቅኝት",command:"/crom"}],
[{title:"አምባሰል",command:"/ambas"},{title:"የምምፅ ቴክኒኮች",command:"/vtec"}],
[{title:"ትዝታ Minor",command:"/tmin"}],
[{title:"⏮ለመመለስ",command:"/vocal"},{title:"🔼ዋና ገጽ",command:"/menu"}]]

Bot.editMessage("ይህ የድምፅ vocal ገፅ ነው ከታች ያሉትን በተን በመጠቀም የአገልግሎቱ ተካፋይ ይሁኑ",msg)&Bot.editInlineKeyboard(b,msg)
