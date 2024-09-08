
import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbDiscountOff, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
    {
        icon: <TbTruckDelivery className="text-4xl" />,
        title: "Free Delivery",
        description: "Order from all items"
    },
    {
        icon: <RiRefund2Fill className="text-4xl" />,
        title: "Return & Refund",
        description: "Money back guarantee"
    },
    {
        icon: <TbDiscount className="text-4xl" />,
        title: "Member Discount",
        description: "On order over $99.00"
    },
    {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "Support 24/7",
        description: "Contact us 24 hours a day"
    },
];

const Feature = () => {
    return (
        <div className="contanier mx-auto max-w-screen-xl grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {
                data.map((item) => (
                    <FeatureCard key={item.title}
                        icon={item.icon}
                        title={item.title} 
                        desc={item.description} 
                    />
                ))
            }
        </div>
    )
}

export default Feature;