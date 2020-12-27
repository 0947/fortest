/*CMD
  command: /ho2
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
[{title:"BACK",command:"/4c"},{title:"HOME",command:"/myin"}]
]

Bot.editMessage("🌿The Church Is Holy🌿 \n\n(Ephesians 5:25-27; Revelation 19:7-8; CCC 823-829)  \nBy His grace Jesus makes the Church holy, just as He is holy. This doesn’t mean that  \neach member is always holy. Jesus said there would be both good and bad members  \nin the Church (John 6:70), and not all the members would go to heaven (Matthew  \n7:21-23).  \nBut the Church itself is holy because it is the source of holiness and is the guardian  \nof the special means of grace Jesus established, the sacraments (cf. Ephesians 5:26).",msg)&Bot.editInlineKeyboard(b,msg)
