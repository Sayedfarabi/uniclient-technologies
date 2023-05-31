

const MakeDecisionSection = () => {
    const inactiveBtn = "inactive-btn bg-[#282A37] border border-[#12141D] p-2 md:p-3 capitalize w-full";
    const activeBtn = "active-btn text-center w-full capitalize p-2 md:p-3 capitalize";

    const cardData = [
        {
            _id: "card001",
            title: "Starter Plan",
            price: "$29",
            paragraph: "This package is suitable for teams 1-15 people.",
            body: [
                {
                    line: "10 GB Dedicated Hosting Free"
                },
                {
                    line: "Best for Developers, Freelancers"
                },
                {
                    line: "1 Year Support"
                }
            ],
            active: false
        },
        {
            _id: "card002",
            title: "Basic Plan",
            price: "$79",
            paragraph: "This package is suitable for teams 1-50 people.",
            body: [
                {
                    line: "15 GB Dedicated Hosting Free"
                },
                {
                    line: "Best for Developers, Freelancers"
                },
                {
                    line: "5 Year Support"
                },
                {
                    line: "Free Custom Domain"
                },
                {
                    line: "Basic Statistics"
                },
            ],
            active: true
        },
        {
            _id: "card003",
            title: "Premium Plan",
            price: "$129",
            paragraph: "This package is suitable for teams 1-100 people.",
            body: [
                {
                    line: "20 GB Dedicated Hosting Free"
                },
                {
                    line: "Best for Developers, Freelancers"
                },
                {
                    line: "Unlimited Support"
                },
                {
                    line: "Free Custom Domain"
                },
                {
                    line: "Full Statistics"
                }
            ],
            active: false
        },
    ]



    return (
        <div className="py-[40px] md:py-[88px]">

            <div className="text-center mb-[67px]">
                <h1 className="text-[42px] mb-[20px]">Make the wise decision <br /> for your business</h1>
                <p className="text-[18px] text-[#FAFAFA] mx-4">Read why thousands of marketers, writers, and <br /> entrepreneurs love us so much.</p>
            </div>

            <div>
                <div className="flex-none md:flex justify-center items-start">
                    {
                        cardData.map(data => {
                            return <div key={data?._id} className="w-[330px] min-h-[554px] bg-[#282A37] rounded-[15px] mx-auto md:mx-6">
                                <div className="m-4 md:m-8 my-[30px]">
                                    <div className="h-[500px]">
                                        <div className="h-[200px]">
                                            <div className="mb-[28px]">
                                                <p className="text-[16px]">{data?.title}</p>
                                            </div>
                                            <div className="mb-[14px]">
                                                <p><span className="text-[42px] font-semibold">{data?.price}</span> <span className="text-[18px]">/month</span></p>
                                            </div>
                                            <div className="mb-[12px]">
                                                <p className="text-[14px] text-[#FAFAFA]">{data?.paragraph}</p>
                                            </div>
                                        </div>
                                        <div className="h-[280px]">
                                            <div className="mb-[15px]">
                                                <p className="text-[16px] font-bold">What’s included:</p>
                                            </div>
                                            <div>
                                                {data.body.map(p => {
                                                    return <p key={p?.line} className="text-[16px] text-[#FAFAFA] leading-[34px]">
                                                        {p.line}
                                                    </p>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[54px]">
                                        <div>
                                            <button className={`${data?.active ? activeBtn : inactiveBtn}`}>Get Started</button>
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

export default MakeDecisionSection;