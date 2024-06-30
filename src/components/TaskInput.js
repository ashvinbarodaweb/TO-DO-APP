import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const TaskInput = () => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState(''); // Default priority state

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim()) {
      dispatch(addTask({ id: Date.now(), text, priority }));
      setText('');
      setPriority(''); // Reset priority state after adding task
    }
  };

  return (
    <Container className="my-3">
      <Form>
        <Row className="mb-3 d-flex align-items-center">
          <Col lg={8}>
            <Form.Control
              as="textarea"
              className='mb-3'
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Enter task"
            />
          </Col>
          <Col lg={2}>
            <Form.Control as="select" className='mb-3' value={priority} onChange={e => setPriority(e.target.value)}>
              <option value="" disabled hidden>
                Set Priority
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Control>
          </Col>
          <Col lg={2}>
            <Button variant="primary" className='mb-3' onClick={handleAddTask}>Add Task</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default TaskInput;
