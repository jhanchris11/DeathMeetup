import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const CommentEditor = ({ onSubmit, submitting, value }) => {
	return (
		<>
			<Form onFinish={onSubmit}>
				<Form.Item name="comentary" rules={[{ required: true, message: 'Please enter your comment ' }]}>
					<TextArea rows={3} value={value} />
				</Form.Item>

				<Form.Item>
					<Button htmlType="submit" loading={submitting} type="primary">
						Add Comment
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default CommentEditor;
