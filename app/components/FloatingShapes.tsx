export const FloatingShapes = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        isolation: "isolate",
        zIndex: 1,
        transform: "translate3d(0,0,0)",
      }}
    >
      {/* Pink shapes */}
      <div className="absolute w-15 h-15 border-2 border-pink-400/30 rounded-full top-[15%] left-[8%] animate-bounce" />
      <div className="absolute w-10 h-10 border border-pink-600/40 rotate-45 top-[70%] right-[20%] animate-spin" />

      {/* Blue shapes */}
      <div className="absolute w-20 h-0.5 border border-blue-500/40 top-[35%] left-[75%] animate-spin" />
      <div className="absolute w-12 h-12 border-2 border-blue-600/30 rounded-full top-[60%] left-[15%] animate-pulse" />
      <div className="absolute w-8 h-8 border border-blue-800/50 rounded-lg top-[25%] right-[30%] animate-spin" />

      {/* Purple shapes */}
      <div className="absolute w-18 h-18 border-2 border-purple-400/30 rounded-full top-[80%] right-[10%] animate-ping" />
      <div className="absolute w-9 h-9 border border-purple-600/40 rotate-30 top-[10%] left-[45%] animate-bounce" />
      <div className="absolute w-24 h-1 border border-purple-700/30 top-[50%] right-[5%] animate-ping" />

      {/* Cyan shapes */}
      <div className="absolute w-6 h-6 border border-cyan-500/40 rounded-full top-[45%] left-[25%] animate-spin" />
      <div className="absolute w-14 h-14 border-2 border-cyan-600/30 rounded-2xl rotate-15 top-[30%] left-[60%] animate-pulse" />

      {/* Green shapes */}
      <div className="absolute w-11 h-11 border border-green-500/40 rounded-full top-[85%] left-[40%] animate-bounce" />
      <div className="absolute w-16 h-0.5 border border-green-600/30 top-[65%] right-[40%] animate-bounce" />

      {/* Orange shapes */}
      <div className="absolute w-10 h-10 border border-orange-500/40 rotate-60 top-[5%] right-[50%] animate-ping" />
      <div className="absolute w-7 h-7 border border-orange-600/50 rounded-full top-[75%] left-[65%] animate-pulse" />

      {/* Indigo shape */}
      <div className="absolute w-13 h-13 border-2 border-indigo-500/30 rounded-xl top-[40%] left-[5%] animate-spin" />
    </div>
  );
};
