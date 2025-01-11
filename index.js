const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Product Data
const products = [

    { id: 1, name: "Laptop", price: 1200, category: "electronics", images: "https://images.jdmagicbox.com/quickquotes/images_main/dell-2-in-1-laptops-16-03-2022-097-271077725-kpelxawn.jpg", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 2, name: "dell new", price: 800, category: "electronics", images: "https://images.jdmagicbox.com/quickquotes/images_main/dell-2-in-1-laptops-16-03-2022-097-271077725-kpelxawn.jpg", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 3, name: "T-shirt", price: 20, category: "clothing", images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROY84097irVpIvoiPwVaEB3G-mXQuprfaADQ&s", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 4, name: "jeans", price: 200, category: "clothing", images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAMoY9_osRqywOSIOOPuLk7sQjCo4e_jBjA&s", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 5, name: "shoes", price: 200, category: "clothing", images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ91znJ3GkZNj69oh71Tax1OxQJqYAc-1g0w&s", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 6, name: "watch", price: 200, category: "electronics", images: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 7, name: "mobile", price: 200, category: "electronics", images: "https://m.media-amazon.com/images/I/61fDxgcyBDL._AC_UF1000,1000_QL80_.jpg", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 8, name: "laptop", price: 200, category: "electronics", images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRuxUdVJw3aHz3jQNHpY9Ou3JpHh4rdUhDQ&s", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 9, name: "t-shirt", price: 499, category: "clothing", images: "https://m.media-amazon.com/images/I/71RbNl4-w-L._AC_UY1100_.jpg", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { id: 10, name: "headphone", price: 600, category: "electronics", images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXboOJdDuqVvlP1n1DeHsy382dO7ZjFfhUCA&s", description: "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit" },

    //next 10
    {id:11,name:"earrings",price:200,category:"jwellery",images:"https://rukminim2.flixcart.com/image/850/1000/xif0q/earring/d/w/g/na-kundan-earrings-grey-nidzzalifestyle-original-imagjevxrhupdzzj.jpeg?q=90&crop=false",description:"lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit"},
    {id:12,name:"necklace",price:840,category:"jwellery",images:"https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/l/8/o/cultured-na-1-plkl100ssjkog-tonolika-jewellery-original-imah34pfksxprew5.jpeg?q=20&crop=false",description:"lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit"},
    {id:13,name:"handmade jwellery",price:200,category:"jwellery",images:"https://m.media-amazon.com/images/I/91NFL1RIDvL._AC_UY1100_.jpg",description:"lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit"},
    {id:14,name:"bone-china dinnerset",price:"1550",category:"kitchen",images:"https://5.imimg.com/data5/SELLER/Default/2024/8/444517307/EX/WN/BP/226525684/bone-china-dinner-sets.jpg",description:"lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit"},
    


    
        {
            "id": 15,
            "name": "Microwave Oven",
            "price": 680.61,
            "category": "Home Appliances",
            "description": "Energy efficient and reliable",
            "images": "https://rukminim2.flixcart.com/image/850/1000/xif0q/microwave-new/n/n/i/-original-imagk3hjy9kveyzw.jpeg?q=90&crop=false"
        },
        {
            "id": 16,
            "name": "Painteen Shampoo",
            "price": 529.97,
            "category": "beauty",
            "description": "Comfortable and trendy",
            "images": "https://cdn11.bigcommerce.com/s-xyx0x9ybhg/images/stencil/1280x1280/products/584/9033/51wZC83hRrL._SL1500___93875.1721206681.jpg?c=2&imbypass=on"
        },
        {
            "id": 17,
            "name": "Wireless Headphones",
            "price": 112.49,
            "category": "electronics",
            "description": "High quality and durable",
            "images": "https://images-cdn.ubuy.co.in/656a945223ff6745f332db44-new-onn-true-wireless-headphones-with.jpg"
        },
        {
            "id": 18,
            "name": "Smartphone",
            "price": 575.68,
            "category": "electronics",
            "description": "Made with premium materials",
            "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ikb3cS7itFdG0DzklvapiOIpKmmraos63w&s"
        },
        {
            "id": 19,
            "name": "Cookbook",
            "price": 366.61,
            "category": "kitchen",
            "description": "Comfortable and trendy",
            "images": "https://marketplace.canva.com/EAFpS1ceGQQ/1/0/1003w/canva-colorful-modern-cookbook-book-cover-YTEX1G_wu18.jpg"
        },
        {
            "id": 20,
            "name": "Face Cream",
            "price": 862.15,
            "category": "beauty",
            "description": "High quality and durable",
            "images": "https://m.media-amazon.com/images/I/512dChFNuXL.jpg"
        },
        {
            "id": 21,
            "name": "Running Shoes",
            "price": 972.49,
            "category": "clothing",
            "description": "Compact and stylish design",
            "images": "https://www.jiomart.com/images/product/original/rvakncpssk/inklenzo-blue-casual-shoes-sneaker-canvas-for-mens-daily-use-shoe-for-boys-shoe-for-men-product-images-rvakncpssk-0-202302051603.jpg?im=Resize=(500,630)"
        },
        {
            "id": 22,
            "name": "study table",
            "price": 254.83,
            "category": "furniture",
            "description": "Best in class performance",
            "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2Ap4jdSpeQUnT433z8d4tfxokt0EkNNqsg&s"
        },
        {
            "id": 23,
            "name": "Coffee Maker",
            "price": 436.48,
            "category": "electronics",
            "description": "A must-have for enthusiasts",
            "images": "https://myborosil.com/cdn/shop/files/BCM55W01_1.jpg"
        },
        {
            "id": 24,
            "name": "Winter Jacket",
            "price": 802.9,
            "category": "clothing",
            "description": "Best in class performance",
            "images": "https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/a/c/y/m-no-slc-women-winter-jackets-slc-original-imags224bm6hpmvg.jpeg?q=20&crop=false"
        },
        {
            "id": 25,
            "name": "table",
            "price": 120.01,
            "category": "furniture",
            "description": "Best in class performance",
            "images": "https://images.woodenstreet.de/image/cache/data%2Fstudy-table%2Fnettle-study-table%2Frevised%2Fhoney%2Fupdated%2Fnew-logo%2F1-750x650.jpg"
        },
        {
            "id": 26,
            "name": "Seat Covers",
            "price": 615.55,
            "category": "Sports",
            "description": "Advanced features included",
            "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5WpickXLflVC5ASrnz4IH4Lbdcjy_ASWFQ&s"
        },
        {
            "id": 27,
            "name": "Dollhouse",
            "price": 323.77,
            "category": "furniture",
            "description": "A must-have for enthusiasts",
            "images": "https://skillotoys.com/cdn/shop/products/casa-websiteproducts5.25.jpg?v=1689869381"
        },
        {
            "id": 28,
            "name": "Office Chair",
            "price": 711.82,
            "category": "furniture",
            "description": "Advanced features included",
            "images": "https://cellbell.in/cdn/shop/files/038_4.png?v=1715064457"
        },
        {
            "id": 29,
            "name": "Bookshelf",
            "price": 12.83,
            "category": "furniture",
            "description": "Energy efficient and reliable",
            "images": "https://ganpatiarts.com/cdn/shop/products/BOOK-SHELF-8.jpg?v=1710313360&width=1214"
        },
        {
            "id": 30,
            "name": "ring",
            "price": 226.32,
            "category": "jewellery",
            "description": "Energy efficient and reliable",
            "images": "https://rukminim2.flixcart.com/image/850/1000/xif0q/ring/y/k/n/adjustable-1-rose-mkr147-ring-myki-original-imaghfvvhtdwr3fc.jpeg?q=90&crop=false"
        },
        {
            "id": 31,
            "name": "Notebook",
            "price": 507.87,
            "category": "electronics",
            "description": "Lightweight and portable",
            "images": "https://m.media-amazon.com/images/I/61TJrv6abxL.jpg"
        },
        {
            "id": 32,
            "name": "Dinner Set",
            "price": 669.3,
            "category": "kitchen",
            "description": "Compact and stylish design",
            "images": "https://www.claycraftindia.com/cdn/shop/products/DS40-NEWGEORGIAN-EBONY-E667copy.jpg?v=1629466892"
        },
        {
            "id": 33,
            "name": "Coffee Maker",
            "price": 54.65,
            "category": "kitchen",
            "description": "Best in class performance",
            "images": "https://images-cdn.ubuy.co.in/653fc5a70fdd3b03d3619ee4-mainstays-black-5-cup-drip-coffee-maker.jpg"
        },
        {
            "id": 34,
            "name": "cookbook",
            "price": 801.19,
            "category": "kitchen",
            "description": "Comfortable and trendy",
            "images": "https://m.media-amazon.com/images/I/91vmlgy6X-L._AC_UF1000,1000_QL80_.jpg"
        }
    
    





];

// Routes
app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app as a Vercel serverless function
module.exports = (req, res) => {
    app(req, res);
};