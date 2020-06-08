/*CMD
  command: /akbr
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

Bot.editMessage("በቀን ነገሮችን ለማየት የምትጠቀምበት ዓይንህ ማታም አለህ፤ ሆኖም ግን የቀኑ የፀሐይ ብርሃን የለምና በምሽት ያው ዓይንህ ነገሮችን ማየት አይችልም። በተመሳሳይ ሁኔታም ተመሳሳይ የማሰብ ብቃት፣ እኩል ትምህርት፤ ጥሩ የማመዛዘን ችሎታ ያላቸው ሁለት አእምሮዎች (ሰዎች) በመንበረ ታቦት ላይ ያለውን “ኅብስት” ሲመለከቱ አንደኛው የስንዴ ኅብስትን ሲያይ ሌላኛው ክርስቶስን ሊያይ ይችላል። የተመለከቱት አንደኛው በሥጋ ዓይን ሌላኛው ደግሞ በእምነት ዓይን ነው ማለት ነው። የዚህ ልዩነት ምክንያት ይህ ነው፦ ክርስቶስን መመልከት የቻለው ሰው ሌላኛው የሌለው ብርሃን አለው - የእምነት ብርሃን!\n\n#ፉልተን ሺን ሊቀ ጳጳሳት",msg)&Bot.editInlineKeyboard(b,msg)
