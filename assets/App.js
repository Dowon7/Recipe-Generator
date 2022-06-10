import styled from "styled-components";
import "./App.css";

const AppContainer = styled.div`
    width: 100%;
    height: 100%
    display: flex;
    justify-content: center;
    margin-top: 7em;
`;

function App() {
    return <AppContainer>Hello World</AppContainer>;
}

export default App;