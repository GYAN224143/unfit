import { useState } from "react";

const people = [
  { id: 1, name: "Featured" },
  { id: 2, name: "Featured one" },
  { id: 3, name: "Featured two" },
  { id: 4, name: "Featured three" },
];
const ProductTopBar = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="top-bar-section ">
      <h3>Multivitamins</h3>
      <div className="relative  selector">
        <select
          value={selected.id}
          onChange={(e) =>
            setSelected(people.find((p) => p.id === parseInt(e.target.value)))
          }
          className="block w-full focus:outline-none "
        >
          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductTopBar;
