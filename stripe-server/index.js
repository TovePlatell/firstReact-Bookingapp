// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');

const app = express();
const cors = require("cors");

const stripe = require('stripe')('sk_test_51Ix6MXDhSyK2k5ddlqKTEMQZsJJPDwZVjGjxWfnXzSKSPTF6pnqAWweGelMB3F1jQWmBGz5LC5OPExHyW8GW2f7E00TNd61mJQ')

app.use(cors())


app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://60af7e8a98d39b0007b90a8b--laughing-poincare-a584b9.netlify.app',
    cancel_url: 'http://localhost:4242/cancel.html',
  });

  res.json({ id: session.id });
});

//app.listen(4242, () => console.log(`Listening on port ${4242}!`));

// http://localhost:4242