/*CMD
  command: /txtem
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
[{title:"ተመለስ",command:"/mztxt"}]
]

Bot.editMessage("❤️እመቤቴ❤️\nበምድር በሰማያት የከበርሽ\nእመቤቴ ማርያም አንቺ ነሽ\nስራሽ አስደነቀኝ እምዬ\nክብር ይገባሻል ለአንቺ ሁሌ\n\n🔻ላንቺ /2/ እናታችን ምስጋናን እንስጥ ከልባችን\nየህይወት መዳን መንገዳችን\nአንቺ ነሽ ማርያም እናታችን    \nበምድር ላይ ሰው ሞልቶ እንዳልጠፋ\nታዲያ እንዴት ለምርጫው እጩ ጠፋ\nአንድም ብጽህት ንጽህት ሲጠፋ\nማርያም ሆነች ለአለም ሁሉ ተስፋ\n                           ላንቺ………..\n\n    ለታላቁ ምርጫ የታጨችው\n    ከፍጥረት የበላይ የሆነችው\n     የመዳን ምክንያቱ እሳ ናት\n     ትውልድ ሁሉ ብ-ዕት ይበላት\n 〰ላንቺ……\n\nስራው ውብ እና ድንቅ የሆነው\nአምላኬ እግዚአብሄር ልክ ነው\nበምርጫው አይሳሳት ጌታዬ\nእኔም ክብር ልስጣት ለእምዬ\nበምድር……….",msg)&Bot.editInlineKeyboard(b,msg)
