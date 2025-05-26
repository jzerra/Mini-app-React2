import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
    setUser(tg.initDataUnsafe.user || null);
  }, []);

  const handleClick = () => {
    tg.close(); // Closes the mini-app
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the Token Mining Mini-App</h1>
      {user && (
        <div style={styles.userInfo}>
          <p>Hello, <strong>{user.first_name}</strong>!</p>
          <p>Telegram ID: {user.id}</p>
        </div>
      )}
      <button style={styles.button} onClick={handleClick}>
        Close Mini-App
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#FFD700",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  userInfo: {
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#FFD700",
    color: "#000",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default App;
