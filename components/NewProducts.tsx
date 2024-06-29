import { title } from 'process'
import React from 'react'
import ProductCard from './ProductCard'

const productData = [
    {
        img: "gmb1.jpeg",
        title: "Toner",
        desc:"Toner terbaik untuk menghidrasi kulit",
        rating:5,
        price:"69.000",
    },
    {
        img: "gmb2.jpeg",
        title: "Toner",
        desc:"Toner terbaik untuk menghidrasi kulit",
        rating:5,
        price:"85.000",
    },
    {
        img: "gmb3.jpeg",
        title: "Toner",
        desc:"Toner terbaik untuk menghidrasi kulit",
        rating:5,
        price:"105.000",
    },
    {
        img: "gmb4.jpeg",
        title: "Toner",
        desc:"Toner terbaik untuk menghidrasi kulit",
        rating:5,
        price:"95.000",
    },
    {
        img: "gmb5.jpeg",
        title: "Toner",
        desc:"Toner terbaik untuk menghidrasi kulit",
        rating:5,
        price:"85.000",
    },
    {
        img: "gmb6.jpeg",
        title: "Toner",
        desc:"Toner terbaik untuk menghidrasi kulit",
        rating:5,
        price:"170.000",
    },
    {
        img: "gmb7.jpeg",
        title: "Toner",
        desc:"Toner terbaik untuk menghidrasi kulit",
        rating:5,
        price:"87.000",
    },
    {
        img: "gmb8.jpeg",
        title: "Toner",
        desc:"Toner terbaik untuk menghidrasi kulit",
        rating:5,
        price:"92.000",
    },
];

const NewProducts = () => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">

        {productData.map((item, index)=> ( <ProductCard key={index}
        img={item.img}
        title={item.title} 
        desc={item.desc}
        rating={item.rating}
        price={item.price}
        />
    ))}    
        </div>
        </div>
    </div>
  )
}

export default NewProducts
