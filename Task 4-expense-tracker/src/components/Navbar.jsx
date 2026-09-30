import { Wallet } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="brand">
          <div className="brand-icon">
            <Wallet size={22} />
          </div>

          <div>
            <h1>Expense Tracker</h1>
            <span>Manage your money simply</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;