function StatCard({ title, value, icon, description }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-title">{title}</span>

        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <div className="stat-value">
        {value}
      </div>

      <p className="stat-description">
        {description}
      </p>
    </div>
  );
}

export default StatCard;