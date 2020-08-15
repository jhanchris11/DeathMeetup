import React, { useState, createElement, useEffect } from 'react';
import { ContainerVideo } from './VideoSectionStyled';
import { Tooltip, Comment } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import CommentMain from '../../pages/Comment/Comment';

const VideoSection = () => {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [action, setAction] = useState(null);

	useEffect(() => {
		localStorage.getItem('like', likes);
	}, [likes, dislikes]);
	useEffect(() => {
		localStorage.setItem('dislike', dislikes);
	}, [dislikes]);

	const handlerLike = async () => {
		setDislikes(0);
		setLikes(1);
		let data = {
			like: likes,
		};
		setAction('liked');
		localStorage.setItem('like', likes);
	};

	const handlerDisLike = async () => {
		setLikes(0);
		setDislikes(1);
		setAction('disliked');
		console.log(dislikes);
		localStorage.setItem('dislike', dislikes);
	};

	const actions = [
		<Tooltip key="comment-basic-like" title="Like">
			<span onClick={handlerLike} style={{ fontSize: '20px' }}>
				{createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
				<span>{likes}</span>
			</span>
		</Tooltip>,
		<Tooltip key="comment-basic-dislike" title="Dislike">
			<span onClick={handlerDisLike} style={{ fontSize: '20px' }}>
				{React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
				<span>{dislikes}</span>
			</span>
		</Tooltip>,
	];

	return (
		<>
			<div style={{ padding: '20px 0 ' }}>
				<ContainerVideo>
					<Comment
						likes={likes}
						dislikes={dislikes}
						actions={actions}
						author={<a>{localStorage.getItem('name')} </a>}
						content={
							<video
								src="https://storage.googleapis.com/cinetask.appspot.com/5f37c455fbdc18dcffb1e1cd_meet.mp4"
								style={{ width: '100%' }}
								playing={true}
								loop={true}
							></video>
						}
						datetime={
							<Tooltip title={moment().format('MMMM Do YYYY, h:mm:ss a')}>
								<span>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
							</Tooltip>
						}
					></Comment>
				</ContainerVideo>
				<CommentMain likes={likes} dislikes={dislikes} />
			</div>
		</>
	);
};

export default VideoSection;
