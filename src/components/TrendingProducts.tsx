import ProductCard from "./ProductCard";

const products = [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "HeadPhones",
        title: "Gaming Headphone",
        price: "109.00"
    },
];

const TrendingProducts = () => {
    return (
        <div className="container mx-auto max-w-screen-xl mt-32">
            <div className="sm:flex justify-between items-center ">
                <h2 className="text-4xl font-medium">Trending Products</h2>
                <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                    <div className="text-black">New</div>
                    <div className="text-black">Featured</div>
                    <div className="text-black">Top Sellers</div>
                </div>
            </div>
            <div className="grid gap-6 sm:grid-cols2 md:grid-cols-3 xl:grid-cols-4 mt-8">
                {
                    products.map((item) => (
                        <ProductCard key={item.id}
                            id={item.id}
                            img={item.img}
                            category={item.category}
                            title={item.title}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingProducts;
