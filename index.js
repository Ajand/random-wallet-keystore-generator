const fs = require("fs");
const path = require("path");

const keythereum = require("keythereum");
const dk = keythereum.create();
const password = process.argv[2];

const getFileName = (address) => `./${address}-wallet`;

var keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv);

const walletPath = path.join(__dirname, "wallet");

fs.mkdir(path.join(__dirname, "wallet"), (err) => {
  fs.writeFileSync(
    path.join(walletPath, getFileName(keyObject.address)),
    JSON.stringify(keyObject)
  );
});

console.log("Your newly wallet created: ", keyObject.address);
