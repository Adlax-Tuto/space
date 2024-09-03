import styled from "styled-components";

export const Wrapper = styled.div`
	border: 1px solid var(--clr-violet-2);
	border-radius: 10px;
	background-color: var(--clr-bkg-5);
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-size: 3rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	img {
		width: 100%;
		height: 80%;
		object-fit: cover;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	&:hover {
		box-shadow: 5px 5px 5px var(--clr-violet-2);
		transform: translate(-4px, -4px);
	}
`;
