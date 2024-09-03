import axios from "axios";
import React, { useEffect, useState } from "react";
import { Wrapper } from "../../css/PageStyle";

const Apod = () => {
	const [apod, setApod] = useState({});

	const fetchApod = async () => {
		const apiBase = process.env.REACT_APP_NASA_API_URL;
		const apiKey = process.env.REACT_APP_NASA_API_KEY;
		const apiEndpointSegment = "planetary/apod";
		const keySegment = `api_key=${apiKey}`;
		const targetUrl = apiBase + apiEndpointSegment + "?" + keySegment;
		try {
			const response = await axios.get(targetUrl);
			setApod(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchApod();
	}, []);

	return (
		<Wrapper>
			<article className="title">
				<div>-Astronomy Picture of the Day-</div>
			</article>
			<article className="grid-small">
				{apod.media_type && apod.media_type === "video" ? (
					<iframe height="100%" width="100%" src={apod.url}></iframe>
				) : (
					<div className="img-container">
						<img src={apod.url} alt="apod-img" />
					</div>
				)}
				<div className="text-container">
					<div>
						<span className="subtitle">Title : </span>
						<span>{apod.title}</span>
					</div>
					<div>
						<span className="subtitle">Date : </span>
						<span>{apod.date}</span>
					</div>
					<div>
						<span className="subtitle">Copyright : </span>
						<span>{apod.copyright}</span>
					</div>
					<div>
						<span className="subtitle">Explanation : </span>
						<span>{apod.explanation}</span>
					</div>
				</div>
			</article>
		</Wrapper>
	);
};

export default Apod;
