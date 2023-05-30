

const BlogLinkSection = () => {
    const linkData = [
        {
            _id: "link001",
            title: "4 Blog Headlines Generated",
            active: true
        },
        {
            _id: "link002",
            title: "Create original content that ranks for SEO",
            active: false
        },
        {
            _id: "link003",
            title: "Any mechanical keyboard enthusiasts in design?",
            active: false
        },
        {
            _id: "link004",
            title: "The More Important the Work, the More Important the Rest",
            active: false
        },
        {
            _id: "link005",
            title: "How to design a product that can grow itself 10x in year",
            active: false
        },
        {
            _id: "link006",
            title: "Any mechanical keyboard enthusiasts in design?",
            active: false
        }
    ]
    return (
        <div className="bg-[#282A37] min-w-full md:min-w-[740px] mx-auto md:mx-0">
            <div className="p-4 w-full">
                <div className="flex">
                    <div className="w-[10px] h-[10px] bg-[#F23936] rounded-full mr-2"></div>
                    <div className="w-[10px] h-[10px] bg-[#FABB18] rounded-full mr-2"></div>
                    <div className="w-[10px] h-[10px] bg-[#45C646] rounded-full mr-2"></div>
                </div>
                <div className="mx-1">

                    <div>
                        {
                            linkData.map((data, index) => {
                                return <div key={data?._id}
                                    className={`pt-[22px] pb-[19px] ${(linkData.length - 1) == index ? "" : "border-b border-b-[#313342]"} text-[16px] ${data.active ? "text-[#696A73]" : "text-[#FFFFFF]"}`}>
                                    <p>{data?.title}</p>

                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogLinkSection;