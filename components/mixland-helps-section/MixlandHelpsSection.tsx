import BlogLinkSection from "../blog-link-section/BlogLinkSection";
import MixlandHelpsButtonsSection from "../mixland-helps-buttons-section/MixlandHelpsButtonsSection";

const MixlandHelpsSection = () => {

    return (
        <div className='pt-[35px] pb-[126px]'>
            <div className='text-center text-[42px] mx-8'>
                <h1>Mixland helps you <br />
                    build beautiful website</h1>
            </div>
            <div className='py-[83px]'>
                <div className="flex-none md:flex">
                    <div>
                        <MixlandHelpsButtonsSection></MixlandHelpsButtonsSection>
                    </div>
                    <div>
                        <BlogLinkSection></BlogLinkSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MixlandHelpsSection;