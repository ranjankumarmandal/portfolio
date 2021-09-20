import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main>
        <img
          src="https://raw.githubusercontent.com/ranjankumarmandal/Resources/main/monstera.jpg"
          alt="background-image"
          className="absolute object-cover h-full w-full"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font bold cursive leading-none lg:leading-snug home-name">
            Hello. I'm Ranjan.
          </h1>
        </section>
      </main>
    );
  }
}

export default Home;
