import { Wallet } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-icon">
            <Wallet size={20} />
          </div>

          <div>
            <h1>Expense Tracker</h1>
            <p>Manage your spending</p>
          </div>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          Local data
        </div>
      </div>
    </header>
  );
}

export default Header;