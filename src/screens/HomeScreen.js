import styled from "styled-components/macro";
import { Link } from 'react-router-dom';
import { useToggle, useUpdateToggle } from "./ToggleContext";

const HomeScreen = () => {
    const toggleShow = useToggle();
    const handleToggleShow = useUpdateToggle();

    return (
            <Container>
                <h1>Title Lands Here</h1>
                {toggleShow && <p>Text Lands Here</p>}
                <button onClick={handleToggleShow}>Click Me</button>
                <Link to="/context">context</Link>
            </Container>
    )
};

export default HomeScreen;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 100px;
`;