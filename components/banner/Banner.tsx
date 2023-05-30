import Image from "next/image";
import Button from "../button/Button";
import playIcon from "../../assets/icons/play.png";
import "./banner.css";

const Banner = () => {
    return (
        <div className='text-center banner py-[60px] md:py-[125px]'>
            <div>
                <h1 className="text-3xl md:text-5xl">
                    Write better <br />
                    content for your <br /> <span id="fancy-link" className='ad-text'> Facebook Ads </span>
                </h1>
            </div>

            <div className="mt-5 md:mt-10">
                <p className="text-[#FAFAFA] text-sm">
                    Artificial intelligence writting tool helps you create blogs,
                    <br />
                    social media websites and much more.
                </p>
            </div>
            <div className="mt-8 md:mt-12">
                <Button>
                    Start 14 Days Free Trial
                </Button>
            </div>

            <div className="flex justify-center items-center mt-2">
                <button className="play-btn btn bg-[#12141D] border-[#12141D] capitalize hover:rounded">
                    <div className="flex justify-center items-center">

                        <div className="mx-1">
                            <Image
                                className="play-icon"
                                src={playIcon}
                                alt="Play Icon"
                                width={15}
                                height={15}>

                            </Image>
                        </div>
                        <div>
                            <p className="text-[16px] play-icon-text">Watch A Demo</p>
                        </div>
                    </div>
                </button>


            </div>

            {/* <div className="flex justify-center items-center">
                <button>

                    <div>
                        <Image
                            className="mx-1"
                            src={playIcon}
                            alt="Play-Icon"
                            width={15}
                            height={15}>
                        </Image>
                    </div>

                    <p className="text-[16px]">
                        Watch A Demo
                    </p>


                </button>
            </div> */}
        </div >
    );
};

export default Banner;