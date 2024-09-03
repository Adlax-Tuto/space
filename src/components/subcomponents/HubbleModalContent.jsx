import React from "react";
import { Wrapper } from "../../css/PageStyle";

const HubbleModalContent = ({ hubbleObj }) => {
	const { photo_url_m, photo_description, album_name_tags, photo_date_taken, photo_title } = hubbleObj;
	const { url } = photo_url_m;
	return (
		<Wrapper>
			<article className="title">
				<div>{photo_title}</div>
			</article>
			<article className="grid-small">
				<div className="img-container">
					<img src={url} alt="hubble-main" />
				</div>
				<div className="text-container">
					<div>
						<span className="subtitle">Description : </span>
						<span>{photo_description || "?"}</span>
					</div>
				</div>
			</article>
		</Wrapper>
	);
};

export default HubbleModalContent;
