import Head from "next/head";
import Image from "next/image";
import { Box } from "@mui/material";
import { fontSize, padding } from "@mui/system";

export default function Home() {
  return (
    <Box
      sx={{
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <div className="background" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3>Who Need Our service?</h3>
              <h2>내용이 필요합니다 </h2>
              <p>내용이 필요합니다</p>
              <div className="text-center text-lg-start">
                <a
                  href="#"
                  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Need to find answer?</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="images/features.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Box>
  );
}
