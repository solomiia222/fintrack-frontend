import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">FinTrack AI</div>

      <nav className="nav">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/budgets">Budgets</NavLink>
        <NavLink to="/insights">AI Insights</NavLink>
      </nav>
    </header>
  );
}

export default Header;