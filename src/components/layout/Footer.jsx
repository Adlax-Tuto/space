import React from "react";
import styled from "styled-components";
import { BiLogoNetlify } from "react-icons/bi";

const Wrapper = styled.section`
	border-top: 1px solid var(--clr-violet-2);
	font-size: 2.5rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	height: 10vh;
	color: var(--clr-violet-3);
	justify-content: center;
	align-items: center;
	background: rgb(0, 0, 0);
	div {
		/* border: 1px solid white; */
	}

	div:nth-child(1) {
		text-align: start;
		padding-left: 1rem;
	}
	div:nth-child(2) {
		text-align: center;
	}
	div:nth-child(3) {
		text-align: end;
		padding-right: 1rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		p {
			/* border: 1px solid white; */
			display: grid;
			place-content: center;
			a {
				display: grid;
				place-content: center;
			}
		}
	}
	.icon {
		font-size: 3rem;
	}
	@media screen and (max-width: 1100px) {
		font-size: 2rem;
	}
	@media screen and (max-width: 800px) {
		font-size: 1.5rem;
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
		div:nth-child(1),
		div:nth-child(3) {
			padding: 0;
		}
		div {
			/* border: 1px solid white; */
			width: fit-content;
			margin: auto;
			.icon {
				font-size: 2rem;
			}
		}
	}
	@media screen and (max-width: 400px) {
		font-size: 1.3rem;
		div {
			.icon {
				font-size: 1.5rem;
			}
		}
	}
`;

const Footer = () => {
	return (
		<Wrapper>
			<div>July 2024</div>
			<div>
				Based on the free APIs &nbsp;
				<a href="https://api.nasa.gov/" target="_blank">
					https://api.nasa.gov/
				</a>
				&nbsp;and&nbsp;
				<a href="https://www.datastro.eu/pages/home/" target="_blank">
					https://www.datastro.eu/
				</a>
			</div>
			<div>
				<p>&#xa9;</p>
				<p>John Doe</p>
				<p>
					<a href="https://john-doe.netlify.app/" target="_blank">
						<BiLogoNetlify className="icon" />
					</a>
				</p>
			</div>
		</Wrapper>
	);
};

export default Footer;
