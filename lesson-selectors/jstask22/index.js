import { addImage } from './addImage.js';

export const addImageV2 = url => {
    return new Promise((resolve, reject) => {
        addImage(url, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

addImageV2('https://s3.envato.com/files/380251776/Preview_Screenshots/01_imagePdfCreator.png')
    .then(data => console.log(data)) // ==> { width: 200, height: 100 }
    .catch(error => console.log(error)); // ==> 'Image load failed'

