import React, { Component } from "react";
import { Carousel } from "../../components/carousel/Carousel";
import OurServices from "../../components/our-services/OurServices";

export default class OurServicesPage extends Component {
  render() {
    return (
      <div>
        {" "}
        <Carousel
          title="Our Services"
          text="Select from one of our services below to learn more!"
          url={`https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`}
        />
        <OurServices />
      </div>
    );
  }
}

// export const OurServicesPage = () => (
//   <div>
//     <Carousel
//       title="Our Services"
//       text="Select from one of our services below to learn more!"
//       url={`https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80`}
//     />
//     <InfoBottom />
//     <Footer />
//   </div>
// );
