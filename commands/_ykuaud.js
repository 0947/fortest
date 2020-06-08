/*CMD
  command: /ykuaud
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b=[
[{title:"✳️COLLECTION✳️",command:"/ycol"}],
[{title:"ወካዕማ",command:"/wkama"},{title:"አባ መዓዛ", command :"/abmaz"}],
[{title:"ልደታ ማርያም",command:"/ldiy"},{title:"ኮንሶላታ", command :"/consol"}],
[{title:"ቀርሜሎስ #1",command:"/kereme"}], 
[{title:"⏭ለመመለስ",command:"/mzmu"},{title:" ↕️ዋና ገፅ ", command :"/menu"}]]

Bot.editMessage("በዚህ ገፅ የቆዩ መዝሙሮችን ያገኛሉ፡፡ ከታች ያሉትን በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
