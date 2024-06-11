import * as crypto from 'crypto';

const privateKey = 'private_LVFBmvoPu2Y8YB6gCzjBN785zzM='
export default defineEventHandler(async (event) => {

  const { expire, token } = await readBody(event)

  console.log('expire', expire)
  console.log('token', token)

  const data = token + expire.toString();

  // Buat instance HMAC dengan algoritma SHA1 dan kunci API pribadi
  const hmac = crypto.createHmac('sha1', privateKey);

  // Update HMAC dengan data yang digabungkan
  hmac.update(data);

  // Hitung tanda tangan dalam bentuk hexadecimal
  const signature = hmac.digest('hex');

  // Konversi tanda tangan menjadi huruf kecil
  return signature.toLowerCase();
})
