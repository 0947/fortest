/*CMD
  command: /thmax
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
[{title:"ተመለስ",command:"/thtxt"}]
]

Bot.editMessage("ቤተከርስቲያን ስለ ፆታዊ ባህሪ የምታስተምረው ትሞህርት⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️\nከእወተ ዘርእ (ማስተርቤሽን)\n\nይህ ራስን በራስ ለማርካት የሚደረግ ፆታዊ አካላትን የማነቃቃት ተግባር ነው። ይህ በጣም ብልሹ ተግባር ነው : ምክንያቱም ፆታዊ ግንኙነትና ከሱም የሚገኘው ደስታ በፈጣሪ የተቀመጠውን ዓላማ በእውነተኛ ፍቅር ውስጥ ሆነው ሁለቱ ተጋቢዎች አንደኛው ለሌላኛው እውነተኛ ፍቅርን ሰጥቶ በመቀበል ሰብአዊነታቸውን በፍጽምና ደረጃ መኖር እንዲችሉ ነው። (ካ.ቤ.ት.ክ. 2352)🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀",msg)&Bot.editInlineKeyboard(b,msg)
