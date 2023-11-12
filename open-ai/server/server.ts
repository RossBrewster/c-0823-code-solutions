import Express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = Express();

app.use(Express.json());

app.post('/generate-text', async (req, res) => {
  console.log('received');
  try {
    const prompt = req.body.prompt as string;

    // Use the OpenAI SDK to create a completion
    const completion = await openai.completions.create({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });

    // Send the response back
    res.json(completion.choices[0].text);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// app.post('/generate-text', async (req, res) => {
//   try {
//     const prompt = req.body.prompt as string;
//     const response = await fetch('https://api.openai.com/v1/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
//       },
//       body: JSON.stringify({
//         model: "text-davinci-003", // specify the model
//         prompt,
//         max_tokens: 150
//       })
//     });

//     if (!response.ok) {
//       throw new Error(`Error from OpenAI: ${response.status}`);
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// });

app.listen(8080, () => console.log('The server is listening on port 8080'));
