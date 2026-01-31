export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const apiToken = process.env.VOCALREMOVER_API_KEY;

  const r = await fetch(
    "https://vocalremover.com/api/file-conversion/create",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`
      },
      body: req
    }
  );

  const text = await r.text();
  res.status(r.status).send(text);
}
