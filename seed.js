const mongoose = require('mongoose');
const Blog = require('./models/blog');

const arr = [
    {
        title: 'War Movie',
        img1: 'https://images.pexels.com/photos/8844609/pexels-photo-8844609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        author: 'Tejesh Bharadwaj',
        para1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img2: 'https://images.pexels.com/photos/8844609/pexels-photo-8844609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img3: 'https://images.pexels.com/photos/8844609/pexels-photo-8844609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img4: 'https://images.pexels.com/photos/8844609/pexels-photo-8844609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para4: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
    },
    {
        title: 'War Movie',
        img1: 'https://images.pexels.com/photos/8844608/pexels-photo-8844608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        author: 'Madhur Bharadwaj',
        para1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img2: 'https://images.pexels.com/photos/8844608/pexels-photo-8844608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img3: 'https://images.pexels.com/photos/8844608/pexels-photo-8844608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img4: 'https://images.pexels.com/photos/8844608/pexels-photo-8844608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para4: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
    },
    {
        title: 'War Movie',
        img1: 'https://images.pexels.com/photos/8844594/pexels-photo-8844594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        author: 'Lalit',
        para1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img2: 'https://images.pexels.com/photos/8844594/pexels-photo-8844594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img3: 'https://images.pexels.com/photos/8844594/pexels-photo-8844594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img4: 'https://images.pexels.com/photos/8844594/pexels-photo-8844594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para4: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
    },
    {
        title: 'War Movie',
        img1: 'https://images.pexels.com/photos/8844590/pexels-photo-8844590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        author: 'Tushar Bharadwaj',
        para1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img2: 'https://images.pexels.com/photos/8844590/pexels-photo-8844590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img3: 'https://images.pexels.com/photos/8844590/pexels-photo-8844590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
        img4: 'https://images.pexels.com/photos/8844590/pexels-photo-8844590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        para4: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta eaque blanditiis harum laborum eius quo accusantium quos, non facere! Doloremque ullam saepe iure exercitationem necessitatibus sint, eaque quas veritatis.',
    }
]

function seedDB(){
    Blog.insertMany(arr)
    .then(()=>{
        console.log('DB Seeded :)')
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports = seedDB;