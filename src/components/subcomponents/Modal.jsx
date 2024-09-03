import React from "react";
import { IoMdArrowDropup, IoMdCloseCircleOutline } from "react-icons/io";
import ConstellationModalContent from "./ConstellationModalContent";
import HubbleModalContent from "./HubbleModalContent";
import MarsModalContent from "./MarsModalContent";
import MessierModalContent from "./MessierModalContent";

const Modal = ({ showModal, closeModal, selectedObject, mode }) => {
	const templateBuilder = (mode) => {
		if (mode === "constellations") {
			return <ConstellationModalContent constellationObj={selectedObject} />;
		} else if (mode === "hubble") {
			return <HubbleModalContent hubbleObj={selectedObject} />;
		} else if (mode === "mars") {
			return <MarsModalContent marsObj={selectedObject} />;
		} else {
			return <MessierModalContent messierObj={selectedObject} />;
		}
	};

	return (
		<>
			<article id="cursor" className={`cursor ${showModal ? "show" : "hide"}`}>
				<IoMdArrowDropup />
			</article>
			<article id="modal" className={`modal ${showModal ? "show" : "hide"}`}>
				<div className="cross-icon" onClick={closeModal}>
					<IoMdCloseCircleOutline />
				</div>
				{Object.keys(selectedObject).length > 0 && templateBuilder(mode)}
			</article>
		</>
	);
};

export default Modal;
