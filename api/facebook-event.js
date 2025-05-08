export default async function handler(req, res) {
  const token = "EAAJYYaDXZBpEBOZBdBiqFZAbtZB82ZCUZClARdCJfjF9XT2qbRBlaNe865ZB8mGPFbZCB9YbZAgYZCVDKAstlMe2JyZCb9zMfb5KmXbm9m2k4peG7ZBqhT1IWbuMc5sZCnAx8HYt1LixyO0M8YSIxXAdM0fMwqfTpt3gZBwHVJHstbq8Rpw6eSxvGp5bZCVuK7x0dURfEuZBvgZDZD";
  const pixelId = "1886321232124577"; // substitua aqui com seu pixel ID

  const body = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        user_data: {
          em: ["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"],
          ph: [null]
        },
        attribution_data: {
          attribution_share: "0.3"
        },
        custom_data: {
          currency: "USD",
          value: "142.52"
        },
        original_event_data: {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000)
        }
      }
    ]
  };

  try {
    const fbRes = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const result = await fbRes.json();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao enviar para o Facebook', details: err });
  }
}
