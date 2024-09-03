import React from "react";
import { Wrapper } from "../../css/PageStyle";

const MarsModalContent = ({ marsObj }) => {
	const { camera, earth_date, id, img_src, rover, sol } = marsObj;
	const { name } = rover;
	const { full_name } = camera;

	return (
		<Wrapper>
			<article className="title">
				<div>Mars photo</div>
			</article>
			<article className="grid-small">
				<div className="img-container ">
					<img src={img_src} alt="mars-main" />
				</div>
				<div className="text-container">
					<div>
						<span className="subtitle">Earth Date : </span>
						<span>{earth_date || "?"}</span>
					</div>
					<div>
						<span className="subtitle">Mars Date : </span>
						<span>{sol || "?"}</span>
					</div>{" "}
					<div>
						<span className="subtitle">Rover : </span>
						<span>{name || "?"}</span>
					</div>{" "}
					<div>
						<span className="subtitle">Camera : </span>
						<span>{full_name || "?"}</span>
					</div>
				</div>
			</article>
		</Wrapper>
	);
};

export default MarsModalContent;
