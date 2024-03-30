export default (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (result instanceof ArrayBuffer) {
        resolve(new Blob([result]));
      } else {
        reject(new Error("Failed to convert File to Blob"));
      }
    };

    reader.onerror = () => {
      reject(new Error("Failed to read File"));
    };

    reader.readAsArrayBuffer(file);
  });
}
