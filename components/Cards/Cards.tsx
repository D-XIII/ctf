import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        console.log('videos:', videos);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Flex mih={50} gap="xl" justify="center" align="center" direction="row" wrap="wrap">
      {' '}
      {vods.map((vod: YoutubeCardProps) => (
        <YoutubeCard {...vod} />
      ))}
    </Flex>
  );
};

export default Cards;
