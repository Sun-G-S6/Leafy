import React from "react";
import Carousel from "../components/Carousel.jsx";
//import Table from "../components/table.jsx";

const slides = [
  "https://www.racv.com.au/content/dam/racv/images/content-hub/home-property/gardening/how-to-grow-a-vegetable-patch/1600x600GettyImages-532865778.jpg.transform/heroMob/image.jpg",
  "https://www.racv.com.au/content/dam/racv/images/content-hub/home-property/gardening/how-to-grow-a-vegetable-patch/1600x600GettyImages-532865778.jpg.transform/heroMob/image.jpg",
  "https://www.gannett-cdn.com/-mm-/129bc326106e4ea50bc2e46b1892292c00453fe3/c=0-217-4262-2625/local/-/media/2017/05/03/Westchester/Westchester/636294139087548295-GettyImages-613517018-1-.jpg",
  "https://www.farmersalmanac.com/wp-content/uploads/2020/11/garden-harvest-produce-last-longer-As_305375846.jpeg"
]

export default function IndexPage() {
    return(
      <main className = "App">
        <div className="max-w-lg">
          <Carousel autoSlide = {true}>
            {slides.map((s) => (
              <img src = {s} />
            ))}
          </Carousel>
        </div>


        <div style ={{ textAlign: "center" }}>
        <table>
          <caption> //------Why Leafy? --------// </caption>
          
          <thead>
            <tr>
              <th>    -----BUILD COMMUNITY-----    </th>
              
              <th>     ------COST & TIME EFFECTIVE-----    </th>

              <th>     ----SUSTAINABLE  MISSION--------   </th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Add picture</td>
              <td>Add picture </td>
              <td>Add picture</td>
            </tr>
            <tr>
              <td>|| Promotes interactions amongst neighbors || </td>
              <td>|| Can help save money & time with its ease of access in the vicinity ||</td>
              <td>|| Helping conserve existing native trees and plants || </td>
            </tr>
          </tbody>
        </table>
        </div>

      </main>

      
    );
}