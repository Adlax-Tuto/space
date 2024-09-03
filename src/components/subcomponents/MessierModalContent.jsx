import React, { useEffect, useState } from "react";
import { Wrapper } from "../../css/PageStyle";
import axios from "axios";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const MessierModalContent = ({ messierObj }) => {
	const {
		messier,
		ngc,
		objet,
		saison,
		mag,
		english_name_nom_en_anglais,
		french_name_nom_francais,
		latin_name_nom_latin,
		ra,
		dec,
		distance,
		dimension,
		decouvreur,
		annee,
		image,
		image_url,
		const: consteCode,
	} = messierObj;
	const { url, id } = image_url;

	const [complementaryData, setComplementaryData] = useState({});
	const [pageIndex, setPageIndex] = useState(0);
	const [carouselIndex, setCarouselIndex] = useState(0);

	const pageUp = () => {
		setPageIndex(1);
	};

	const pageDown = () => {
		setPageIndex(0);
	};

	const fetchComplementaryData = async (id) => {
		//url
		const apiBase = process.env.REACT_APP_DATASTRO_API_URL;
		const datasetSegment = `nasahubble/records`;
		const whereSegment = `where=photo_title%3D%22${id}%22`;
		const refineSegment = `refine=album_name_tags%3A%22Hubble%27s%20Messier%20Catalog%22`;
		const targetUrl = apiBase + datasetSegment + "?" + whereSegment + "&" + refineSegment;
		try {
			const response = await axios.get(targetUrl);
			setComplementaryData(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchComplementaryData(messier);
	}, [messier]);

	return (
		<Wrapper>
			<article className="title">
				<div>Messier {messier}</div>
			</article>
			{pageIndex === 0 && (
				<>
					{" "}
					<article className="grid-small">
						<div className="img-container">
							<img src={image_url?.url} alt="messier-main" />
						</div>
						<div className="text-container">
							<div>
								<span className="subtitle">Messier Number : </span>
								<span>{messier}</span>
							</div>
							<div>
								<span className="subtitle">NGC Number : </span>
								<span>{ngc}</span>
							</div>
							<div>
								<span className="subtitle">Object Type : </span>
								<span>{objet}</span>
							</div>
							<div>
								<span className="subtitle">English Name : </span>
								<span>{english_name_nom_en_anglais}</span>
							</div>
							<div>
								<span className="subtitle">French Name : </span>
								<span>{french_name_nom_francais}</span>
							</div>
							<div>
								<span className="subtitle">Latin Name : </span>
								<span>{latin_name_nom_latin}</span>
							</div>
							<div>
								<span className="subtitle">Constellation : </span>
								<span>{consteCode}</span>
							</div>
							<div>
								<span className="subtitle">Discoverer : </span>
								<span>{decouvreur}</span>
							</div>
							<div>
								<span className="subtitle">Year : </span>
								<span>{annee}</span>
							</div>
							<div>
								<span className="subtitle">Dimension : </span>
								<span>{dimension}</span>
							</div>
							<div>
								<span className="subtitle">Distance (l.y / a.l.) : </span>
								<span>{distance}</span>
							</div>
							<div>
								<span className="subtitle">Mag : </span>
								<span>{mag}</span>
							</div>
							<div>
								<span className="subtitle">Right Ascension : </span>
								<span>{ra}</span>
							</div>
							<div>
								<span className="subtitle">Declinaison : </span>
								<span>{dec}</span>
							</div>
						</div>
					</article>
					{complementaryData.total_count > 0 && (
						<article className="complementary-data-btn complementary-data-btn-left ">
							Hubble's photos <IoMdArrowDropright className="icon" onClick={pageUp} />
						</article>
					)}
				</>
			)}
			{pageIndex === 1 && (
				<>
					<article>
						<div className="bullets-container">
							{complementaryData.results.map((obj, idx) => (
								<div className={`bullet ${idx === carouselIndex ? " active" : null}`} onClick={() => setCarouselIndex(idx)}></div>
							))}
						</div>
						<div className="grid-small">
							<div className="img-container">
								<img src={complementaryData.results[carouselIndex].photo_url_m.url} alt="main-img" />
							</div>
							<div className="text-container">
								<div>
									<span className="subtitle">Description : </span>
									<span>{complementaryData.results[carouselIndex].photo_description}</span>
								</div>
							</div>
						</div>
					</article>
					<article className="complementary-data-btn complementary-data-btn-right ">
						<IoMdArrowDropleft className="icon" onClick={pageDown} /> Back
					</article>
				</>
			)}
		</Wrapper>
	);
};

export default MessierModalContent;
