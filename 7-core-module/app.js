// core module
// File system


const fs = require('fs')

// console.log(fs);

// menuliskan string kedalam file (synchronous)

// try {
//     fs.writeFileSync('data/test.txt', 'Hello word secara synchronous');
// } catch (e) {
//     console.log(e)
// }
// menuliskan string kedalam file (Asynchronous)

// fs.writeFile('data/test.txt', 'Hello word secara Asynchronous', (e)=> {
//     console.log(e);
// });

// membaca recent fd synchronous

// const data = fs.readFileSync('data/test.txt','utf8'); 
// console.log(data);

// membaca recent fd asynchronous

    // fs.readFile('data/test.txt','utf-8',(err,data) => {
    //     if(err) throw err;
    //     console.log(data);
    // });



    // readline

    const readline = require('readline')

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Masukan nama Anda:', (nama) => {
        // console.log(`Selamat kepada ${nama}`);
        rl.question('Masukan Umur :', (umur) =>{
           const contact = {nama, umur};
           const file = fs.readFileSync('data/contact.json','utf-8');
           const contacts = JSON.parse(file);

           contacts.push(contact);

           fs.writeFileSync('data/contact.json', JSON.stringify(contacts));


           console.log('Terimakasih sudah memasukan data');

          rl.close();
        });
    });