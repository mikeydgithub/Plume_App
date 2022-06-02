const db = require('./connection');
const { User, Product, Category } = require('../models');
db.once('open', async () => {
  await Category.deleteMany();
  const categories = await Category.insertMany([
    { name: 'Edibles' },
    { name: 'Flower' },
    { name: 'Vape Pens' },
  ]);
  console.log('categories seeded');
  await Product.deleteMany();
  const products = await Product.insertMany([
    {
      name: 'Chocolate Bars 100mg',
      description:
        'Delicious homemade chocolate.',
      image: 'Chocolate-Bars.jpg',
      category: categories[0]._id,
      thc: '22%',
       CBD: '15%',
      price: 15.99,
      quantity: 200
    },
    {
      name: 'Brownies 100mg',
      description:
        'Delicious homemade brownies.',
      image: 'Brownies-Brownie.jpg',
      category: categories[0]._id,
      price: 15.99,
      quantity: 200
    },
    {
      name: 'CBD OIL 50%',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'cbd_oil2.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'CBD OIL 75%',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'cbd_oil1.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Vape Pen Miami Splice 90%',
      category: categories[2]._id,
      description:
        'Get retro Miami vibes.',
      image: 'vape1.jpg',
      price: 49.99,
      quantity: 30
    },
    {
      name: 'Vape Pen Bubble Bath 85%',
      category: categories[2]._id,
      description:
        'Time to take a bath and add some bubbles. You will need it!',
      image: 'vape2.jpg',
      price: 49.99,
      quantity: 30
    },
  ]);
  console.log('products seeded');
  await User.deleteMany();
  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });
  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });
  console.log('users seeded');
  process.exit();
});