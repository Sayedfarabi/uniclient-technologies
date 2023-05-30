import Button from "../button/Button";
import "./buttonSection.css";


const MixlandHelpsButtonsSection = () => {
    const buttonData = [
        {
            _id: "button001",
            active: true,
            content: "Blog Headlines"
        },
        {
            _id: "button002",
            active: false,
            content: "Blog Intros"
        },
        {
            _id: "button003",
            active: false,
            content: "Content Rewriter"
        },
        {
            _id: "button004",
            active: false,
            content: "Facebook Ads"
        },
        {
            _id: "button005",
            active: false,
            content: "Product Description"
        },
        {
            _id: "button006",
            active: false,
            content: "PAS Copywriting Formula"
        }
    ]
    return (
        <div className="mx-auto md:mx-[48px]">
            <div className="w-[300px]">
                {
                    buttonData.map(data => {
                        return <>
                            {!!(data?.active) &&
                                <div className="w-full">
                                    <button className="active-btn text-start w-full capitalize p-2 md:p-3 my-1">{data?.content}</button>
                                </div>
                            }
                            {
                                !(data?.active) &&
                                <div className="w-full">
                                    <button className="inactive-btn bg-[#12141D] p-2 md:p-3 capitalize text-start w-full my-1 border border-[#282A37]">{data?.content}</button>
                                </div>
                            }
                        </>
                    })
                }
            </div>
        </div>
    );
};

export default MixlandHelpsButtonsSection;