import "./testimonial.css";
import user1 from "../../assets/images/testimonials/user1.png";
import user2 from "../../assets/images/testimonials/user2.png";
import user3 from "../../assets/images/testimonials/user3.png";
import user4 from "../../assets/images/testimonials/user4.png";
import user5 from "../../assets/images/testimonials/user5.png";
import user6 from "../../assets/images/testimonials/user6.png";
import user7 from "../../assets/images/testimonials/user7.png";
import user8 from "../../assets/images/testimonials/user8.png";
import twitterIcon from "../../assets/images/testimonials/twitter-icon.png";
import Image from "next/image";

const TestimonialSection = () => {
    const testimonials = [
        {
            _id: "testimonial001",
            image: user1,
            name: "Darrell Steward",
            email: "@darrels",
            review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
            hash: "#another"
        },
        {
            _id: "testimonial002",
            image: user2,
            name: "Leslie Alexander",
            email: "@lesslie",
            review: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
            hash: "#postcrafts"
        },
        {
            _id: "testimonial003",
            image: user3,
            name: "Jenny Wilson",
            email: "@jennywilson",
            review: "This is a top quality product. No need to think twice before making it live on web.",
            hash: "#make_it_fast"
        },
        {
            _id: "testimonial004",
            image: user4,
            name: "Kristin Watson",
            email: "@kristinwatson2",
            review: "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
            hash: "#postcrafts"
        },
        {
            _id: "testimonial005",
            image: user5,
            name: "Guy Hawkins",
            email: "@jennywilson",
            review: "This is a top quality product. No need to think twice before making it live on web.",
            hash: "#make_it_fast"
        },
        {
            _id: "testimonial006",
            image: user6,
            name: "Marvin McKinney",
            email: "@jennywilson",
            review: "With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.",
            hash: "#dev #tools"
        },
        {
            _id: "testimonial007",
            image: user7,
            name: "Annette Black",
            email: "@jennywilson",
            review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
            hash: "#another"
        },
        {
            _id: "testimonial008",
            image: user8,
            name: "Floyd Miles",
            email: "@jennywilson",
            review: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
            hash: "#postcrafts"
        }
    ]
    return (
        <div className="mx-20 pt-3 md:pt-5">
            <div className="pb-[60px] md:pb-[120px]">
                <div className="text-center py-[40px] md:py-[88px]">
                    <h1 className="text-[42px] mx-4 mb-[19px]">What our customers say</h1>
                    <p className="text-[18px] text-[#FAFAFA] mx-4">Read why thousands of marketers, writers, and <br /> entrepreneurs love us so much.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                    {
                        testimonials.map(data => {
                            return <div key={data?._id} className="bg-[#FFFFFF] rounded-md mx-auto text-[#12141D]">
                                <div className="px-[20px] py-[28px]">
                                    <div className="flex justify-between items-start mb-[25px]">
                                        <div className="flex justify-start items-center">
                                            <div className="flex justify-start items-center">
                                                <div className="mr-2 md:mr-3">
                                                    <Image
                                                        src={data?.image}
                                                        alt="User"
                                                    ></Image>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <p className="text-[16px] font-semibold">{data?.name}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[#12141D] text-[13px]">{data?.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <Image
                                                    src={twitterIcon}
                                                    alt="TwitterIcon"
                                                ></Image>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>
                                                {data?.review}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[#0EA5E9]">
                                                {data?.hash}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;