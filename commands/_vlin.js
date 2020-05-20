/*CMD
  command: /vlin
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
[{title:"ተመለስ",command:"/vocal"}]
]

Bot.editMessage("Watch Vocal Runs with the BLUE NOTE Trick! on YouTube\nhttps://youtu.be/-gRLyWcG4u4\n\nWatch How-To: Basic Harmony | Easy Chord Singing Exercise! on YouTube\nhttps://youtu.be/IR5BeFWQcfQ\n\nWatch How to increase your vocal range - 3 simple exercises on YouTube\nhttps://youtu.be/temMd2x6ErE\n\nWatch How to Sing a High Note | Singing Lessons onvYouTube\nhttps://youtu.be/PgRprxVAuLo\n\nhttps://youtu.be/5jpEfnU1P1w\n\nhttps://youtu.be/J2hV6qwoi6w\n\nWatch Interactive Rhythm Practice: from simple to syncopated! on YouTube \nhttps://youtu.be/6dA1aG54QHg",msg)&Bot.editInlineKeyboard(b,msg)
