import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";

import { app } from "../src/app";

chai.use(chaiHttp);

describe("get doctor testing", () => {
  it("invalid doctor id", (done) => {
    chai
      .request(app)
      .get("/api/doctor/111111111111111111111111")
      .end((err, res) => {
        expect(err).to.not.equal("null");
        done();
      });
  });

  it("normally doctor id", (done) => {
    chai
      .request(app)
      .get("/api/doctor/62ceee5d400f2a6cccecc266")
      .end((err, res) => {
        expect(err).to.eq(null);
        console.log(res.body);
        done();
      });
  });
});

describe("create appointment testing", () => {
  it("empty date", (done) => {
    chai
      .request(app)
      .post("/api/appointment")
      .send({
        userId: "111111111111111111111111",
        doctorId: "62ceee5d400f2a6cccecc266",
      })
      .end((err, res) => {
        expect(res.body.status).to.equal(500);
        expect(res.body.message).to.equal("Please enter valid date");

        console.log(res.body);
        done();
      });
  });

  it("invalid user id", (done) => {
    chai
      .request(app)
      .post("/api/appointment")
      .send({
        userId: "111111111111111111111111",
        doctorId: "62ceee5d400f2a6cccecc266",
        date: "123123",
      })
      .end((err, res) => {
        expect(res.body.status).to.equal(500);
        expect(res.body.message).to.equal("User with this id does not exist");

        console.log(res.body);
        done();
      });
  });
});
