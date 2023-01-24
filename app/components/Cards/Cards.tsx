import React, { useState, useEffect } from 'react';
import { Flex } from '@mantine/core';
import { YoutubeCard } from '../Card/Card';

interface YoutubeCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  publishedAt: string;
}

interface cardProps {
  videos: never[];
}

const Cards = ({ videos }: cardProps) => {
  const [vods, setVods] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setVods(videos);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [videos]);

  return (
    <Flex
      mih={50}
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      {' '}
      {vods?.map((vod: YoutubeCardProps) => (
        <YoutubeCard {...vod} />
      ))}
    </Flex>
  );
};

export default Cards;
