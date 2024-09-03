import styled from "styled-components";

export const Wrapper = styled.section`
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background-color: var(--clr-violet-8);
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--clr-violet-1);
		border-radius: 5px;
	}
	.title {
		font-size: 3.5rem;
		color: var(--clr-violet-2);
		padding-top: 1rem;
		padding-bottom: 1rem;
		letter-spacing: 1.5rem;
		width: fit-content;
		margin: 0 auto;
		text-align: center;
		text-decoration: underline 1px;
		text-underline-offset: 10px;
		line-height: 5rem;
		max-width: 90%;
	}

	.grid-small {
		/* border: 1px solid white; */
		max-width: 100%;
		max-height: 50vh;
		margin: 1rem auto;
		font-size: 1.8rem;
		display: grid;
		grid-template-columns: 6fr 4fr;
		line-height: 2rem;
		overflow-y: auto;

		.img-container {
			/* border: 1px solid red; */
			width: 100%;
			height: 100%;
			max-height: 40vh;
			margin-bottom: 2rem;
			margin-left: 1rem;
			padding: 0.5rem;
			text-align: center;
			justify-self: center;
			align-self: center;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.img-container-alt {
			img {
				object-fit: contain;
			}
		}
		.text-container {
			/* border: 1px solid yellow; */
			padding-bottom: 10rem;
			font-family: Jura;
			.subtitle {
				font-family: mavis-bold;
				font-size: 2.5rem;
				color: var(--clr-violet-2);
			}
		}
	}

	.grid-small-alt {
		grid-template-columns: 4fr 6fr;
	}

	.grid {
		/* border: 1px solid red; */
		max-width: 95%;
		margin: 2rem auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
		justify-content: center;
		gap: 1rem;
		.active {
			color: var(--clr-violet-2);
			box-shadow: 5px 5px 5px var(--clr-violet-2);
			transform: translate(-1px, -1px);
			border-radius: 10px;
		}
	}

	.intro {
		max-width: 90%;
		margin: 0 auto;
		font-size: 2.5rem;
		font-family: Jura;
	}

	.pagination {
		/* border: 1px solid white; */
		width: fit-content;
		margin: 35vh auto;
		display: flex;
		gap: 2rem;
		font-size: 4rem;
		align-items: center;
		.pagination-btn {
			/* border: 1px solid white; */
			display: grid;
			place-content: center;
			cursor: pointer;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: var(--clr-violet-3);
			}
		}
		.active {
			color: var(--clr-violet-3);
			text-decoration: underline;
			border-color: var(--clr-violet-3) !important;
		}
		.border {
			border: 1px solid white;
			border-radius: 4px;
			padding: 1rem;
		}
	}
	.cursor {
		font-size: 8rem;
		color: var(--clr-violet-2);
		z-index: 5;
	}

	.modal {
		border: 2px solid var(--clr-violet-5);
		border-radius: 10px;
		width: 95vw;
		max-height: 70vh;
		margin: 2rem auto;
		font-size: 4rem;
		background-color: var(--clr-bkg-5);
		box-shadow: yellow 0 -1px 4px, var(--clr-violet-1) 0 -2px 10px, var(--clr-violet-4) 0 -10px 20px, var(--clr-violet-5) 0 -18px 40px,
			5px 5px 15px 5px rgba(0, 0, 0, 0);
		position: relative;
		overflow-y: auto;
		padding-right: 10px;
		::-webkit-scrollbar {
			width: 6px;
		}
		::-webkit-scrollbar-track {
			background-color: var(--clr-violet-8);
		}
		::-webkit-scrollbar-thumb {
			background-color: var(--clr-violet-1);
			border-radius: 5px;
		}
	}

	.modal-select {
		box-shadow: none;
		max-width: 90%;
		border-top: 4px solid var(--clr-violet-2);
		border-bottom: 4px solid var(--clr-violet-2);
		border-left: none;
		border-right: none;
		border-radius: 0;
	}

	.cross-icon {
		position: absolute;
		top: 3rem;
		right: 3rem;
		cursor: pointer;
		color: var(--clr-violet-2);
		transition: all 0.3s ease-in-out;
		&:hover {
			color: var(--clr-violet-5);
		}
	}
	.show {
		display: block;
	}

	.hide {
		display: none;
	}

	.bullets-container {
		/* border: 1px solid white; */
		display: flex;
		width: fit-content;
		margin: 0 auto;
		gap: 1rem;
		.bullet {
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
			background-color: var(--clr-violet-5);
			border: 2px solid var(--clr-violet-2);
			cursor: pointer;
			transition: all 0.3s ease-in-out;
			&:hover {
				background-color: var(--clr-violet-2);
				border-color: var(--clr-violet-5);
			}
		}
		.active {
			background-color: var(--clr-violet-2);
			border-color: var(--clr-violet-5);
		}
	}
	.complementary-data-btn {
		display: flex;
		align-items: center;
		.icon {
			cursor: pointer;
			transition: all 0.3s ease-in-out;
			&:hover {
				transform: scale(1.5);
				color: var(--clr-violet-4);
			}
		}
	}

	.complementary-data-btn-left {
		justify-content: flex-start;
	}

	.complementary-data-btn-right {
		justify-content: flex-end;
	}

	.search {
		/* border: 1px solid red; */
		padding: 1rem;
		max-width: 90%;
		margin: 0 auto;
		.form-container {
			/* border: 1px solid white; */
			display: flex;
			flex-wrap: wrap;
			column-gap: 2rem;
			.form-control {
				/* border: 1px solid green; */
				padding: 1rem;
				font-size: 2rem;
				font-family: Jura;
				font-weight: bold;
				color: var(--clr-violet-5);
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
				align-items: center;
				flex-grow: 1;
				.form-label {
					margin-right: 2rem;
					color: var(--clr-violet-1);
				}
				.form-select {
					width: 200px;
					height: 35px;
					border: 1px;
					border-radius: 4px;
					outline: none;
				}
				.form-input {
					padding-left: 1rem;
					font-family: inherit;
					border-top-right-radius: 0;
					border-bottom-right-radius: 0;
				}
				.form-date {
					width: 200px;
					height: 35px;
					border: 0;
					border-radius: 4px;
					outline: none;
					cursor: pointer;
					color: inherit;
					font-family: inherit;
					font-size: inherit;
				}
				.form-input-reset {
					display: flex;
					align-items: center;
				}
				.form-reset {
					border: 0;
					width: 20px;
					height: 35px;
					border-bottom-left-radius: 0;
					border-top-left-radius: 0;
					border-bottom-right-radius: 4px;
					border-top-right-radius: 4px;
				}
			}
			.form-control-alt {
				justify-content: flex-start;
			}
			.search-btn {
				/* border: 1px solid red; */
				margin: auto;
				font-family: inherit;
				height: 35px;
				border: 0;
				margin-left: 2rem;
				border-radius: 4px;
				padding: 0.5rem 1rem;
				cursor: pointer;
				display: flex;
				align-items: center;
				gap: 1rem;
				transition: all 0.3s ease-in-out;
				&:hover {
					background-color: var(--clr-violet-5);
					color: var(--clr-violet-1);
					.icon {
						transform: translateX(5px);
					}
				}
				.icon {
					font-size: 2rem;
				}
			}
		}
	}

	.results-summary {
		font-size: 2.5rem;
		font-family: jura;
		max-width: 90%;
		margin: 0 auto;
		.filter-highlight {
			color: var(--clr-violet-3);
		}
	}

	@media screen and (max-width: 1000px) {
		.title {
			font-size: 2.8rem;
		}
		.grid-small {
			grid-template-columns: 1fr;
			font-size: 1.4rem;
			.img-container {
				width: 90%;
				margin: 0 auto;
				height: 20vh;
			}
			.text-container {
				width: 90%;
				margin: 0 auto;
				.subtitle {
					font-size: 2rem;
				}
			}
		}
		.complementary-data-btn {
			font-size: 2rem;
		}
	}

	@media screen and (max-width: 600px) {
		.title {
			font-size: 2rem;
		}
		.cross-icon {
			top: 1.5rem;
			right: 1.5rem;
			font-size: 3rem;
		}

		.intro {
			font-size: 2rem;
		}
		.pagination {
			font-size: 3rem;
		}
		.results-summary {
			font-size: 2rem;
		}
	}
	@media screen and (max-width: 450px) {
		.title {
			font-size: 1.7rem;
		}
		.intro {
			font-size: 1.5rem;
		}
		.results-summary {
			font-size: 1.5rem;
		}
		.text-container {
			padding-bottom: 20rem;
		}
		.form-label {
			font-size: 2rem;
		}
	}
	@media screen and (max-width: 380px) {
		.title {
			font-size: 1.8rem;
			line-height: 3rem;
		}
		.grid-small {
			font-size: 1.2rem;
			.text-container {
				padding-bottom: 20rem;
			}
		}
	}
`;
