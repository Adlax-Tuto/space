import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
	position: absolute;
	top: 50px;
	font-size: 4rem;
	color: var(--clr-violet-1);
	display: flex;
	justify-content: space-between;
	width: 100%;
	div {
		/* border: 1px solid white; */
		letter-spacing: 0.2rem;
		position: relative;
	}
	div:nth-child(odd)::before {
		content: "";
		height: 1px;
		width: 4px;
		position: absolute;
		top: -5px;
		left: 5%;
		transition: all 0.3s cubic-bezier(0.74, 0.65, 0.99, 0.02);
	}
	div:nth-child(odd)::after {
		content: "";
		height: 1px;
		width: 4px;
		position: absolute;
		bottom: -5px;
		right: 5%;
		transition: all 0.3s cubic-bezier(0.74, 0.65, 0.99, 0.02);
	}
	div:nth-child(odd):hover {
		color: var(--clr-violet-5);
		&::before {
			transform: scaleX(30);
			background: linear-gradient(90deg, hsla(309, 74%, 27%, 1) 10%, hsla(358, 78%, 62%, 1) 100%);
			transform-origin: top left;
		}
		&::after {
			transform: scaleX(30);
			background: linear-gradient(270deg, hsla(309, 74%, 27%, 1) 10%, hsla(358, 78%, 62%, 1) 100%);
			transform-origin: bottom right;
		}
	}
	@media screen and (max-width: 1400px) {
		font-size: 3rem;
	}
	@media screen and (max-width: 1100px) {
		font-size: 2rem;
	}
	@media screen and (max-width: 800px) {
		font-size: 2.5rem;
		flex-direction: column;
		top: 0px;
		height: 50vh;
		justify-content: space-evenly;
		gap: 3rem;
		div:nth-child(even) {
			display: none;
		}
		div:nth-child(odd):hover {
			&::before,
			&::after {
				display: none;
			}
		}
	}
`;

const Navbar = () => {
	const returnNavlinkStyle = (navlinkState) => {
		const { isActive } = navlinkState;
		let styleObj = {};
		if (isActive) {
			styleObj = { textDecoration: "underline 1px", textUnderlineOffset: "10px", color: "var(--clr-violet-5)" };
		} else {
			styleObj = null;
		}
		return styleObj;
	};

	return (
		<Wrapper>
			<div>
				<NavLink to="apod" style={(navlinkState) => returnNavlinkStyle(navlinkState)}>
					NASA picture of the day
				</NavLink>
			</div>
			<div>|</div>
			<div>
				<NavLink to="messiers" style={(navlinkState) => returnNavlinkStyle(navlinkState)}>
					messiers obects
				</NavLink>
			</div>
			<div>|</div>
			<div>
				<NavLink to="hubble" style={(navlinkState) => returnNavlinkStyle(navlinkState)}>
					hubble photos
				</NavLink>
			</div>
			<div>|</div>
			<div>
				<NavLink to="constellations" style={(navlinkState) => returnNavlinkStyle(navlinkState)}>
					constellations
				</NavLink>
			</div>
			<div>|</div>
			<div>
				<NavLink to="mars" style={(navlinkState) => returnNavlinkStyle(navlinkState)}>
					mars rovers
				</NavLink>
			</div>
		</Wrapper>
	);
};

export default Navbar;
