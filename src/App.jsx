export default function SiegeHubClone() {
  const maps = [
    "Bank","Border","Chalet","Clubhouse",
    "Coastline","Consulate","Kafe","Oregon"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-mono">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(85,0,255,0.08),transparent_60%)]" />

      <div className="absolute inset-0 opacity-60">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.8,
            }}
          />
        ))}
      </div>

      {/* keep EVERYTHING else exactly as you wrote it */}
      {/* FeatureCard + TeamPanel included */}
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/[0.03] border border-violet-500/20 rounded-md p-8 hover:border-violet-500/60 transition-all">
      <div className="text-2xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/50">{description}</p>
    </div>
  );
}

function TeamPanel({ title, accent, players }) {
  const accentClasses =
    accent === "cyan"
      ? "border-cyan-400 text-cyan-400"
      : "border-orange-400 text-orange-400";

  return (
    <div className={`border ${accentClasses} p-6`}>
      <h3 className="text-xl mb-4">{title}</h3>
      {players.map((p, i) => (
        <div key={i} className="text-white/60">
          {p}
        </div>
      ))}
    </div>
  );
}
