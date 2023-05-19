import React from "react";
import Carousel from "../components/Carousel.jsx";

const slides = [
  
  "https://hips.hearstapps.com/hmg-prod/images/veg-garden-1525260021.jpg",
  "https://www.gannett-cdn.com/-mm-/129bc326106e4ea50bc2e46b1892292c00453fe3/c=0-217-4262-2625/local/-/media/2017/05/03/Westchester/Westchester/636294139087548295-GettyImages-613517018-1-.jpg",
  "https://www.farmersalmanac.com/wp-content/uploads/2020/11/garden-harvest-produce-last-longer-As_305375846.jpeg"
]

export default function IndexPage() {
    return(
      <main className = "App">
        <section style={{backgroundColor: "#ffffff"}}>
        
        <hr style={{borderBottom: '10px solid #ccc', paddingTop: "10px"}} />
        <div className="max-w-lg">
          <Carousel autoSlide = {true}>
            {slides.map((s) => (
              <img src = {s} />
            ))}
          </Carousel>
        </div>

        <div style={{ backgroundColor: "#ffff", height: "20px" }}></div>


  <div style={{ backgroundColor: "#ccc", height: "10px" }}></div>
  <div style={{ textAlign: "center" }}>
    <h4 style={{ paddingRight: "50px", marginBottom: "1rem", fontSize: "4rem", fontWeight: "bold", fontFamily: "Open Sans", backgroundColor: "#004600", color: "#f2f2f2" }}>
          Why Leafy?
          <div style={{ backgroundColor: "#ccc", height: "10px", width: "1400px" }}></div> 
    </h4>
    
    
    <table style={{ borderCollapse: "collapse", margin: "auto" , backgroundColor: "#004600", color: "#f2f2f2"}}>
      <thead>
        <tr style={{borderTop: "10px solid #ccc", borderBottom: "10px solid #ccc" , paddingBottom: "5rem"}}>

          <th style={{ padding: "0.5rem", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "1.575rem", borderRight: "8px solid #ccc", borderLeft: "8px solid #ccc" }}>
            1. Build Community
          </th>

          

          <th style={{ padding: "0.5rem", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "1.575rem", borderRight: "8px solid #ccc", borderLeft: "8px solid #ccc"}}>
            2. Cost &amp; Time Effective
          </th>

          <th style={{ padding: "0.5rem", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "1.575rem", borderRight: "8px solid #ccc", borderLeft: "8px solid #ccc" }}>
            3. Sustainable Mission
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderTop: "1px solid #ccc", borderRight: "10px solid #ccc", borderLeft: "10px solid #ccc", borderBottom: "10px sold #ccc" }}>
          <td style={{ padding: "0.5rem" , textAlign: "center" }}>
            <img src ="https://cdn-icons-png.flaticon.com/512/3090/3090423.png"height="350" width="350" />
            </td>


          <td style={{ padding: "0.5rem", textAlign: "center" , alignContent: "center" }}>
            <img src = "https://cdn-icons-png.flaticon.com/512/6091/6091840.png" height="350" width="350"/>
            </td>

            <td style={{ padding: "0.5rem" , textAlign: "center" }}>
            <img src = "https://cdn-icons-png.flaticon.com/512/3637/3637990.png" height="350" width="350"/> 
          </td>

          

        </tr>
        <tr>
          <td style={{ padding: "0.5rem", fontFamily: "Open Sans", fontSize: "1.5rem" , borderBottom: '10px solid #ccc', borderLeft: '10px solid #ccc', borderRight: '10px solid #ccc', borderTop: "10px solid #ccc"}}>
            Promotes interactions amongst neighbors
          </td>
          
          <td style={{ padding: "0.5rem" , fontFamily: "Open Sans", fontSize: "1.5rem", borderBottom: '10px solid #ccc', borderLeft: '10px solid #ccc', borderRight: '10px solid #ccc', borderTop: "10px solid #ccc"}}>
            Can help save money &amp; time with its ease of access in the
            vicinity
          </td>

          <td style={{ padding: "0.5rem" , fontFamily: "Open Sans", fontSize: "1.5rem", borderBottom: '10px solid #ccc', borderLeft: '10px solid #ccc', borderRight: '10px solid #ccc', borderTop: "10px solid #ccc"}}>
            Helping conserve existing native trees and plants
          </td>
          
        </tr>


      </tbody>

    </table>
   <button style={{
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.5rem",
    fontFamily: "Open Sans",
    cursor: "pointer",
    marginTop: "1rem",
    marginBottom: "1rem"
  }}> Sign Up / Login </button >


    
    <table style={{ paddingTop: "10px", paddingBottom: "10px" , backgroundColor: "#004600", color: "#f2f2f2"}}>
    <tbody style={{borderTop: '10px solid #ccc', borderBottom: '10px solid #ccc', borderLeft: '10px solid #ccc', borderRight: '10px solid #ccc'}}>
        <tr>
          <td>
            <img src="https://bearwise.org/wp-content/uploads/2022/04/garden-produce.jpg" height="812" width="812" style={{display: 'block', borderRight: '10px solid #ccc'}} />
          </td>
          <td>
            <h3 style={{ fontAlign: "Left",fontWeight: "bold", fontFamily: "Open Sans", fontSize: "2rem", paddingBottom: "20px"}}> HOW WE HELP? </h3>
            <ul style={{ paddingLeft: "20px" , fontFamily: "Open Sans", fontSize: "1.5rem"}}>
              <li><span>&#10003;</span> Get a chance to meet your neighbors!</li>
              <li><span>&#10003;</span> Make new friends!</li>
              <li><span>&#10003;</span> See where your produce is coming from!  </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
 
<button style={{
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.5rem",
    fontFamily: "Open Sans",
    cursor: "pointer",
    marginTop: "1rem",
    marginBottom: "1rem"
  }}> Search Here!</button >

<hr style={{borderBottom: '10px solid #ccc'}} />
  </div>
  </section>

      </main>

      
    );
}