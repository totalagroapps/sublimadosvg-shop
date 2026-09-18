/**
 * Reduce la foto que sube el cliente antes de guardarla en el carrito.
 * Una foto de celular pesa 3-15 MB y el navegador solo deja guardar ~5 MB en total,
 * así que sin esto el carrito dejaba de guardarse en silencio.
 * Devuelve un JPEG de máx. 1000 px (~100-200 KB). Si algo falla, devuelve la imagen original.
 */
export function compressImage(file: File, maxSize = 1000, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const original = reader.result as string;
      const img = new Image();
      img.onerror = () => resolve(original);
      img.onload = () => {
        try {
          const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(img.width * scale));
          canvas.height = Math.max(1, Math.round(img.height * scale));
          const ctx = canvas.getContext('2d');
          if (!ctx) return resolve(original);
          // Fondo blanco para que los PNG con transparencia no queden negros al pasar a JPEG
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch {
          resolve(original);
        }
      };
      img.src = original;
    };
    reader.readAsDataURL(file);
  });
}
