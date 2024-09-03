import React from "react";
import { Wrapper } from "../../css/CardStyle";

const ConstellationCard = ({ constellationObj }) => {
	const { image, latin_name_nom_latin } = constellationObj;
	const { url } = image;

	return (
		<Wrapper>
			<img src={url} alt="main-conste" />
			<div>{latin_name_nom_latin}</div>
		</Wrapper>
	);
};

export default ConstellationCard;
