

const Customer = ({ data }: any) => {
    return (
        <div className="flex justify-center items-center mx-auto">
            <div className="mr-2">
                <div>
                    <img src={data?.logo} alt="icon" />
                </div>
            </div>
            <div>
                <div>
                    <img src={data?.text} alt="name" />
                </div>
            </div>

        </div>
    );
};

export default Customer;