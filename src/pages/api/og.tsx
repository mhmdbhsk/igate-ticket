import { LogoIcon } from '@/assets';
import { Text } from '@mantine/core';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: any, res: any) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') ?? 'Hello World';
  const ticket_id = searchParams.get('id');
  const name = searchParams.get('name');

  return new ImageResponse(
    (
      <div>
        <LogoIcon />
        <div
          style={{
            display: 'flex',
            fontSize: 128,
            background: 'white',
            width: '100%',
            height: '100%',
          }}
        >
          <Text>{title}</Text>
          {name && <Text>{name}</Text>}
          {name && <Text>{ticket_id}</Text>}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
