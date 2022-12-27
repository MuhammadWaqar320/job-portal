import React, { useEffect, useState } from "react";
import "./jobComponent.css";
import moment from "moment";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/images/bg1.jpg";
import Button from "react-bootstrap/Button";
import { getAllJob } from "../../api/jobApi";
import { compareAsc, format } from "date-fns";
import { Link } from "react-router-dom";
function JobComponent() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await getAllJob();
    if (response.success) {
      setData(response.data);
    }
  };
  const dateFormat = (dateValue) => {
    return moment(dateValue).utc().format("YYYY-MM-DD");
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="job-section">
      <div className="title">All Available Jobs</div>
      <div className="container">
        <div className="row">
          {data.map((job) => {
            return (
              <div
                className="col-sm-4 job-box"
                style={{ marginBottom: "24px" }}
              >
                <Card style={{ border: "1px solid silver" }}>
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>{job.description.slice(0, 170)} ....</Card.Text>
                    <Link to={`/detail/${job.id}`} >
                      <Button variant="outline-secondary">View More</Button>{" "}
                    </Link>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Posted on {dateFormat(job.createdAt)}
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JobComponent;
