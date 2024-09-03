import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "../../css/PageStyle";
import MarsCard from "../subcomponents/MarsCard";
import { IoMdArrowDropup, IoMdCloseCircleOutline } from "react-icons/io";
import useModal from "../../hooks/useModal";
import MarsModalContent from "../subcomponents/MarsModalContent";
import { FiChevronsRight } from "react-icons/fi";
import Select from "react-select";
import { camSelectOptions, roverSelectOptions } from "../../data";
import Modal from "../subcomponents/Modal";

const Mars = () => {
	const initDate = "2020-06-10";
	const initCam = "NAVCAM";
	const initRover = "curiosity";

	const formRef = useRef();

	const [marsResults, setMarsResults] = useState({});
	const [filters, setFilters] = useState({
		date: initDate,
		cam: initCam,
		rover: initRover,
	});
	const [selectedMars, setSelectedMars] = useState({});

	const { showModal, openModal, closeModal, placeModal, placeCursor } = useModal(setSelectedMars);

	const fetchMarsResults = async (date, cam, rover) => {
		const apiBase = process.env.REACT_APP_NASA_API_URL;
		const apiKey = process.env.REACT_APP_NASA_API_KEY;
		const apiEndpointSegment = `mars-photos/api/v1/rovers/${rover}/photos`;
		const dateSegment = `earth_date=${date}`;
		const camSegment = `camera=${cam}`;
		const keySegment = `api_key=${apiKey}`;
		const targetUrl = apiBase + apiEndpointSegment + "?" + dateSegment + "&" + camSegment + "&" + keySegment;
		try {
			const response = await axios.get(targetUrl);
			setMarsResults(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchMarsResults(filters.date, filters.cam, filters.rover);
	}, [filters]);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData(formRef.current);
		const data = {
			date: formData.get("date"),
			cam: formData.get("cam"),
			rover: formData.get("rover"),
		};
		setFilters(data);
	};

	const customStyles = {
		option: (styles, state) => ({
			...styles,
			cursor: "pointer",
		}),
		control: (styles) => ({
			...styles,
			cursor: "pointer",
		}),
	};

	return (
		<Wrapper>
			<article className="title">
				<div>-Curiosity, Opportunity, and Spirit rovers-</div>
				<div>-Mars Photos-</div>
			</article>
			<article className="intro">
				NASA's Mars Exploration Rover mission was a robotic space mission involving two Mars rovers, Spirit and Opportunity. The two rovers landed on Mars
				in January 2004. Both rovers far outlived their planned missions of 90 Martian solar days: Spirit was active until 2010, while Opportunity was
				active until 2018. Later on, Curiosity rover was launched in 2011, and Perseverance in 2020, and are both still operational (2024).
			</article>
			<article className="search">
				<form onSubmit={handleSubmit} ref={formRef} className="form-container">
					<div className="form-control form-control-alt">
						<label htmlFor="date" className="form-label">
							Date : &nbsp;
						</label>
						<input id="date" name="date" type="date" className="form-date" />
					</div>
					<div className="form-control form-control-alt">
						<label htmlFor="rover" className="form-label">
							Rover : &nbsp;
						</label>
						<Select styles={customStyles} id="rover" options={roverSelectOptions} name="rover" className="form-select" />
					</div>
					<div className="form-control form-control-alt">
						<label htmlFor="cam" className="form-label">
							Cam : &nbsp;
						</label>
						<Select styles={customStyles} id="cam" options={camSelectOptions} name="cam" className="form-select" />
					</div>
					<button type="submit" className="search-btn">
						Search <FiChevronsRight className="icon" />
					</button>
				</form>
			</article>
			<article className="results-summary">
				Number of results (for the <span className="filter-highlight">{filters.date}</span>, with <span className="filter-highlight">{filters.cam}</span>{" "}
				cam and <span className="filter-highlight">{filters.rover}</span>) rover :{" "}
				{Object.keys(marsResults).length > 0 ? marsResults.photos.length : "No results"}
			</article>
			<article className="grid">
				{marsResults.photos &&
					marsResults.photos.length > 0 &&
					marsResults.photos.map((obj, index) => (
						<div onClick={(evt) => openModal(evt, obj)} key={index}>
							<MarsCard marsObj={obj} />
						</div>
					))}
			</article>
			<Modal showModal={showModal} closeModal={closeModal} selectedObject={selectedMars} mode="mars" />
		</Wrapper>
	);
};

export default Mars;
