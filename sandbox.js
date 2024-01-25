const bcrypt = require('bcryptjs');

// buat nyimpen ke database
const passwordRegister = '123123';
const hash = bcrypt.hashSync(passwordRegister, 0);
console.log(hash);

// buat nyoba login bener
const passwordCobaLogin = '123123';
bcrypt.compare(passwordCobaLogin, hash).then((data) => {
    console.log(data);
});

// buat nyoba login salah
// const passwordCobaLoginSalah = '111111';
// bcrypt.compare(passwordCobaLoginSalah, hash).then((data) => {
//     console.log(data);
// });

// ini contoh compare sync
console.log(bcrypt.compareSync(passwordCobaLogin, hash));

// ini dibungkus async await
// async function test() {
//     let result = await bcrypt.compare(passwordCobaLogin, hash);
//     console.log(`result => ${result}`);
// }
// test();