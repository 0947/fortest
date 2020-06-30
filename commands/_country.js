/*CMD
  command: /country
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("country",params,"text")

HTTP.post({
  url: "https://api.thevirustracker.com/free-api?countryTotal="+params,
  body: {},
  success: "/covo",
})
