import React from 'react';
import ResponsiveImage from './ResponsiveImage';

type PriorityImageProps = React.ComponentProps<'img'>;

const PriorityImage: React.FC<PriorityImageProps> = ({ fetchPriority, ...imageProps }) => (
  <ResponsiveImage {...imageProps} fetchPriority={fetchPriority} />
);

export default PriorityImage;
