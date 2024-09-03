import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "../../css/PageStyle";
import ConstellationCard from "../subcomponents/ConstellationCard";
import Pagination from "../subcomponents/Pagination";
import usePagination from "../../hooks/usePagination";
import { IoMdArrowDropup, IoMdCloseCircleOutline } from "react-icons/io";
import useModal from "../../hooks/useModal";
import ConstellationModalContent from "../subcomponents/ConstellationModalContent";
import Select from "react-select";
import { constellationsSelectOptions } from "../../data";
import Modal from "../subcomponents/Modal";

const Constellations = () => {
	const selectMenuRef = useRef();

	const [constellations, setConstellations] = useState({});
	const [selectedConstellation, setSelectedConstellation] = useState({});
	const [filteredConstellationId, setFilteredConstellationId] = useState("");
	const [filteredConstellationObj, setFilteredConstellationObj] = useState({});

	const { currentPageIndex, setCurrentPageIndex, maxPageIndex, increasePagePerOne, decreasePagePerOne } = usePagination(constellations.total_count, 20);
	const { showModal, openModal, closeModal, placeModal, placeCursor } = useModal(setSelectedConstellation);

	const fetchConstellations = async (pageIndex) => {
		//targetUrl
		const pageOffset = pageIndex * 20;
		const apiBase = process.env.REACT_APP_DATASTRO_API_URL;
		const datasetSegment = `88-constellations/records`;
		const limitSegment = `limit=20`;
		const offsetSegment = `offset=${pageOffset}`;
		const orderSegment = `order_by=latin_name_nom_latin`;
		// const targetUrl = apiBase + datasetSegment + "?" + limitSegment + "&" + offsetSegment;
		const targetUrl = apiBase + datasetSegment + "?" + orderSegment + "&" + limitSegment + "&" + offsetSegment;
		try {
			const response = await axios.get(targetUrl);
			setConstellations(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchOneConstellation = async (id) => {
		//url
		const apiBase = process.env.REACT_APP_DATASTRO_API_URL;
		const datasetSegment = `88-constellations/records`;
		const whereSegment = `where=latin_name_nom_latin%3D%22${id}%22`;
		const targetUrl = apiBase + datasetSegment + "?" + whereSegment;
		try {
			const response = await axios.get(targetUrl);
			setFilteredConstellationObj(response.data.results[0]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchConstellations(currentPageIndex);
	}, [currentPageIndex]);

	useEffect(() => {
		if (filteredConstellationId === "all") {
			setFilteredConstellationObj({});
			return;
		}
		if (filteredConstellationId !== "") {
			fetchOneConstellation(filteredConstellationId);
		}
	}, [filteredConstellationId]);

	const handleFilteredPanelClose = () => {
		setFilteredConstellationObj({});
		selectMenuRef.current.setValue({ value: "all", label: "all" });
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
				<div>-the 88 constellations-</div>
			</article>
			<article className="intro">
				A constellation is an area on the celestial sphere in which a group of visible stars forms a perceived pattern or outline, typically representing an
				animal, mythological subject, or inanimate object. There are 88 constellations recognized by the International Astronomical Union.
			</article>
			<article className="search">
				<div className="form-container">
					<div className="form-control">
						<label htmlFor="constellation-select" className="form-label">
							Select one : &nbsp;
						</label>
						<Select
							styles={customStyles}
							ref={selectMenuRef}
							options={constellationsSelectOptions}
							name="constellation-select"
							className="form-select"
							onChange={(evt) => setFilteredConstellationId(evt.value)}
						/>
					</div>
				</div>
			</article>
			{Object.keys(filteredConstellationObj).length > 0 && (
				<article className="modal modal-select">
					<div className="cross-icon" onClick={handleFilteredPanelClose}>
						<IoMdCloseCircleOutline />
					</div>
					<ConstellationModalContent constellationObj={filteredConstellationObj} />
				</article>
			)}
			<article className="grid">
				{constellations.results &&
					constellations.results.length > 0 &&
					constellations.results.map((obj, index) => (
						<div
							key={index}
							onClick={(evt) => openModal(evt, obj)}
							className={obj.english_name_nom_en_anglais === selectedConstellation.english_name_nom_en_anglais ? "active" : null}
						>
							<ConstellationCard constellationObj={obj} />
						</div>
					))}
			</article>
			<Modal showModal={showModal} closeModal={closeModal} selectedObject={selectedConstellation} mode="constellations" />
			<Pagination
				setCurrentPageIndex={setCurrentPageIndex}
				currentPageIndex={currentPageIndex}
				maxPageIndex={maxPageIndex}
				increasePagePerOne={increasePagePerOne}
				decreasePagePerOne={decreasePagePerOne}
			/>
		</Wrapper>
	);
};

export default Constellations;
