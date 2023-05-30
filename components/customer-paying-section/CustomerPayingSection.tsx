import icon1 from "../../assets/images/paying-customers/waverio-icon.png";
import text1 from "../../assets/images/paying-customers/waverio-text.png";
import icon2 from "../../assets/images/paying-customers/squireStone-icon.png";
import text2 from "../../assets/images/paying-customers/squireStone-text.png";
import icon3 from "../../assets/images/paying-customers/martino-icon.png";
import text3 from "../../assets/images/paying-customers/martino-text.png";
import icon4 from "../../assets/images/paying-customers/Virogan-icon.png";
import text4 from "../../assets/images/paying-customers/Vertex-text.png";
import icon5 from "../../assets/images/paying-customers/vertex-icon.png";
import text5 from "../../assets/images/paying-customers/Vertex-text.png";
import icon6 from "../../assets/images/paying-customers/aromix-icon.png";
import text6 from "../../assets/images/paying-customers/aromix-text.png";
import icon7 from "../../assets/images/paying-customers/firely-icon.png";
import text7 from "../../assets/images/paying-customers/fireli-text.png";
import text8 from "../../assets/images/paying-customers/Natroma-text.png";
import { text } from "stream/consumers";
import Customer from "../customer/Customer";
import Image from "next/image";

const CustomerPayingSection = () => {
    const customers = [
        {
            _id: "customer001",
            logo: icon1,
            text: text1
        },
        {
            _id: "customer002",
            logo: icon2,
            text: text2
        },
        {
            _id: "customer003",
            logo: icon3,
            text: text3
        },
        {
            _id: "customer004",
            logo: icon4,
            text: text4
        },
        {
            _id: "customer005",
            logo: icon5,
            text: text5
        },
        {
            _id: "customer006",
            logo: icon6,
            text: text6
        },
        {
            _id: "customer007",
            logo: icon7,
            text: text7
        },
        {
            _id: "customer008",
            logo: "",
            text: text8
        }
    ]
    return (
        <div>
            <div className="my-10 md:my-20">
                <p className="text-center">Trusted by nearly 5000+ paying customers</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                <div className="flex justify-center items-center mx-auto">
                    <div className="mr-2">
                        <div>
                            <Image
                                src={icon1}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={text1}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center mx-auto">
                    <div className="mr-2">
                        <div>
                            <Image
                                src={icon2}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={text2}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center mx-auto">
                    <div className="mr-2">
                        <div>
                            <Image
                                src={text3}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={icon3}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center mx-auto">
                    <div className="mr-2">
                        <div>
                            <Image
                                src={icon4}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={text4}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center mx-auto">
                    <div className="mr-2">
                        <div>
                            <Image
                                src={icon5}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={text5}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center mx-auto">
                    <div className="mr-2">
                        <div>
                            <Image
                                src={icon6}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={text6}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center mx-auto">
                    <div className="mr-2">
                        <div>
                            <Image
                                src={icon7}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                src={text7}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center items-center mx-auto">

                    <div>
                        <div>
                            <Image
                                src={text8}
                                alt="Icon">

                            </Image>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomerPayingSection;