const express = require ('express');
//const api = require ('../api/config/api');
const app = express();

const TelegramBot = require ('telegram-bot-api');
const token = '919914393:AAFJlIEuXO7OUPP-75OyQ0WxpbVI2LlGVO0';
const bot = new TelegramBot(token, {polling:true});

bot.ontext(/\/echo(.+)/, (msg,match)=>{
  
})




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




