import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const PORTA = process.env.PORTA || 3000;

try {
    app.listen(PORTA, () => {
        console.log(`SERVIDOR RODANDO EM http://localhost:${PORTA}`);
    })
} catch (error) {
    console.error(error);
}

