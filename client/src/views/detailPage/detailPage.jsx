import React, { useEffect } from "react";
import "./detailPage.css";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getJobById } from "../../api/jobApi";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import img from "../../assets/images/bg1.jpg";
import Grid from "@mui/material/Grid";
function DetailPage() {
  const { id } = useParams();
  const [data, setData] = React.useState({});
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
  console.log("=========", data);
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
            <Grid item xs={6}>
              <Box>
                <img src={data.picture} className="detail-img" />
              </Box>
            </Grid>
            <Grid item xs={6}>
                          <Box className="right-detail-job">
                              
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;
