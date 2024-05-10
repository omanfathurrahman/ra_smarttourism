import { Buffer } from "buffer";

export default (file: File): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          const buffer = Buffer.from(arrayBuffer);
          resolve(buffer);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
  });
}