import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import PokemonLogoPng from "../../assets/pokemon-logo.9253c457.png";

const LogoBoxStyled = styled(Box)`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const ComponentsUILayout: React.FC = ({children}) => {
    return (
        <Container maxWidth="xl">
            <LogoBoxStyled>
                <img alt="Pokemon" src={PokemonLogoPng} width={400} />
            </LogoBoxStyled>
            {children}
        </Container>
    );
}