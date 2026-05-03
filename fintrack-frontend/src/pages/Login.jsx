import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name.trim()) return;

    localStorage.setItem("user", name);

    navigate("/");
    window.location.reload(); // щоб App.jsx побачив user
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f7fa",
      }}
    >
      <div
        style={{
          padding: "40px",
          background: "white",
          borderRadius: "12px",
          width: "320px",
          textAlign: "center",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Welcome to FinTrack</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin();
          }}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "100%",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Login;