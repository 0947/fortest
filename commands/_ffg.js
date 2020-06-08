/*CMD
  command: /ffg
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
[{title:"ተመለስ",command:"/popaba"}]
]

Bot.editMessage("ፊታቸው በፈገግታ የተሞላ ክርስቲያኖች ያስፈለጉናል፣ ነገሮችን ሁሉ አቅልለው ስለሚያዩ ሳይሆን፣ ከእግዚአብሔር የሚመጣ ደስታ ስለበዛላቸው፣ በፍቅር ስለሚያምኑና ለማልገልገል ስለሚኖሩ!\n\n#ፓፓፍራንቼስኮስ # ትዊተር",msg)&Bot.editInlineKeyboard(b,msg)
