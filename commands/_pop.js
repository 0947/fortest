/*CMD
  command: /pop
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "⬆️ዋና ገፅ", callback_data: "/mych"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/7",caption:  "✍🏽ርእሰ ሊቃነ ጳጳሳት አይሳሳቱም (infallible) ብለን እናምናለን\n\n ይህ ማለት ግን ርእሰ ሊቃነ ጳጳሳት እንደማንኛዉም ሰዉ ኃጢአት አይሠሩም ወይም የግል ኃጢአት የለባቸዉም ማለታችን አይደለም፡፡ ከሁሉም ካቶሊኮች ጋር እሳቸዉም “በኔ ክፋት በድዬኃለሁና ይቅር በለኝ” እያሉ የግል ኃጢአታቸዉን ይናዘዛሉ፡፡ ይህን ስንል ርእሰ ሊቃነ ጳጳሳት በማንኛዉም በሚናገሩትና በሚያስተምሩት ነገር ሁሉ አይሳሳቱም ማለታችን አይደለም፣ እሳቸዉ የማይሳሳቱት ከጴጥሮስ መንበር ላይ ሆነው በይፋ ታላቅ ሃይማኖታዊ አዋጅ ሊያዉጁ፤ለምሳሌ ማርያም በሥጋና በነፍስ ወደ ሰማይ የወጣትበተን አንቀጸ-ሃይማኖት የመሳሰሉ አዋጆችን ሲያስተላልፉ አይሳሳቱም፡፡ እንዲህ ዓይነት ታላቅ ሃይማኖታዊ ድንጋጌዎችን “ዶግማ” ወይም “አንቀጸ-ሃይማኖት” እንላለን፡፡ ካቶሊኮች ሁሉ እነዚህን ትምህርቶች እዉነት እንደሆኑ አምነዉ ይቀበላሉ።"
, reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
