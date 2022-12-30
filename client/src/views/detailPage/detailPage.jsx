import React, { useEffect } from "react";
import { ShareSocial } from "react-share-social";
import "./detailPage.css";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getJobById } from "../../api/jobApi";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import img from "../../assets/images/bg1.jpg";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../utils/functions";
import Grid from "@mui/material/Grid";
import { BsShare } from "react-icons/bs";
import { GiArchiveRegister } from "react-icons/gi";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  OKShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Button from "react-bootstrap/esm/Button";
function DetailPage() {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  const jobSeekerId = localStorage.getItem("id")
    ? Number(localStorage.getItem("id"))
    : 0;
  const fetchData = async (id) => {
    const response = await getJobById(id);
    if (response.data.success) {
      setData(response.data.data);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchData(id);
  }, []);
  const style = {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 5,
      border: 0,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      width: "auto",
      padding: "30px 35px 10px 35px",
    },
    copyContainer: {
      display: "none",
    },
    title: {
      color: "aquamarine",
      fontStyle: "initial",
    },
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Paper elevation={5} style={{ padding: "20px", margin: "50px 0px" }}>
          <div className="title-detail">Detail About "{data.title}" Job</div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ padding: "50px 0px" }}
          >
            <Grid item xs={6} className="leftBox">
              <Box>
                <img src={data.picture} className="detail-img" />
              </Box>
            </Grid>
            <Grid item xs={6} className="right-detail-job">
              <Box>
                <div>
                  <b>Title: </b> {data.title}
                </div>
                <div>
                  <b>Department: </b>
                  {data.department}
                </div>
                <div>
                  <b>Type: </b>
                  {data.type}
                </div>
                <div>
                  <b>Salary: </b>
                  {data.salary}Rs
                </div>
                <div>
                  <b>Designation: </b>
                  {data.designation}
                </div>
                <div>
                  <b>Experience: </b>
                  {data.experience}
                </div>
                <div>
                  <b>Vecanies </b>:{data.noOfVecancies}
                </div>
                <div>
                  <b>Posted on: </b>
                  {data.title}
                </div>
                <div>
                  <b>Location: </b> {data.location}
                </div>
                <div>
                  <b>Last Date :</b> {data.lastDate}
                </div>
                <div>
                  <b>Company :</b> {data?.Company?.name}
                </div>
                <div style={{ marginTop: "10px" }}>
                  {isAuthenticated() ? (
                    <Link to={`/apply/${data.id}/${jobSeekerId}`}>
                      <Button variant="outline-success">
                        Apply Now <GiArchiveRegister />
                      </Button>{" "}
                    </Link>
                  ) : (
                    <Button
                      onClick={() => window.alert("Please login to continue")}
                      variant="outline-success"
                    >
                      Apply Now <GiArchiveRegister />
                    </Button>
                  )}
                </div>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="desc-class"
          >
            <Grid item xs={12} style={{ borderTop: "1px solid silver" }}>
              <Box>
                <h3 style={{ fontFamily: "initial" }}>Description</h3>
                <p>{data.description}</p>
              </Box>
            </Grid>
          </Grid>
          <div>
            <Box className="social-icon">
              <ShareSocial
                url={window.location.href}
                socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
                style={style}
                title="Share with your friends"
              />
            </Box>
          </div>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;
