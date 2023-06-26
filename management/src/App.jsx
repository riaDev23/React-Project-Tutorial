import "./App.css";
import Customer from "./components/Customer";

const CUSTOMERS = [
  {
    id: 1,
    image: "https://picsum.photos/150/150",
    name: "강리아",
    birthday: "901014",
    gender: "남",
    job: "백수",
  },
  {
    id: 2,
    image: "https://picsum.photos/151/151",
    name: "쇼째즈",
    birthday: "910201",
    gender: "남",
    job: "백수",
  },
  {
    id: 3,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
];

console.log(CUSTOMERS);

function App() {
  return (
    <div>
      {CUSTOMERS.map((c) => {
        return <Customer key={c.id} customer={c} />;
      })}
    </div>
  );
}

export default App;
