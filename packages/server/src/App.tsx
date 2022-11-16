import { Link, Route, Routes } from "react-router-dom";
import { Page1 } from "./Page";
import { Page2 } from "./Page2";

export function App() {
  return (
    <>

        <Link to={'/'}>Page 1</Link>
        <Link to={'/page'}>Page 2</Link>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page" element={<Page2 />} />
        </Routes>

    </>
  )
}