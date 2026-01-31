export default async function handler(req, res) {
  const { ulid } = req.query;
  const apiToken = process.env.VOCALREMOVER_API_KEY;

  const r = await fetch(
    `https://vocalremover.com/api/file-conversion/${ulid}`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        Accept: "application/json"
      }
    }
  );

  const data = await r.json();
  res.status(200).json(data);
}
