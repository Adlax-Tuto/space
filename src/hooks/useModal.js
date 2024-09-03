import React, { useState } from "react";

const useModal = (setSelectedMessier) => {
	const [showModal, setShowModal] = useState(false);

	const openModal = (evt, obj) => {
		setShowModal(true);
		setSelectedMessier(obj);
		placeCursor(evt);
		placeModal(evt);
	};

	const closeModal = () => {
		setShowModal(false);
		setSelectedMessier({});
	};

	const placeCursor = (evt) => {
		const rect = evt.target.parentElement.getBoundingClientRect();
		const cursor = document.getElementById("cursor");
		const realX = rect.x + rect.width / 2;
		const realY = window.scrollY + rect.y + 400 - 30;
		const style = `position: absolute; left: ${realX}px; top: ${realY}px; transform: translateX(-50%); margin: 0px;`;
		cursor.setAttribute("style", style);
	};

	const placeModal = (evt) => {
		const rect = evt.target.parentElement.getBoundingClientRect();
		const modal = document.getElementById("modal");
		const realY = window.scrollY + rect.y + 400 + 20;
		const style = `position: absolute; top: ${realY}px; left: 50%; transform: translateX(-50%);  margin: 0px;`;
		modal.setAttribute("style", style);
	};

	return { showModal, openModal, closeModal, placeModal, placeCursor };
};

export default useModal;
