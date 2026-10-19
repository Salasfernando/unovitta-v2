import React from 'react';

type PriorityImageProps = React.ComponentProps<'img'>;

const PriorityImage: React.FC<PriorityImageProps> = ({ fetchPriority, ...imageProps }) => (
  <img {...imageProps} fetchPriority={fetchPriority} />
);

export default PriorityImage;
