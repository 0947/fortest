/*CMD
  command: /mzmu
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
[{title:"📀አልበሞች📀",command:"/albu"}],
[{title:"🎥የቪዲዮ",command:"/mzvi"},{title:"📜በጽሁፍ",command:"/mztxt"}],
[{title:"🔍የቆዩ መዝሙሮች",command:"/ykuaud"}],
[{title:"✅ተመለስ",command:"/menu M"}]]

Bot.editMessage(user.first_name+" ይህ የመዝሙር ገፅ ነው፡፡ ከዚህ በታች በሚፈልጉት መልኩ ተሰናድተዋል፡፡ በተኖቹን ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
