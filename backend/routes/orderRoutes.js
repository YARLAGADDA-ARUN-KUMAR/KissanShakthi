import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { orderItems, totalPrice, type, user } = req.body;
    try {
        if (orderItems && orderItems.length === 0) {
            return res.status(400).json({ message: 'No order items' });
        }
        const order = new Order({
            user,
            orderItems,
            totalPrice,
            type,
        });
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
