/*CMD
  command: /akhs
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
[{title:"ተመለስ",command:"/akw"}]
]

Bot.editMessage("ሃሳቦችህ ቃላት ይሆናሉና አስቀድመህ ተቆጣጠራቸው፤ ቃላቶችህም ወደ ተግባር ስለሚቀየሩ አስተውላቸው፤ ተግባሮችህም በተራቸው ልማድህ ስለሚሆኑ ጠብቃቸው። ልማዶችህ ደግሞ የአንተ ባሕርይ ስለሚሆኑ ዝም አትበላቸው። በመጨረሻም ባሕርይህ ፍጻሜህን ስለሚወስን ባሕርይህን በሚገባ መርምር።\n👉🏻ቅድስት እማሆይ ተሬዛ",msg)&Bot.editInlineKeyboard(b,msg)
