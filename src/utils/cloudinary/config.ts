// cloudinaryConfig.ts

interface CloudinaryConfig {
    cloudName: string;
    folderName: string;
    apiKey?: string;
    apiSecret?: string;
}

export const cloudinaryConfig: CloudinaryConfig = {
    cloudName: "dbshin2ov",
    folderName: "nutreats-products",
  // apiKey y apiSecret son opcionales aquí, ya que generalmente
  // no se necesitan en el frontend por razones de seguridad
  // apiKey: "tu-api-key",
  // apiSecret: "tu-api-secret",
};