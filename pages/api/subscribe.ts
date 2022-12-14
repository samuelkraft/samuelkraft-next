import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;

    const data = {
      email,
      api_key: API_KEY,
    };

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json; charset=utf-8",
        },
        method: "POST",
      }
    );
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter…`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
