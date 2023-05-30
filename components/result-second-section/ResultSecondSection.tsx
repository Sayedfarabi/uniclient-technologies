import Image from "next/image";
import image from "../../assets/images/absolute/result2.png";

const ResultSecondSection = () => {
    return (
        <div className="mx-auto">
            <div>
                <Image
                    src={image}
                    alt="Image">

                </Image>
            </div>
        </div>
    );
};

export default ResultSecondSection;