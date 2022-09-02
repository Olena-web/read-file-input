//const ASN1 = require('@lapo/asn1js');
//import ASN1 from '@lapo/asn1js';
//import Hex from '@lapo/asn1js/hex';
const fileSelector = document.getElementById('file-selector');
const openFile = document.getElementById('open-file');
const cert1 = document.querySelector('.cert1');
const cert2 = document.querySelector('.cert2');
const coding = document.querySelector('.name');
console.log(coding.innerHTML);

require([
    'https://unpkg.com/@lapo/asn1js/asn1.js',
    'https://unpkg.com/@lapo/asn1js/hex.js'
], function (ASN1, Hex) {

    cert1.innerText = ASN1.decode(Hex.decode('06032B6570')).content();
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        console.log(fileList, fileList[0].name);
        // coding.innerHTML = `${fileList.File.name}`;

        const result = ASN1.decode(Hex.decode(FileList)).content();
        console.log(result);
        if (result.typeName() !== 'SEQUENCE') {
            throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
        }
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
    //     console.log(tbsCertificate);



});
