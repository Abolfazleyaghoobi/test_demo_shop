import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
export default function FeaturesBar() {
    const features = [
      {
        icon: <BsBoxSeam  />,
        title: "Free Shipping",
        desc: "Free shipping for order above $150",
      },
      {
        icon: <AiOutlineDollar />,
        title: "Money Guarantee",
        desc: "Within 30 days for an exchange",
      },
      {
        icon: <BiSupport />,
        title: "Online Support",
        desc: "24 hours a day, 7 days a week",
      },
      {
        icon: <CiCreditCard1 />,
        title: "Flexible Payment",
        desc: "Pay with multiple credit cards",
      },
    ];
  
    return (
        <section className="w-full py-10 transition-colors">
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
      
          {features.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="text-3xl dark:text-blue-200">{item.icon}</div>
      
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
      
        </div>
      </section>
      
    );
  }
  