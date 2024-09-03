import React from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight, maxPageIndex } from "react-icons/fi";

const Pagination = ({ increasePagePerOne, decreasePagePerOne, currentPageIndex, maxPageIndex, setCurrentPageIndex }) => {
	return (
		<article className="pagination">
			<div className="pagination-btn" onClick={() => setCurrentPageIndex(0)}>
				<FiChevronsLeft />
			</div>
			<div className="pagination-btn" onClick={decreasePagePerOne}>
				<FiChevronLeft />
			</div>
			{currentPageIndex > 0 && (
				<>
					<div className="pagination-btn">...</div>
					<div className="pagination-btn border" onClick={decreasePagePerOne}>
						{currentPageIndex}
					</div>
				</>
			)}
			<div className="pagination-btn active border">{currentPageIndex + 1}</div>
			{currentPageIndex < maxPageIndex && (
				<>
					<div className="pagination-btn border" onClick={increasePagePerOne}>
						{currentPageIndex + 2}
					</div>
					<div className="pagination-btn">...</div>
				</>
			)}
			<div className="pagination-btn" onClick={increasePagePerOne}>
				<FiChevronRight />
			</div>
			<div className="pagination-btn" onClick={() => setCurrentPageIndex(maxPageIndex)}>
				<FiChevronsRight />
			</div>
		</article>
	);
};

export default Pagination;
