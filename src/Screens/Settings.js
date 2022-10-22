import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Button, Input } from "react-rainbow-components";

function Settings() {
  return (
    <div className="p-3 wp">
      <Row>
        <Col md={4} sm={4} lg={4}>
          <Card className="p-3 profile-card">
            <div className="big-label">James Cohn</div>
            <div className="profile-img my-3">
              <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" />
            </div>

            <Button
              label="Upload Photo"
              variant="destructive"
              className="rainbow-m-around_medium w-50"
            />
          </Card>
        </Col>
        <Col md={8} sm={8} lg={8}>
          <Card className="p-4">
            <div className="big-label">Edit profile</div>
            <form>
              <Row>
                <Col>
                  <Input
                    id="input-component-1"
                    label="Full name"
                    placeholder="Full name"
                    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto mt-3"
                  />

                  <Input
                    id="input-component-1"
                    label="Email"
                    placeholder="Email"
                    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto mt-3"
                  />

                  <Input
                    id="input-component-1"
                    label="Username"
                    placeholder="Username"
                    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto mt-3"
                  />
                </Col>
                <Col>
                  <Input
                    type="password"
                    id="input-component-1"
                    label="Password"
                    placeholder="Password"
                    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto mt-3"
                  />

                  <Input
                    type="password"
                    id="input-component-1"
                    label="Repeat password"
                    placeholder="Repeat password"
                    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto mt-3"
                  />
                  <br />
                  <Button
                    label="Save changes"
                    variant="destructive"
                    className="rainbow-m-around_medium w-50 mt-3"
                  />
                </Col>
              </Row>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Settings;
