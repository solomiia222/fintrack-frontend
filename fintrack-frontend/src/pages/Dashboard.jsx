import SummaryCard from "../components/SummaryCard";
import SpendingPieChart from "../components/SpendingPieChart";
import MonthlyLineChart from "../components/MonthlyLineChart";
import { transactions, budgets } from "../data/mockData";

function Dashboard() {
  const totalSpending = transactions.reduce((sum, item) => sum + item.amount, 0);
  const totalBudget = budgets.reduce((sum, item) => sum + item.limit, 0);
  const remainingBudget = totalBudget - totalSpending;

  return (
    <div>
      <h1>Dashboard</h1>
      <p className="page-subtitle">
        Overview of your financial activity and AI-based predictions.
      </p>

      <div className="summary-grid">
        <SummaryCard
          title="Total Spending"
          value={`€${totalSpending.toFixed(2)}`}
          description="Current monthly spending"
        />

        <SummaryCard
          title="Remaining Budget"
          value={`€${remainingBudget.toFixed(2)}`}
          description="Available budget this month"
        />

        <SummaryCard
          title="Predicted Spending"
          value="€1,620"
          description="AI forecast for month end"
        />

        <SummaryCard
          title="Top Category"
          value="Housing"
          description="Highest spending category"
        />
      </div>

      <div className="charts-grid">
        <SpendingPieChart />
        <MonthlyLineChart />
      </div>
    </div>
  );
}

export default Dashboard;