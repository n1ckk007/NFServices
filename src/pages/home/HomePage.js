import React from "react";
import { Carousel } from "../../components/carousel/Carousel";
import { Home } from "../../components/home/Home";

export const HomePage = () => (
  <div>
    <Carousel
      title="Welcome to Nicks Financial Services"
      text="We are passionate about providing an exceptional service and expert advice to assist you in achieving your financial goals!"
      url={`https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80`}
    />

    <Home />
  </div>
);
