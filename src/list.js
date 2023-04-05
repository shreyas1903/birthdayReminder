import React from "react";

function list({ people }) {
  // here we have to pass the state as the state is being manipulated
  return (
    <article>
      {people.map((hell) => {
        const { id, name, age, image } = hell;

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h4>{age} years </h4>
            </div>
          </article>
        );
      })}
    </article>
  );
}

export default list;
