import { mongooseConnect } from '@/lib/mongoose'
import { Order } from '@/models/Order';
import { Product } from '@/models/Product'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: 'Only POST requests allowed' });
        return;
    }

    try {
        const { name, email, phone, street, locality, city, state, country, pincode, cartProducts } = req.body;
        await mongooseConnect();
        const productIds = cartProducts;
        const uniqueProductIds = [...new Set(productIds)];
        const productsInfos = await Product.find({ _id: uniqueProductIds });

        let line_items = [];
        for (const productId of uniqueProductIds) {
            const info = productsInfos.find(p => p._id.toString() === productId);
            const quantity = productIds.filter(id => id === productId)?.length || 0;
            if (quantity > 0 && info) {
                line_items.push({
                    quantity,
                    price_data: {
                        currency: 'INR',
                        product_data: { name: info.name },
                        unit_amount: quantity * info.price * 100
                    }
                });
            }
        }

        const orderDoc = await Order.create({
            line_items, name, email, phone, street, locality, city, state, country, pincode, paid: false
        })

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            customer_email: email,
            success_url: process.env.PUBLIC_URL + '/cart?success=1',
            cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
            metadata: { orderId: orderDoc._id.toString() }
        })

        res.json({
            url: session.url
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
