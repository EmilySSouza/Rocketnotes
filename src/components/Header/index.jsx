import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/EmilySSouza.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vinda</span>
                    <strong>Emily Souza da Silva</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}