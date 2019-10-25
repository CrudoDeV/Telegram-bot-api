const express = require ('express');
//const api = require ('../api/config/api');
const app = express();
//Início da implementação do BOT
const https = require('https');
const unirest = require ('unirest');
const TelegramBot = require ('node-telegram-bot-api');
const token = '919914393:AAFJlIEuXO7OUPP-75OyQ0WxpbVI2LlGVO0';
const bot = new TelegramBot(token, {polling:true});

bot.on('new_member_chat', (msg)=>{
  bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, meu caro, prazer em conhecê-lo!`)
})

//bot.ontext(/\/echo(.+)/, (msg,match)=>{
//console.log('teste');
//})




app.use(express.json());

app.get('/', (req,res)=>{
  res.send('Aplicação em construção!');
});

//console.log(api);
const axios = require('axios');
async function teste(){ 
  const api = await axios.get('https://api.hgbrasil.com/finance');
console.log(api.data.results.currencies.EUR);
}
teste();








app.listen(3000);




