const axios = require("axios");

const SYMBOL = "BTCUSDT";
const BUY_PRICE = 34160;
const SELL_PRICE = 341501;

const API_URL = "https://testnet.binance.vision";

let isOpened = false;

async function start() {
// comando do robô
const {data} = await axios.get(API_URL + "/api/v3/klines?limit=21&interval=15m&symbol=" + SYMBOL);
const candle = data[data.length - 1];
const price = parseFloat(candle[4]);

console.clear();
console.log("Price: " + price);

if(price <= BUY_PRICE && isOpened === false) {
    console.log("Comprar");
    isOpened = true;
}
else if(price >= SELL_PRICE && isOpened === true) {
    console.log("Vender");
    isOpened = false;
}
else
    console.log("Aguardar");

}


setInterval(start, 3000); // 3 segundos

start();