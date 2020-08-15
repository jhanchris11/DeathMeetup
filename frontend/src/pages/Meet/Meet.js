import React, { Fragment } from 'react';
import { Layout } from 'antd';
import FooterMain from '../../components/Layout/Footer';
import Breadcrumb from '../../components/Layout/Content';

import Banner from '../../components/Banner/Banner';
import Search from '../../components/Search/Search';
import ListContainer from '../../components/shared/ListContainer/ListContainer';

import CustomCard from '../../components/shared/CustomCard/CustomCard';
import Categories from '../../components/Categories/Categories';

import { MeetContainer } from './MeetStyled';

const { Content } = Layout;
const Meet = () => {
	return (
		<Fragment>
			<Content className="cl-content">
				<Banner />
				<Search />
				<div className="cl-content-bg">
					<MeetContainer>
						<CustomCard headerCard={<Categories />} stylesCustom={{ width: '58%' }}>
							<ListContainer
								pageSize={5}
								model={'Event'}
								getItemsSizeEndpoint={'/dynamic/document-size'}
								getItemsEndpoint={'/event/pagination'}
								filterArray={undefined}
								fieldToGetData={'events'}
								hasImage={true}
								isSortedByDate={false}
							/>
						</CustomCard>

						<CustomCard
							headerCard={<h4 style={{ color: 'whitesmoke' }}>Related Events</h4>}
							stylesCustom={{ width: '35%' }}
						>
							<ListContainer
								pageSize={5}
								model={'Event'}
								getItemsSizeEndpoint={'/dynamic/document-size'}
								getItemsEndpoint={'/event/pagination'}
								filterArray={undefined}
								fieldToGetData={'events'}
								hasImage={false}
								isSortedByDate={false}
							/>
						</CustomCard>
					</MeetContainer>
				</div>
			</Content>
			<FooterMain />
		</Fragment>
	);
};

export default Meet;
