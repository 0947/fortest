/*CMD
  command: /xlmot
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
[{title:"ተመለስ",command:"/xedayil"}]
]

Bot.editMessage("🔹ያለ አዳም ኃጢአት የተፀነስሽ ማርያም ሆይ ደጅ ለምንጠናሽ ለኛ ለምኝልን -- የሀጢአተኞች መጠጊያ በሞት አፋፍ ላይ ለሚገኙ ሁሉ አጥናኝ እናት ሆይ በሞት ጊዜ እባክሽ ከኛ አትለዪ -- በኃጢአታችንንም ይቅርታ እንድናገኝ የመጨረሻውን ስንቃዊ ቁርባን ለመቀበል እንድችል በመፅሀፈ ቀንዲል አስፈላጊውን ብርታት እንድናገኝ መሐሪና ቅኑ ፈራጅ በሆነው አምላካችንና መድሀኒታችን ዙፋን ፊት ሳንፈራ እንድንቀርብ አድርጊን።  አሜን።",msg)&Bot.editInlineKeyboard(b,msg)
