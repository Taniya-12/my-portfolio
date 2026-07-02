export default function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full bg-accent/25 blur-[110px]"
        style={{ animation: "blob 14s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-20 w-[380px] h-[380px] rounded-full bg-accent/15 blur-[120px]"
        style={{ animation: "blob 18s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full bg-orange-500/10 blur-[100px]"
        style={{ animation: "blob 20s ease-in-out infinite" }}
      />
    </div>
  );
}
