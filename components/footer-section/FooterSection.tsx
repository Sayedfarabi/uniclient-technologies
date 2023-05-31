

const FooterSection = () => {
    const footerData = [
        {
            _id: "category001",
            title: "Company",
            items: [
                {
                    _id: "About001",
                    item: "About"
                },
                {
                    _id: "Features002",
                    item: "Features"
                },
                {
                    _id: "Works003",
                    item: "Works"
                },
                {
                    _id: "Career004",
                    item: "Career"
                }
            ]
        },
        {
            _id: "category002",
            title: "Help",
            items: [
                {
                    _id: "CustomerSupport001",
                    item: "Customer Support"
                },
                {
                    _id: "DeliveryDetails002",
                    item: "Delivery Details"
                },
                {
                    _id: "Terms&Conditions003",
                    item: "Terms & Conditions"
                },
                {
                    _id: "PrivacyPolicy004",
                    item: "Privacy Policy"
                }]
        },
        {
            _id: "category003",
            title: "Resources",
            items: [
                {
                    _id: "FreeeBooks001",
                    item: "Free eBooks"
                },
                {
                    _id: "DevelopmentTutorial002",
                    item: "Development Tutorial"
                },
                {
                    _id: "Howto-Blog003",
                    item: "How to - Blog"
                },
                {
                    _id: "YoutubePlaylist004",
                    item: "Youtube Playlist"
                }]
        },
        {
            _id: "category004",
            title: "Links",
            items: [
                {
                    _id: "FreeeBooks0001",
                    item: "Free eBooks"
                },
                {
                    _id: "DevelopmentTutorial0002",
                    item: "Development Tutorial"
                },
                {
                    _id: "Howto-Blog0003",
                    item: "How to - Blog"
                },
                {
                    _id: "YoutubePlaylist0004",
                    item: "Youtube Playlist"
                }]
        }
    ]
    return (
        <div className="pb-8 md:pb-12">
            <div className="py-8 md:py-12">
                <div className="flex-none md:flex justify-between items-start">
                    {
                        footerData.map(data => {
                            return <div key={data?._id}
                                className="mb-5 md:mb-0">
                                <div className="text-[16px] mb-3 md:mb-6 font-semibold">
                                    <p>{data?.title}</p>
                                </div>
                                <div>
                                    {data.items.map(item => {
                                        return <p key={item?._id}
                                            className="text-[14px] leading-6 md:leading-10">
                                            {item?.item}
                                        </p>
                                    })}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FooterSection;