/*CMD
  command: /ap4
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

Bot.editMessage("🌺The Church Is Apostolic🌺\n (Ephesians 2:19-20; CCC 857-865)  \nThe Church Jesus founded is apostolic because He appointed the apostles to be the  \nfirst leaders of the Church, and their successors were to be its future leaders. The  \napostles were the first bishops, and, since the first century, there has been an  \nunbroken line of Catholic bishops faithfully handing on what the apostles taught the  \nfirst Christians in Sacred Scripture and Sacred Tradition (2 Timothy 2:2).  \nThese beliefs include the bodily Resurrection of Jesus, the Real Presence of Jesus in  \nthe Eucharist, the sacrificial nature of the Mass, the forgiveness of sins through a  \npriest, baptismal regeneration, the existence of purgatory, Mary’s special role, and  \nmuch more - even the doctrine of apostolic succession itself.  \nEarly Christian writings prove the first Christians were thoroughly Catholic in belief  \nand practice and looked to the successors of the apostles as their leaders. What  \nthese first Christians believed is still believed by the Catholic Church. No other  \nchurch can make that claim.",msg)&Bot.editInlineKeyboard(b,msg)
