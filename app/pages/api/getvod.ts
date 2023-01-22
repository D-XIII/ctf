import fs from 'fs';

export default function handler(req: any, ress: any) {
  // get 100 last vods from a youtube channel
  const url =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCWXcdemE-1OGDhaSAPAw-4w&maxResults=48&order=date&type=video&key=AIzaSyDLIyZv1jKtD2x2iKoIOSoK-UI2uQ81k4o';
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // save data to .json file
      fs.writeFileSync('data.json', JSON.stringify(ress.status(200).json(data)));
      return ress.status(200).json(data);
    });
}
