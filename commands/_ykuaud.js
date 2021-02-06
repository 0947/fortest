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
[{title:"አላማጣ ኪ.ም",command:"/almk"},{title:"ቅ.ገብርኤል #1",command:"/gbrla"}], 
[{title:"መትሀራ #1",command:"/mth1"}],
[{title:"ልደታ ማርያም",command:"/ldiy"},{title:"ኮንሶላታ", command :"/consol"}],
[{title:"ቀርሜሎስ #1",command:"/kereme"}],
[{title:"ልደታ ማርያም #3",command:"/lmn3"},{title:"ልደታ ማርያም #4", command :"/lmn4"}],
[{title:"ልደታ ማርያም #6",command:"/lmn6"}],
[{title:"⬅️ለመመለስ",command:"/mzmu"},{title:"⬆️ዋና ገፅ ", command :"/mych"}]]

Bot.editMessage("በዚህ ገፅ የቆዩ መዝሙሮችን ያገኛሉ፡፡ ከታች ያሉትን በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
