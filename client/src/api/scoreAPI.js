const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

export async function scoreAnswer(domain, question, answer) {
  const resp = await fetch(`${API_BASE}/api/score`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ domain, question, answer })
  });
  return resp.json();
}
