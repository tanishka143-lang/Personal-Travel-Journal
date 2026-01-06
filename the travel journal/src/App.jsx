import marker from "./images/marker.png";
import Location from "./Location.jsx";
import Header from "./Header.jsx";
import data from "./data.jsx";
function App() {
  const entryElements = data.map((ent) => {
    return (
      <Location
        key={ent.id}
        img={ent.img}
        title={ent.title}
        State={ent.State}
        MapLink={ent.MapLink}
        dates={ent.dates}
        text={ent.text}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

export default App;
