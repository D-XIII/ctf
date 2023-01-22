import { Card, Image, Text, Group } from '@mantine/core';
import Link from 'next/link';

interface YoutubeCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  publishedAt: string;
}
export function YoutubeCard({
  id,
  title,
  description,
  thumbnail,
  publishedAt,
  link,
}: YoutubeCardProps) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Link href={link != null ? link : ''}>
          <a target="_blank">
            <Image src={thumbnail} alt={description + id + publishedAt} />
          </a>
        </Link>
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <div style={{ maxWidth: 300 }}>
          <Link href={link != null ? link : ''}>
            <a target="_blank">
              <Text>{title != null ? title : ''}</Text>{' '}
            </a>
          </Link>{' '}
        </div>
      </Group>
    </Card>
  );
}
