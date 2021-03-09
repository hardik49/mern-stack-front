import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';
import moment from 'moment';

import api from '../api/api';

const employeeDetails = {
  employeeId: "", fullName: "", email: "",
  dateOfBirth: "", technology: "", experience: "",
  otherSkills: "",
}

const Employee = (props) => {

  const [employee, setEmployee] = useState({ ...employeeDetails });

  useEffect(() => {
    api.getEmployeeById(props.id).then(res => {
      setEmployee({...res.data});
      return res;
    })
  }, []);

  let { show, onToggle } = props;
  const {
    employeeId, fullName, email, dateOfBirth,
    technology, experience, otherSkills,
  } = employee;

  return (
    <div>
      <Modal isOpen={show}>
        <ModalHeader className="fs-12 text-secondary text-uppercase">
          View Employee
      </ModalHeader>
        <ModalBody>
          <Container>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <form className="mt-4">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Employee Id</label>
                      <input type="text" disabled name="employeeId" class="form-control" id="txtId" placeholder="301920"
                        value={employeeId} />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Full Name</label>
                      <input type="text" disabled name="fullName" class="form-control" id="txtFullName" placeholder="Evi Jason"
                        value={fullName} />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Email</label>
                      <input type="email" disabled name="email" class="form-control" id="txtEmail" placeholder="Email"
                        value={email} />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Date of Birth</label>
                      <input type="text" disabled name="dateOfBirth" class="form-control" id="txtDob" placeholder="Password"
                        value={moment(dateOfBirth).format('DD/MM/YYYY')} />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Technology</label>
                    <input type="text" disabled name="technology" class="form-control" id="txtTechnology" placeholder="React, Node, ..."
                      value={technology} />
                  </div>
                  <div class="form-group">
                    <label>Experience (No of Years)</label>
                    <input type="text" disabled name="experience" class="form-control" id="txtExperience" placeholder="1 Year"
                      value={experience} />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label>Other Skills</label>
                      <input type="text" disabled name="otherSkills" class="form-control" id="txtSkills" placeholder="UI/UX Design, Marketing, ..."
                        value={otherSkills} />
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => onToggle(!show)}>
            Close
        </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Employee;