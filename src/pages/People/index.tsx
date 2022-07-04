import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";

import { PeopleList } from "./screens";

function Persons() {
  return (
    <Routes>
      <Route path="/" element={<PeopleList />} />
    </Routes>
  );
}

export default observer(Persons);
