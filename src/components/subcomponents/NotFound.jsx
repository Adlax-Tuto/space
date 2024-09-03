import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
	font-size: 3rem;
	padding: 5rem 2rem;
	min-height: 50vh;
`;
const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	}, []);

	return <Wrapper>Page not found. You are about to be redirected to landing page in a couple of seconds.</Wrapper>;
};

export default NotFound;
