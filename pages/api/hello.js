// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    // POSTリクエストを処理します
    res.status(200).json({ name: 'John Doe', req: req.json() })
  } else {
    // その他のHTTPメソッドを処理します
    return res.status(405).end()
  }
}

