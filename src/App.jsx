import { Navbar, Product, FollowMe } from "./Components";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { Fragment } from "react";

function App() {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Fragment>
      <main
        className={`max-w-7xl relative mx-auto ${
          matches ? "w-full" : "w-[95%]"
        }`}
      >
        <Navbar />
        <section className="m-14 md:m-0">
          <Product />
        </section>
      </main>
      <FollowMe />
    </Fragment>
  );
}

export default App;
