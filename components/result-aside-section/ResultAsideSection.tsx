import Image from "next/image";
import image from "../../assets/images/absolute/result.png";
import "./resultAside.css"
const ResultAsideSection = () => {
    return (
        <div className="relative mx-auto">
            <div className="h-[450px] md:w-full lg:w-[400px] bg-[#FFFFFF] text-[#12141D] rounded-[10px] overflow-y-hidden overflow-x-clip result-aside-bg">
                <div className="mx-[27px] pt-[17px]">
                    <p className="text-[18px] font-medium">Result</p>
                    <p className="text-[14px] text-[#818488]">{"Here's what our AI came up with."}</p>
                    <div className="my-[20px] bg-[#F4F6FF] mb-[17px]">
                        <div className="p-[16px] text-[14px]">
                            <p className="mb-4">
                                Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.
                            </p>
                            <p className="mb-4">
                                Agitate: You have no idea how much sales tax to charge your customers in each state.
                            </p>
                            <p>
                                Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!
                            </p>
                        </div>
                    </div>
                    <div className="p-[16px] text-[14px] bg-[#F4F6FF]">
                        <p className="mb-4 ">
                            Agitate: Sales tax is a complicated, confusing and expensive nightmare for e-commerce business owners.
                        </p>
                        <p className="mb-4">
                            Solution: Let TaxHero handle all of your sales tax compliance needs so you can focus on growing your business.
                        </p>
                        <p className="mb-4">
                            Agitate: You have no idea how much sales tax to charge your customers in each state.
                        </p>
                        <p>
                            Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!
                        </p>
                    </div>
                </div>

            </div>
            <div>
                <Image
                    className="absolute -bottom-1 -right-40"
                    src={image}
                    alt="Process"
                >
                </Image>
            </div>
        </div>

    );
};

export default ResultAsideSection;
