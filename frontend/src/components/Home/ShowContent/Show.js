import React from 'react';
import { ShowStyled, ShowImage, ShowText } from './ShowStyled';
import ImgHome from '../../../assets/home.png';

const Show = () => {
	return (
		<>
			<ShowStyled>
				<ShowText>
					<h1 className="mv-r"> Death Meetup</h1>
					<h2 className="mv-l">
						Plataforma para compartir conocimientos de tecnologia, deporte , cultura de manera gratuita 🤝🏿
						creado por el grupo Evil 4
					</h2>
				</ShowText>
				<ShowImage>
					<img className="mv-u" src={ImgHome} width="500px" height="400px" />
				</ShowImage>
			</ShowStyled>
			<div style={{ height: '150px', overflow: 'hidden' }}>
				<svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
					<path
						d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
						style={{ stroke: 'none', fill: '#E7F3FF' }}
					></path>
				</svg>
			</div>
		</>
	);
};

export default Show;
