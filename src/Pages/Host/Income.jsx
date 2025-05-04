export default function Income() {
  const transactions = [
    { amount: 720, date: "Jan 3, '25", id: "1" },
    { amount: 560, date: "Dec 4, '24", id: "2" },
    { amount: 980, date: "Dec 27, '24", id: "3" },
  ];

  return (
    <section className="host-income">
      <h1>Income</h1>
      <p>Last 30 days</p>
      <h2>$2,260</h2>
      <img src=".././public/Images/income-graph.png" className="graph" />
      <div className="info-header">
        <h3>Your transactions (3)</h3>
        <p>Last 30 days</p>
      </div>
      <div className="transactions">
        {transactions.map((item) => (
          <div key={item.id} className="transaction">
            <h3>${item.amount}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
