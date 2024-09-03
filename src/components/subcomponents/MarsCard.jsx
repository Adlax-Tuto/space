import React from "react";
import { Wrapper } from "../../css/CardStyle";

const MarsCard = ({ marsObj }) => {
	const { earth_date, img_src, id, camera, rover } = marsObj;

	return (
		<Wrapper>
			<img src={img_src} alt="mars-mini" />
			<div>{earth_date || "?"}</div>
			<div>{camera?.name || "?"}</div>
			<div>{rover?.name || "?"}</div>
		</Wrapper>
	);
};

export default MarsCard;
