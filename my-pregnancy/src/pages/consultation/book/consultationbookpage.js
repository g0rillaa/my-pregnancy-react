import Footer from "../../../global-components/footer/footer";
import Navbar from "../../../global-components/navbar2/navbar2.js";
import { Link } from 'react-router-dom';

import ConsultationBook from "./consultationbook.js";

function ConsultationPage(){
  return (
    <div>
      <div style={{minHeight: 'calc(100vh - 202px)'}}>
        <Navbar></Navbar>
        <div style={{margin: "10px"}}>
          <Link to={`/consultation/manage`}>
            <h2>← Back to Consultations</h2>
          </Link>
        </div>
        <ConsultationBook></ConsultationBook>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default ConsultationPage;
