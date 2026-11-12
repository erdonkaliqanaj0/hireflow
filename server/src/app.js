import express from 'express';
import cors from 'cors';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status:'ok',
        timestamp: new Date().toISOString(),
    });
});

export default app;