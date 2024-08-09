import { useMemo } from 'react';

interface CloudinaryConfig {
  cloudName: string;
  folderName: string;
}

// Asume que tienes un archivo de configuración con tus datos de Cloudinary
import { cloudinaryConfig } from './config';

export const useCloudinaryUrl = (
  img: string, 
  width: number, 
  height: number, 
  config: CloudinaryConfig = cloudinaryConfig
): string => {
  return useMemo(() => {

    return `https://res.cloudinary.com/${config.cloudName}/image/upload/v1723047835/${img}`;
  
  }, [img, width, height, config.cloudName]);
};
