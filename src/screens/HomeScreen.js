import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components/macro";

const HomeScreen = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(state => !state);

    useEffect(() => {
        const everyRender = "I Will Run On Every Render";
        console.log("🚀 ~ file: App.js ~ line 11 ~ useEffect ~ everyRender", everyRender);
    });

    useEffect(() => {
        const firtRender = "I Will Run On First Render";
        console.log("🚀 ~ file: App.js ~ line 16 ~ useEffect ~ firtRender", firtRender);
    }, []);

    useEffect(() => {
        const depend = "I Will Run On First Render and Every Time State Changes";
        console.log("🚀 ~ file: App.js ~ line 21 ~ useEffect ~ depend", depend);
    }, [toggle]);
    
    return (
        <Container>
                <h1>Title Lands Here</h1>
                {toggle && (
                    <p>Text Lands Here</p>
                )}
                <button onClick={handleToggle}>Click Me</button>
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