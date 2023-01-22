import React from 'react';
import { Flex } from '@mantine/core';
import Cards from '../Cards/Cards';

interface bodyProps {
  vods: never[];
}

export default function Body({ vods }: bodyProps) {
  console.log('vods:', vods);

  return (
    <Flex gap="xl">
      <Cards videos={vods} />
    </Flex>
  );
}
