import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // APIからデータを取得するロジックをここに記述
    // 例えば、APIのエンドポイントにリクエストを送信し、レスポンスを処理する

    // ダミーデータを返す例
    const dummyData = {
      lastPosition: 5739,
      i: [
        {
          format: 'basic',
          d: '%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08%08Will%20work%20if%20you%20want%20to%20know%20how%20we%20can%20do%20the%20channel%20and%20the%20stoner%20managers%20office%20and%20when%20they%20talk%20to%20the%20fantasy%20on%20a%20roll%20the%20managers%2C%20they%20want%20to%20have%20a%20talk%20to%20my%20data%20sign%20of%20models%20so%20that%20they%20can%20bring%20up%20something%20life-affirming%20performing%20products%20in%20the%20store%20for%20the%20last%20the%20last%20one%20these%20kind%20of%20things%20are%20giving%20a%20massage%20off%20all%20these%20Innovations%20with',
        },
        // ...
      ],
    };

    res.status(200).json(dummyData);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}