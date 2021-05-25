const stripe= require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req,res) => {
    const {items,email} = req.body;

    const transformedItems = items.map(item => ({
        description : item.description,
        quantity:1,
        price_data: {
            currency:'usd',
            unit_amount:item.price * 100,
            product_data:{
                name:item.title,
                images:[item.image]
            },
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates:["shr_1IuAF3BtlSsUh3qO4A6ISUNX"],
        shipping_address_collection:{
            allowed_countries:['GB','US','CA']
        },
        line_items: transformedItems,
        mode:'payment',
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/checkout`,
        metadata:{
            email,
            images:JSON.stringify(items.map(item => item.image)),
        },
    })

    res.status(200).json({id: session.id})
}

// import { groupBy } from "lodash";

// const stripe = require("stripe")("pk_test_51Iu6RNBtlSsUh3qObHQiXrRXiivzxHBoT8yKW17e4RxL1H0TMj9AfYIYzD7QqgnBfZKZasKfgZV0OmU0fGC34hFz00YQpjtlcP")

// export default async (req, res) => {
//     const { items, email } = req.body;

//     const groupedItems = Object.values(groupBy(items, "id"));

//     const transformedItems = groupedItems.map((group) => ({
//         description: group[0].description,
//         quantity: group.length,
//         price_data: {
//             currency: "usd",
//             unit_amount: group[0].price * 100,
//             product_data: {
//                 name: group[0].title,
//                 images: [group[0].image],
//             },
//         },
//     }));

//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         shipping_rates: ["shr_1IuAF3BtlSsUh3qO4A6ISUNX"],
//         shipping_address_collection: {
//             allowed_countries: ["GB", "US", "CA", "FR", 'IN'],
//         },
//         line_items: transformedItems,
//         mode:'payment',
//         success_url: `${process.env.HOST}/success`,
//         cancel_url: `${process.env.HOST}/checkout`,
//         metadata: {
//             email,
//             images: JSON.stringify(items.map((item) => item.image)),
//         },
//     });

//     console.log("session created!", session.id);

//     res.status(200).json({ id: session.id });
// };