import React, { memo } from 'react';

interface Props {
  tech: string;
}

const TechItem: React.FC<Props> = ({ tech }) => {
  return (
    <>
      <strong>{tech}</strong>
      <br />
    </>
  );
};
export default memo(TechItem);
