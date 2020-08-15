import React, { useState, Fragment, useEffect } from 'react';
import { Comment, Avatar } from 'antd';
import moment from 'moment';
import CommentList from '../../components/Comment/CommentList/CommentList';
import CommentEditor from '../../components/Comment/CommentEditor/CommentEditor';
import { ContainerComment, WrapperComment } from './CommentStyled';
import { getComments } from '../../services/commentService';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

let socket;

const CommentMain = ({ likes, dislikes }) => {
	const [socketss, setSocketss] = useState('');
	const { eventId } = useParams();
	const [listComment, setListComment] = useState([]);
	const ENDPOINT = 'http://localhost:5000';

	const [state, setState] = useState({
		comments: [],
		value: '',
		submitting: false,
	});
	useEffect(() => {
		getListCommentary();
	}, []);

	useEffect(() => {
		socket = io.connect(ENDPOINT);
		setSocketss(socket);
	}, [ENDPOINT]);

	useEffect(() => {
		if (socketss != '') {
			socketss.emit('join', { event: '5f26586f1f5a1265707b2f70' });
		}
	}, [socketss]);

	const getListCommentary = async () => {
		const { data } = await getComments();
		const { comments } = data;
		let arrayComment = hanlderSetCommentary(comments);
		setListComment(arrayComment);
	};

	const handleSubmit = async ({ comentary }) => {
		setState({ ...state, submitting: true });

		setTimeout(() => {
			setState({
				submitting: false,
				value: comentary,
				comments: [
					{
						author: 'John',
						avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						content: <p>{comentary}</p>,
						datetime: moment().format('MMMM Do YYYY, h:mm:ss a'),
					},
					...state.comments,
				],
			});
		}, 1000);

		const data = {
			description: comentary,
			event: eventId,
			user: localStorage.getItem('userId'),
		};

		socketss.emit('SEND_COMMENTS', data);
	};

	socketss != '' &&
		socketss.off('COMMENTS_OF_EVENT').on('COMMENTS_OF_EVENT', (data) => {
			const { description, createdAt, user } = data.comment[0];
			console.log(data);

			setState({
				submitting: false,
				value: '',
				comments: [
					{
						author: user.name,
						avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						content: <p>{description}</p>,
						datetime: createdAt,
					},
					...state.comments,
				],
			});
			setListComment([
				...[
					{
						author: user.name,
						avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						content: <p>{description}</p>,
						datetime: createdAt,
					},
				],
				...listComment,
			]);
		});

	const hanlderSetCommentary = (listComment) => {
		return listComment.map((comentary) => {
			return {
				author: comentary.user.name,
				avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				content: <p>{comentary.description}</p>,
				datetime: comentary.createdAt,
			};
		});
	};

	return (
		<ContainerComment>
			<WrapperComment>
				{state.comments.length >= 0 && <CommentList listComment={listComment} />}
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						width: '50%',
					}}
				>
					<Comment
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							paddingRight: '20px',
							margin: '0px 50px',
						}}
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="John" />
						}
						content={<CommentEditor onSubmit={handleSubmit} submitting={state.submitting} />}
					/>
				</div>
			</WrapperComment>
		</ContainerComment>
	);
};
export default CommentMain;
