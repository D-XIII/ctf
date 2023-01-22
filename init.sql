CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL
);

INSERT INTO users (username,password,status) VALUES ('admin', 'tshirt123', 'active');
DROP TABLE IF EXISTS vod;
CREATE TABLE IF NOT EXISTS vod (
    "id" TEXT,
    "title" TEXT,
    "description" TEXT,
    "thumbnail" TEXT,
    "link" TEXT,
    "publishedAt" TEXT
);
INSERT INTO vod VALUES ('k8azBoV_DnE','2 seconds without watching Kracc Bacc','bringbackkraccbacc Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/k8azBoV_DnE/hqdefault.jpg','https://www.youtube.com/watch?v=k8azBoV_DnE','2023-01-16T15:00:35Z'),
	('CqJIdHsNpc0','Top 5 Goofy ahh Haircut','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/CqJIdHsNpc0/hqdefault.jpg','https://www.youtube.com/watch?v=CqJIdHsNpc0','2023-01-15T15:00:06Z'),
	('NvGweo5zICM','Top 5 banana','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/NvGweo5zICM/hqdefault.jpg','https://www.youtube.com/watch?v=NvGweo5zICM','2023-01-13T15:00:15Z'),
	('YsqZ81HesRA','Tutorial how to walk','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/YsqZ81HesRA/hqdefault.jpg','https://www.youtube.com/watch?v=YsqZ81HesRA','2023-01-12T15:00:31Z'),
	('_SbsGjMu0lw','Top 5 Arab person','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/_SbsGjMu0lw/hqdefault.jpg','https://www.youtube.com/watch?v=_SbsGjMu0lw','2023-01-11T15:00:32Z'),
	('X5O12KJ70i0','Top 5 Cat','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/X5O12KJ70i0/hqdefault.jpg','https://www.youtube.com/watch?v=X5O12KJ70i0','2023-01-07T15:00:16Z'),
	('FYqspD4FWlE','Top 5 Talking Dog','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/FYqspD4FWlE/hqdefault.jpg','https://www.youtube.com/watch?v=FYqspD4FWlE','2023-01-05T15:00:06Z'),
	('tXnCuFDNfpc','Top 5 Cow','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/tXnCuFDNfpc/hqdefault.jpg','https://www.youtube.com/watch?v=tXnCuFDNfpc','2023-01-03T15:00:29Z'),
	('bUG2wq6eZsI','Top 5 borzoi dog','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/bUG2wq6eZsI/hqdefault.jpg','https://www.youtube.com/watch?v=bUG2wq6eZsI','2023-01-01T15:00:17Z'),
	('aNiEssIld0k','Top 5 Polish food','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/aNiEssIld0k/hqdefault.jpg','https://www.youtube.com/watch?v=aNiEssIld0k','2022-12-30T15:00:00Z'),
	('p_UoBRFRbik','Top 5 Maxwell','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/p_UoBRFRbik/hqdefault.jpg','https://www.youtube.com/watch?v=p_UoBRFRbik','2022-12-28T15:00:22Z'),
	('aG11Lfp5G3g','Top 5 kids in my basement','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/aG11Lfp5G3g/hqdefault.jpg','https://www.youtube.com/watch?v=aG11Lfp5G3g','2022-12-26T15:00:00Z'),
	('kWsXajv6rS8','Top 5 Santa clause','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/kWsXajv6rS8/hqdefault.jpg','https://www.youtube.com/watch?v=kWsXajv6rS8','2022-12-24T15:00:03Z'),
	('9mwTQV1KBMs','Top 5 Crow','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/9mwTQV1KBMs/hqdefault.jpg','https://www.youtube.com/watch?v=9mwTQV1KBMs','2022-12-21T15:00:06Z'),
	('CWNYZlt4t_Y','Top 5 Lightskin stare','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/CWNYZlt4t_Y/hqdefault.jpg','https://www.youtube.com/watch?v=CWNYZlt4t_Y','2022-12-19T15:00:07Z'),
	('n1va70hNnAg','Top 5 Shopping cart','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/n1va70hNnAg/hqdefault.jpg','https://www.youtube.com/watch?v=n1va70hNnAg','2022-12-18T15:00:25Z'),
	('bZkf0NjglAI','Top 5 dog','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/bZkf0NjglAI/hqdefault.jpg','https://www.youtube.com/watch?v=bZkf0NjglAI','2022-12-15T15:00:18Z'),
	('v08Pm_v7Vcw','Top 5 Goofy ahh dance','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/v08Pm_v7Vcw/hqdefault.jpg','https://www.youtube.com/watch?v=v08Pm_v7Vcw','2022-12-13T15:06:47Z'),
	('MEax1r36hlo','top 5 toilets','Follow me on twitch https://www.twitch.tv/squewe1 ...','https://i.ytimg.com/vi/MEax1r36hlo/hqdefault.jpg','https://www.youtube.com/watch?v=MEax1r36hlo','2022-12-12T15:00:11Z'),
	('6yO9apUVZc0','Top 5 car','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/6yO9apUVZc0/hqdefault.jpg','https://www.youtube.com/watch?v=6yO9apUVZc0','2022-12-11T15:00:02Z'),
	('KZGdYryErbE','Drake Ahh video','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/KZGdYryErbE/hqdefault.jpg','https://www.youtube.com/watch?v=KZGdYryErbE','2022-12-11T14:45:00Z'),
	('1gduHr6quaA','Top 5 garbage','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/1gduHr6quaA/hqdefault.jpg','https://www.youtube.com/watch?v=1gduHr6quaA','2022-12-10T15:00:01Z'),
	('ks4Umzrjw6c','‌‌','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/ks4Umzrjw6c/hqdefault.jpg','https://www.youtube.com/watch?v=ks4Umzrjw6c','2022-12-08T15:00:24Z'),
	('p8Z4ktIIY6g','Top 5 run','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/p8Z4ktIIY6g/hqdefault.jpg','https://www.youtube.com/watch?v=p8Z4ktIIY6g','2022-12-07T15:00:23Z'),
	('gXD8oB6ayU8','Top 5 Best momentos','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/gXD8oB6ayU8/hqdefault.jpg','https://www.youtube.com/watch?v=gXD8oB6ayU8','2022-12-06T15:00:17Z'),
	('USHBX5nO84A','top 5 turkish person','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/USHBX5nO84A/hqdefault.jpg','https://www.youtube.com/watch?v=USHBX5nO84A','2022-11-26T15:00:21Z'),
	('LTO0ad0Fy00','Top 5 Chicken','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/LTO0ad0Fy00/hqdefault.jpg','https://www.youtube.com/watch?v=LTO0ad0Fy00','2022-11-25T15:00:09Z'),
	('meXMYfNKidM','Top 5 possum','Check out my patreon for more Content: patreon.com/user?u=75774894 ...','https://i.ytimg.com/vi/meXMYfNKidM/hqdefault.jpg','https://www.youtube.com/watch?v=meXMYfNKidM','2022-11-21T15:00:35Z'),
	('4hXLFA7OyZM','reasons why your dad should come back','Check out my patreon for more Content: patreon.com/user?u=75774894 ...','https://i.ytimg.com/vi/4hXLFA7OyZM/hqdefault.jpg','https://www.youtube.com/watch?v=4hXLFA7OyZM','2022-11-20T15:15:00Z'),
	('svt2zBdbIFY','Top 5 bike','Check out my patreon for more Content: patreon.com/user?u=75774894 ...','https://i.ytimg.com/vi/svt2zBdbIFY/hqdefault.jpg','https://www.youtube.com/watch?v=svt2zBdbIFY','2022-11-20T15:00:28Z'),
	('Z2DbmyxopNA','Reasons why you should visit Romania','Check out my patreon for more Content: patreon.com/Squewe ...','https://i.ytimg.com/vi/Z2DbmyxopNA/hqdefault.jpg','https://www.youtube.com/watch?v=Z2DbmyxopNA','2022-11-19T15:53:03Z'),
	('SMjifpEx2RQ','Top 5 bear','Check out my patreon for more Content: ...','https://i.ytimg.com/vi/SMjifpEx2RQ/hqdefault.jpg','https://www.youtube.com/watch?v=SMjifpEx2RQ','2022-11-18T15:00:26Z'),
	('mKy94h62H6o','Top 5 dog','Check out my patreon for more Content: patreon.com/user?u=75774894 ...','https://i.ytimg.com/vi/mKy94h62H6o/hqdefault.jpg','https://www.youtube.com/watch?v=mKy94h62H6o','2022-11-16T15:00:27Z'),
	('9PjCR_HOB1I','Top 5 camel','Check out my patreon for more Content: patreon.com/user?u=75774894 ...','https://i.ytimg.com/vi/9PjCR_HOB1I/hqdefault.jpg','https://www.youtube.com/watch?v=9PjCR_HOB1I','2022-11-14T15:00:04Z'),
	('LyRBIeAw8ak','Top 5 song','Check out my patreon for more Content: patreon.com/user?u=75774894 ...','https://i.ytimg.com/vi/LyRBIeAw8ak/hqdefault.jpg','https://www.youtube.com/watch?v=LyRBIeAw8ak','2022-11-12T15:00:18Z'),
	('AKlRfM2y92g','Top 5 Pelican','Check out my patreon for more Content: patreon.com/user?u=75774894 ...','https://i.ytimg.com/vi/AKlRfM2y92g/hqdefault.jpg','https://www.youtube.com/watch?v=AKlRfM2y92g','2022-11-10T15:00:08Z'),
	('BVr2UKyvU-o','Top 5 plane','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/BVr2UKyvU-o/hqdefault.jpg','https://www.youtube.com/watch?v=BVr2UKyvU-o','2022-11-08T15:00:12Z'),
	('MKWDFD1XBjU','Top 5 donkey','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/MKWDFD1XBjU/hqdefault.jpg','https://www.youtube.com/watch?v=MKWDFD1XBjU','2022-11-06T15:00:23Z'),
	('6lHbPS2auZM','Top 5 fish','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/6lHbPS2auZM/hqdefault.jpg','https://www.youtube.com/watch?v=6lHbPS2auZM','2022-11-05T15:00:04Z'),
	('9Rikt7ux3UQ','Top 5 dinosaurs','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/9Rikt7ux3UQ/hqdefault.jpg','https://www.youtube.com/watch?v=9Rikt7ux3UQ','2022-11-04T15:00:10Z'),
	('QlQQ9-oxaCY','Top 5 wheelchair','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/QlQQ9-oxaCY/hqdefault.jpg','https://www.youtube.com/watch?v=QlQQ9-oxaCY','2022-11-02T15:00:13Z'),
	('Q_Pu9uu_Is4','top 5 sus person','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/Q_Pu9uu_Is4/hqdefault.jpg','https://www.youtube.com/watch?v=Q_Pu9uu_Is4','2022-11-01T15:00:16Z'),
	('zR92i6w_rMo','Top 5 Sea Creature','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/zR92i6w_rMo/hqdefault.jpg','https://www.youtube.com/watch?v=zR92i6w_rMo','2022-10-31T15:00:43Z'),
	('0XuEaNcY6FY','Top 5 chair','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/0XuEaNcY6FY/hqdefault.jpg','https://www.youtube.com/watch?v=0XuEaNcY6FY','2022-10-29T15:00:02Z'),
	('vFr-9sUySaE','Top 5 gym moments','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/vFr-9sUySaE/hqdefault.jpg','https://www.youtube.com/watch?v=vFr-9sUySaE','2022-10-28T15:00:42Z'),
	('I2bAfy34CNE','Reasons why you should visit Australia','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/I2bAfy34CNE/hqdefault.jpg','https://www.youtube.com/watch?v=I2bAfy34CNE','2022-10-26T15:00:16Z'),
	('8VyI9Duzi7k','Top 5 SpongeBob','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/8VyI9Duzi7k/hqdefault.jpg','https://www.youtube.com/watch?v=8VyI9Duzi7k','2022-10-24T15:00:04Z'),
	('V-j0iCMV7Xw','Top 5 best moments','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/V-j0iCMV7Xw/hqdefault.jpg','https://www.youtube.com/watch?v=V-j0iCMV7Xw','2022-10-23T15:00:30Z'),
	('1m5l3_7wu3M','top 5 monkey','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/1m5l3_7wu3M/hqdefault.jpg','https://www.youtube.com/watch?v=1m5l3_7wu3M','2022-10-21T15:00:01Z'),
	('ITpCnA3itOM','Reasons why you shouldn&#39;t visit Ohio 😭','support me via: https://ko-fi.com/squewe -------------------------------------------------------------------- Join my discord server: ...','https://i.ytimg.com/vi/ITpCnA3itOM/hqdefault.jpg','https://www.youtube.com/watch?v=ITpCnA3itOM','2022-10-20T15:00:18Z');
