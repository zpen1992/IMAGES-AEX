export default function handler(request, response) {
  response.status(200).json({
    key: process.env.TMDB_KEY // 从 Vercel 环境变量中读取，更安全
  });
}
