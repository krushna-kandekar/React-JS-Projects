import React from "react";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              className="w-120 h-90"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1200&q=100](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1200&q=100"
              alt="image"
            />
          </div>
          <div className="md:h-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum nobis ipsa facere quos eos repellat earum natus
              aspernatur porro eum. Assumenda aspernatur autem officia similique
              provident distinctio consequuntur ratione sequi? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolorum, maiores.
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum nobis ipsa facere quos eos repellat earum natus
              aspernatur porro eum. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Officiis, id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
