//const ASN1 = require('@lapo/asn1js');
//import ASN1 from '@lapo/asn1js';
//import Hex from '@lapo/asn1js/hex';
const fileSelector = document.getElementById('file-selector');
const certificates = document.getElementById('certificates');
const openFile = document.getElementById('open-file');
const cert1 = document.querySelector('.cert1');
const cert2 = document.querySelector('.cert2');
const coding = document.querySelector('.name');


//localStorage.setItem('name', JSON.stringify(names));
let allCertificates = [];
let names = [];

// const item = localStorage.getItem('name');
// if (item) {
//     const file = JSON.parse(item);
//     console.log(file);
//     file.forEach((file) => {
//         const div = document.createElement('div');
//         const input = document.createElement('input');
//         const label = document.createElement('label');
//         div.appendChild(input);
//         div.appendChild(label);
//         input.type = 'checkbox';
//         input.id = file;
//         label.htmlFor = file;
//         label.innerHTML = file;
//         certificates.appendChild(div);
//     });
// }




require([
    'https://unpkg.com/@lapo/asn1js/asn1.js',
    'https://unpkg.com/@lapo/asn1js/hex.js'
], function (ASN1, Hex) {

    //cert1.innerText = ASN1.decode(Hex.decode('06032B6570')).content();
    fileSelector.addEventListener('input', (event) => {
        const fileList = event.target.files;
        names.push(fileList[0].name);
        localStorage.setItem('name', JSON.stringify(fileList[0].name));


        const div = document.createElement('div');
        const input = document.createElement('input');
        const label = document.createElement('label');
        div.appendChild(input);
        div.appendChild(label);
        input.type = 'checkbox';
        input.id = fileList[0].name;
        label.htmlFor = fileList[0].name;
        label.innerHTML = fileList[0].name;
        certificates.appendChild(div);

        // const item = localStorage.getItem('file');
        // if (item) {
        //     const file = JSON.parse(item);
        //     //console.log(file);
        //     file.forEach((file) => {
        //         console.log(file);
        //         const div = document.createElement('div');
        //         const input = document.createElement('input');
        //         const label = document.createElement('label');
        //         div.appendChild(input);
        //         div.appendChild(label);
        //         input.type = 'checkbox';
        //         input.id = fileList[0].name;
        //         label.htmlFor = fileList[0].name;
        //         label.innerHTML = fileList[0].name;
        //         certificates.appendChild(div);
        //     });
        // }

        //coding.innerHTML = fileList[0].name;

        const reader = new FileReader();
        reader.onload = function (event) {
            const contents = event.target.result;
            //console.log(contents);
            allCertificates.push(contents);
            //console.log(allCertificates);
            localStorage.setItem('file', JSON.stringify(allCertificates));



            //cert2.innerText = ASN1.decode(Hex.decode(contents)).content();
        };
        reader.readAsText(fileList[0]);
    });

    const item = localStorage.getItem('name');
    if (item) {
        const file = JSON.parse(item);
        console.log(file);
        file.forEach((file) => {
            const div = document.createElement('div');
            const input = document.createElement('input');
            const label = document.createElement('label');
            div.appendChild(input);
            div.appendChild(label);
            input.type = 'checkbox';
            input.id = file;
            label.htmlFor = file;
            label.innerHTML = file;
            certificates.appendChild(div);
        });
    }

    // allCertificates.push(fileList);
    //localStorage.setItem('file', JSON.stringify(allCertificates));


    //const result = ASN1.decode(Hex.decode(FileList)).content();
    //console.log(result);

    // const tbsCertificate = result.sub[0];
    // cert2.innerText = tbsCertificate;
});


// let fileHandle;
// openFile.addEventListener('click', async () => {
//     // Destructure the one-element array.
//     [fileHandle] = await window.showOpenFilePicker();
//     // Do something with the file handle.
//     console.log(fileHandle);
//     const file = await fileHandle.getFile();
//     const contents = await file.text();
//     console.log(contents);
//     const result = ASN1.decode(Hex.decode(contents)).content();
//     if (result.typeName() !== 'SEQUENCE') {
//         throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
//     }
//     const tbsCertificate = result.sub[0];
//     //console.log(tbsCertificate);
//     console.log(tbsCertificate);

// });

// });
