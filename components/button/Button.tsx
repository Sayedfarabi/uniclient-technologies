import "./button.css";

const Button = ({ children }: any) => {
    return (
        <div>
            <a href="" className="action">
                <button className="btn gradient-button capitalize">
                    {children}
                </button>
            </a>
        </div>
    );
};

export default Button;