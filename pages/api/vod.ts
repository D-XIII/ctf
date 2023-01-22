// const data = require('../../squewe.json');
import Database from '../../orm/datasource';

export default async function handler(req: any, res: any) {
  // const vods = data.items.map((v: any) => {
  //   const newvod = {
  //     id: v.id.videoId,
  //     title: v.snippet.title,
  //     description: v.snippet.description,
  //     thumbnail: v.snippet.thumbnails.high.url,
  //     link: `https://www.youtube.com/watch?v=${v.id.videoId}`,
  //     publishedAt: v.snippet.publishedAt,
  //   };
  //   return newvod;
  // });

  const ds = await Database.createConnection();
  // const search = "' UNION SELECT username, password, NULL, NULL, NULL, NULL FROM users --";
  let { search } = req.query;
  if (!search) {
    search = '';
  }
  const query = `SELECT * FROM vod WHERE title LIKE '%${search}%' `;
  console.log(query);
  const vods = await ds.manager.query(query).catch((err: any) => {
    err.message;
  });
  return res.status(200).json(vods);
}
