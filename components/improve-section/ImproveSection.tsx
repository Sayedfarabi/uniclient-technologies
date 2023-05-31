import "./improveSection.css";
const ImproveSection = () => {
    return (
        <div className="py-[24px] md:py-[42px]">
            <div className="gradient-bg rounded-[10px] flex-none md:flex justify-between items-center px-8 py-4 md:px-12 md:py-7">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <p className=" text-[20px] md:text-[32px]">It will help you improve your writing & bring ideas more c learly.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-center md:text-end">
                        <button className="py-[18px] px-5 bg-[#FFFFFF] text-[#12141D] rounded-[5px] font-semibold">Start 14 Days Free Trial</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImproveSection;