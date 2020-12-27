/*CMD
  command: /on1
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

Bot.editMessage("💐The Church Is One💐 \n\n(Romans 12:5; 1 Corinthians 10:17, 12:13; CCC 813-822)  \nJesus established only one Church, not a collection of differing churches (Lutheran,  \nBaptist, Anglican, and so on). The Bible says the Church is the Bride of Christ  \n(Ephesians 5:23-32). Jesus can have but one spouse, and His spouse is the Catholic  \nChurch.  \nHis Church also teaches just one set of doctrines, which must be the same as those  \ntaught by the apostles (Jude 3). This is the unity of belief to which Scripture calls us  \n(Philippians 1:27, 2:2).  \nAlthough some Catholics dissent from officially-taught doctrines, the Church’s  \nofficial teachers - the pope and the bishops united with him - have never changed  \nany doctrine. Over the centuries, as doctrines are examined more fully, the Church  \ncomes to understand them more deeply (John 16:12-13), but it never understands  \nthem to mean the opposite of what they once meant.",msg)&Bot.editInlineKeyboard(b,msg)
