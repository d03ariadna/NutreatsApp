import React from 'react';
import {useCloudinaryUrl} from '../../../utils';

interface CloudinaryImageProps {
    name: string;
    img: string;
    width: number;
    height: number;
}

export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({ name, img, width, height }) => {
  
    const imageUrl = useCloudinaryUrl(img, width, height);

    return <img src={imageUrl} alt={name} width={width} height={height} loading="lazy" />;
};
