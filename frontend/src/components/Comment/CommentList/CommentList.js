import React, { Fragment } from 'react';
import { List, Comment } from 'antd';

const CommentList = ({ listComment }) => {
	return (
		<Fragment>
			<List
				style={{ margin: '0px 50px' }}
				dataSource={listComment}
				header={`${listComment.length} ${listComment.length >= 0 ? 'comentarios' : 'respuestas'}`}
				itemLayout="horizontal"
				renderItem={(props) => <Comment {...props} />}
			/>
		</Fragment>
	);
};

export default CommentList;
