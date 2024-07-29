import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.js';
import clientRouter from './routes/client.js';
import adminRouter from './routes/admin.js';
import eventRouter from './routes/event.js';
import vendorRouter from './routes/vendor.js';
import orderRouter from './routes/order.js';
import productRouter from './routes/product.js';
import reviewRouter from './routes/review.js';
import paymentRouter from './routes/payment.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/client', clientRouter);
app.use('/api/admin', adminRouter);
app.use('/api/event', eventRouter);
app.use('/api/vendor', vendorRouter);
app.use('/api/order', orderRouter);
app.use('/api/product', productRouter);
app.use('/api/review', reviewRouter);
app.use('/api/payment', paymentRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;
