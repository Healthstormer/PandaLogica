import React from 'react';
import {Link} from "react-router-dom";
import { Table, Form , Container, Row, Col} from 'react-bootstrap';
  
const SupplierRegistration = () => {
  return (
    <div>
      <div className="panel">
        <h3>Please list material you can donate</h3>
      <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Material</th>
            <th>Quantity</th>
            <th>Certification</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td><Form.Control as="select" custom>
                <option>Masks</option>
                <option>Gloves</option>
                </Form.Control >
                </td>
            <td><Form.Control  defaultValue="100"></Form.Control></td>
            <td><Form.Control as="select" custom>
                <option>Certified</option>
                <option>Validated</option>
                <option>Not Certified</option>
                </Form.Control >
                </td>
            </tr>
            <tr>
            <td>1</td>
            <td><Form.Control as="select" custom defaultValue="Gloves">
                <option>Masks</option>
                <option>Gloves</option>
                </Form.Control >
                </td>
            <td><Form.Control  defaultValue="50"></Form.Control></td>
            <td><Form.Control as="select" custom>
                <option>Certified</option>
                <option>Validated</option>
                <option>Not Certified</option>
                </Form.Control >
                </td>
            </tr>
        </tbody>
        </Table>
        <p>To procede or see adjust your previous quantities, please register or login</p><br/>
            <Container>
    <Row className="align-top"><Col>
        <div className="register_container1">
            <h4>Register</h4>
            <form>
                <div class="form-group">
                    <label for="register-form-email">Email (*)</label>
                    <input class="form-control" type="email" id="register-form-email"/>
                </div>
                <div class="form-group">
                    <label for="register-form-gln">GLN (for hospitals)</label>
                    <input class="form-control" type="text" id="register-form-gln"/>
                </div>       
                <div class="form-group">
                    <label for="register-form-gln">UID (companies)</label>
                    <input class="form-control" type="text" id="register-form-gln"/>
                </div>       
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div></Col>
        <Col>
        <div className="register_container2">
            <h4>Login</h4>
            <form>
                <div class="form-group">
                    <label for="login-form-username">Username</label>
                    <input class="form-control" type="text" id="login-form-username"/>
                </div>
                <div class="form-group">
                    <label for="login-form-password">Password</label>
                    <input class="form-control" type="password" id="login-form-password"></input>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div></Col>
        </Row>
        </Container>
</div>

    </div>
)}

export default SupplierRegistration
