import CryptoJS from 'crypto-js';

const generateApiKey = (data: Record<string, any>, key: string, length: number = 33): string => {
    const dataString = JSON.stringify(data);

    const iv = CryptoJS.lib.WordArray.random(16);

    const encrypted = CryptoJS.AES.encrypt(dataString, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    const result = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Hex).substring(0, length);

    return result;
};

export default generateApiKey;
