import image1 from "../../assets/images/writting-tools/blog-headlines.png";
import image2 from "../../assets/images/writting-tools/blog-intros.png";
import image3 from "../../assets/images/writting-tools/blog-outline.png";
import image4 from "../../assets/images/writting-tools/blog-conclusion.png";
import image5 from "../../assets/images/writting-tools/content-writter.png";
import image6 from "../../assets/images/writting-tools/product-description.png";
import image7 from "../../assets/images/writting-tools/copywrite-formula.png";
import image8 from "../../assets/images/writting-tools/about-us.png";
import Image from "next/image";


const WritingToolsSection = () => {
    const toolsData = [
        {
            _id: "tools001",
            icon: image1,
            title: "Blog Headlines",
            body: "Write a better blog title with our A.I tool."
        },
        {
            _id: "tools002",
            icon: image2,
            title: "Blog Intros",
            body: "Generate a paragraph of blog content using Blog Intros tool"
        },
        {
            _id: "tools003",
            icon: image3,
            title: "Blog Outline",
            body: "Need an attention-grabbing headline for your article?"
        },
        {
            _id: "tools004",
            icon: image4,
            title: "Blog Conclusions",
            body: "Write a better conclusions with AI writing tool."
        },
        {
            _id: "tools005",
            icon: image5,
            title: "Content Rewriter",
            body: "Get AI writer to rewrite your sentence in a different way."
        },
        {
            _id: "tools006",
            icon: image6,
            title: "Product Description",
            body: "Need an attention-grabbing headline for your article?"
        },
        {
            _id: "tools007",
            icon: image7,
            title: "PAS Copywriting Formula",
            body: "Get AI writer to rewrite your sentence in a different way."
        },
        {
            _id: "tools008",
            icon: image8,
            title: "Company About Us",
            body: "Write a better blog title with our AI tool."
        }
    ]

    return (
        <div className="py-[100px] md:py-[153px]">
            <div className="py-8 md:py-12">
                <h1 className="text-[42px] text-center mb-2 md:mb-4">
                    54 exciting writing tools
                </h1>
                <p className="text-[18x] text-[#FAFAFA] text-center">
                    AI engines take information from various sources and read them like a human would do.
                </p>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        toolsData.map(data => {
                            return <div
                                key={data?._id}
                                className="w-full rounded-[10px] bg-[#282A37]">
                                <div className="flex justify-center items-center">
                                    <div className="flex m-[22px]">
                                        <div className="mr-[17px]">
                                            <Image
                                                src={data?.icon}
                                                alt="Icon"
                                                width={34}
                                                height={34}></Image>
                                        </div>
                                        <div>
                                            <p className="text-[16px] mb-[14px]">{data?.title}</p>
                                            <p className="text-[14px] text-[#FFFFFF]">
                                                {data?.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="mt-[68px] text-center">
                <button className="text-[16px] text-[#FAFAFA]">
                    See all 54 available tools
                </button>
            </div>
        </div>
    );
};

export default WritingToolsSection;