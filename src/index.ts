import dotenv from 'dotenv';
import { createApp } from './server';

dotenv.config();

const app = createApp();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
