import "./CustomButton.scss";

const CustomButton = ({ onClick, children }) => {
    <div className="custom-botton-container" onClick={onClick}>
        {children}
    </div>;
};

<CustomButton>Sair</CustomButton>;

export default CustomButton;
