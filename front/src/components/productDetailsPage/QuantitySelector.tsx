import * as React from "react";
import {styled} from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const QuantitySelector: React.FC = () => {
    const [quantity, setQuantity] = React.useState(1);

    const handleIncrement = () => {
        setQuantity((prev) => Math.min(prev + 1, 99));
    };

    const handleDecrement = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
    };

    return (
        <StyledContainer>
            <StyledButton onClick={handleDecrement}>
                <RemoveIcon fontSize="small"/>
            </StyledButton>
            <StyledNumber>{quantity}</StyledNumber>
            <StyledButton onClick={handleIncrement}>
                <AddIcon fontSize="small"/>
            </StyledButton>
        </StyledContainer>
    );
};

export default QuantitySelector;

const StyledContainer = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #8000ff;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    width: 120px;
`;

const StyledButton = styled("button")`
    border: none;
    background: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }
`;

const StyledNumber = styled("span")`
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    width: 30px;
`;
