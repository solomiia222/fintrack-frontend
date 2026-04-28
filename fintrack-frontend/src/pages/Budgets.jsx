import BudgetProgress from "../components/BudgetProgress";
import { budgets } from "../data/mockData";

function Budgets() {
  return (
    <div>
      <h1>Budgets</h1>
      <p className="page-subtitle">
        Track monthly budgets and detect overspending.
      </p>

      <div className="budget-grid">
        {budgets.map((budget) => (
          <BudgetProgress
            key={budget.category}
            category={budget.category}
            spent={budget.spent}
            limit={budget.limit}
          />
        ))}
      </div>
    </div>
  );
}

export default Budgets;