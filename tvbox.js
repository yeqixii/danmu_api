export default function handler(req, res) {
  // 开启跨域，影视软件能正常访问
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 声明返回纯JSON格式
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // 标准影视接口数据，这里用了公开的测试视频，部署后就能直接播放
  const result = {
    "code": 200,
    "msg": "success",
    "list": [
      {
        "title": "测试影片1",
        "url": "https://vjs.zencdn.net/v/oceans.mp4",
        "type": "mp4"
      },
      {
        "title": "测试影片2",
        "url": "https://vjs.zencdn.net/v/oceans.mp4",
        "type": "mp4"
      }
    ]
  };

  res.status(200).json(result);
}
