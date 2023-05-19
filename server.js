import express from 'express'
import  get  from 'axios';

const app = express();
const BASE_URL = 'https://jsonplaceholder.typicode.com/comments';

app.get('/api/comments', async (req, res) => {
  try {
    const limit = req.query.limit || 10; // Default limit is 10 if not provided

    const response = await get(BASE_URL, {
      params: {
        _limit: parseInt(limit),
      },
    });

    const endpoints = response.data;
    res.json(endpoints);
  } catch (error) {
    console.error('Error retrieving endpoints:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const limit = req.query.limit || 10; // Default limit is 10 if not provided

    const response = await get(BASE_URL, {
      params: {
        _limit: parseInt(limit),
      },
    });

    const points = response.data;
    res.json(points);
  } catch (error) {
    console.error('Error retrieving points:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
