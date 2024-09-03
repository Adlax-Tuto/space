import React from "react";
import video from "../../assets/videos/black_hole.mp4";
import styled from "styled-components";

const Wrapper = styled.section`
	height: 50vh;
	position: relative;
	border-bottom: 1px solid var(--clr-violet-2);
	video {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

const Header = () => {
	return (
		<Wrapper>
			<video autoPlay muted loop>
				<source src={video} type="video/mp4" />
			</video>
		</Wrapper>
	);
};

export default Header;
