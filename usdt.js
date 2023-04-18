const TronWeb = require('tronweb');

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = "665e52b0835475ab80ff6d5b75e302332498150ecdf91f1cd3bae5708f99fb89";
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

async function triggerSmartContract() {
  const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; // contract adresi
  const toAddress = "TNXHGHxo8Zbz4hVG3R8HaB9u92mzYk5uEH"; // tokenların gönderileceği adres
  const amount = 10000000; // gönderilecek token miktarı

  try {
      let contract = await tronWeb.contract().at(trc20ContractAddress);
      // Gönderim işlemi için send metodunu kullanın ve feeLimit, callValue parametrelerini belirleyin
      let result = await contract.transfer(
          toAddress, // _to adresi
          amount   // miktar
      ).send({
          feeLimit: 1000000000, // enerji limiti 1e9 (1000 TRX)
          callValue: tronWeb.toSun(1), // 1 USDT (Tether) ücreti
          originEnergyLimit: 10000000 // origin enerji limiti 1e7
      });
      console.log('Transaction Hash:', result);
  } catch(error) {
      console.error("trigger smart contract error", error);
  }
}

triggerSmartContract();
