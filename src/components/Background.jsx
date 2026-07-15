/**
 * Site-wide layered environment: dark navy base, soft mesh-gradient blobs,
 * a faint engineering grid, and a low-opacity noise film for physical texture.
 * Fixed behind all content.
 */

const NOISE_TEXTURE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950"
    >
      {/* Mesh gradient blobs */}
      <div className="absolute -top-48 left-[8%] h-[580px] w-[580px] rounded-full bg-navy-900/60 blur-[140px]" />
      <div className="absolute right-[-12%] top-[10%] h-[520px] w-[520px] rounded-full bg-teal-900/45 blur-[150px]" />
      <div className="absolute left-[-14%] top-[42%] h-[540px] w-[540px] rounded-full bg-navy-900/50 blur-[150px]" />
      <div className="absolute bottom-[8%] right-[10%] h-[560px] w-[560px] rounded-full bg-teal-900/35 blur-[160px]" />
      <div className="absolute bottom-[-16%] left-[30%] h-[480px] w-[480px] rounded-full bg-navy-900/45 blur-[150px]" />

      {/* Fine engineering grid, fading toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248,250,252,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.7) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 85% 80% at 50% 30%, black, transparent)',
        }}
      />

      {/* Noise film */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE_TEXTURE }}
      />
    </div>
  )
}
