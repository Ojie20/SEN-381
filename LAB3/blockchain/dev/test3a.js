const Blockchain = require("./blockchain");
// test 1 A
const Ojie_SEN_22_7762 = new Blockchain();

// // console.log("test 1A \n", Ojie_SEN_22_7762);

// // test 1D
Ojie_SEN_22_7762.createNewBlock(4131, "VERITASDATASAAYTOIWE", "21219875ash980");

// // console.log("\ntest 1C \n", Ojie_SEN_22_7762);

// // Test 2A
Ojie_SEN_22_7762.createNewTransaction(101, "ASDUJYHFD89891773", "IKOLAPHDMSCBSCMG");
// // console.log("\ntest 2A with new Transaction \n", Ojie_SEN_22_7762);

// // console.log("\ntest 2D with new Transactions \n", Ojie_SEN_22_7762);

// // test 1D
Ojie_SEN_22_7762.createNewBlock(4131334234, "VERITASDATASAAYTOIWE", "21219875ash980");
Ojie_SEN_22_7762.createNewTransaction(501, "VASHHT845SJ5TKCJ2", "JAMN5BG5DF6HT8NG9");
Ojie_SEN_22_7762.createNewTransaction(430, "VASHHT845SJ5TKCJ2", "JAMN5BG5DF6HT8NG9");
Ojie_SEN_22_7762.createNewTransaction(901, "VASHHT845SJ5TKCJ2", "JAMN5BG5DF6HT8NG9");

console.log("\ntest 3C \n", Ojie_SEN_22_7762);

// Ojie_SEN_22_7762.hashBlock();
