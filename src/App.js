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
