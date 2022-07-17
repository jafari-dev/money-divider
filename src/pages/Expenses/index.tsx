import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";

import { ExpensesList } from "./screens";

function Expenses() {
  return (
    <Routes>
      <Route path="/" element={<ExpensesList />} />
    </Routes>
  );
}

export default observer(Expenses);
