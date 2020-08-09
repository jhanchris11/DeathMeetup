import styled from '@emotion/styled';

export const DetailContainer = styled.div`
	width: 100%;
`;

export const HomeContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	padding: 15px;
`;

export const ImageDetail = styled.div`
	width: 100%;
	background-image: ${(props) => `url(${props.image})`};
	background-size: 100% 100%;
	height: 200px;
`;

export const ContentDetail = styled.div`
	width: 100%;
	padding: 10px;
`;

export const TextDetail = styled.p`
	text-align: left;
	font-size: 1.3em;
	font-weight: bold;
`;
