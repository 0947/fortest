/*CMD
  command: /akjs
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

Bot.editMessage("👀👀ኢየሱስ በእኔ!👂👂\nስለ ኢየሱስ ከመናገር ይልቅ እርሱ በእኔ በኩል ይናገር ዘንድ ወደ መፍቀድ፣ ስለ ኢየሱስ ከማሰብ ይልቅ እርሱ በእኔ ውስጥ ያስብ ዘንድ፣ ከእርሱ ጋርና ለእርሱ ነገሮችን ከማድረግ በእኔ በኩል እርሱ ያደርግ ዘንድ ወደ መፍቀድ መሸጋገር እንዳለብኝ አውቃለሁ። ለእኔ ዓለምን የመመልከቻው ብቸኛ መንገድ በእርሱ ዓይን መመልከት ብቻ እንደሆነም አውቃለሁ።\n👉🏻ሄንሪ ኖዌን (አባ)",msg)&Bot.editInlineKeyboard(b,msg)
