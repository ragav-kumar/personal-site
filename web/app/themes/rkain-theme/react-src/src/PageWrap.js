import React from 'react'
import styled, {css} from "styled-components";

const border = {
	weight: "15px",
	color: "rgba(0,0,255,0.5)",
	
}


const octagonPiece = css`
	content: "";
	position: absolute;
	left: -${border.weight};
	right: -${border.weight};
	border-left: ${border.weight} solid transparent;
	border-right: ${border.weight} solid transparent;
`;

const PageWrapOuter = styled.div`
	background-color: ${border.color};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 60%;
	height: calc(0.6 * 62vw);
	border-left: ${border.weight} solid ${border.color};
	border-right: ${border.weight} solid ${border.color};
	&::before {
		${octagonPiece}
		bottom: 100%;
		border-bottom: ${border.weight} solid ${border.color};
	}
	&::after {
		${octagonPiece}
		top: 100%;
		border-top: ${border.weight} solid ${border.color};
	}
`;
const PageWrapInner = styled.div`
	background-color: white;
	height: calc(100% - 30px);
	width: calc(100% - 30px);
	margin: ${border.weight};
`;

const PageWrap = (props) => {
	return (
		<PageWrapOuter>
			<PageWrapInner>
				{props.children}
			</PageWrapInner>
		</PageWrapOuter>
	)
}

export default PageWrap;