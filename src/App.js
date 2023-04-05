import React, { useState } from "react";
import Data from "./data";
import List from "./list";

function App() {
  const [people, setpeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setpeople([])}>Clear all</button>
        {/* think how to pass this as a function */}
      </section>
    </main>
  );
}

export default App;

// lesson learnt:
// instead of const data we can also use export default and then just pass on the whole dataset
// if we are using const list insted of function list and then we are passisng on the parameter then we must use the arrow funciton to avoid infinite re-renering of the funcitons
// the parameter that we are passing can be any random name
// but if we are passing a state as a prop then it hould be constant
