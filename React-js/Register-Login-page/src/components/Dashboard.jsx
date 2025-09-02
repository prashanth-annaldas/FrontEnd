function Dashboard({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
}

export default Dashboard;
