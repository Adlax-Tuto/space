import React, { useState } from "react";

const usePagination = (total_count, limit) => {
	const [currentPageIndex, setCurrentPageIndex] = useState(0);

	const paginationCalculator = (total_count, limit) => {
		let numberOfPages;
		if (total_count % limit === 0) {
			numberOfPages = total_count / limit;
		} else {
			//110/20 = 5.5
			numberOfPages = Math.floor(total_count / limit) + 1;
		}
		return numberOfPages;
	};

	const maxPageIndex = paginationCalculator(total_count, 20) - 1;

	const increasePagePerOne = () => {
		if (currentPageIndex < maxPageIndex) {
			setCurrentPageIndex((oldState) => oldState + 1);
		}
	};

	const decreasePagePerOne = () => {
		if (currentPageIndex > 0) {
			setCurrentPageIndex((oldState) => oldState - 1);
		}
	};

	return { currentPageIndex, setCurrentPageIndex, maxPageIndex, increasePagePerOne, decreasePagePerOne };
};

export default usePagination;
