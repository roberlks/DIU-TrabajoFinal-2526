import { Bell, ArrowLeft, Calendar, Users, ShoppingBag, MapPin, Clock, Tag, Info, Plus, Minus, CheckCircle, ChevronRight } from "lucide-react";
import { HashRouter, Routes, Route, useNavigate } from "react-router";

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  primary: "#2D6A4F",
  accent: "#52B788",
  bg: "#FFFFFF",
  surface: "#F8F9FA",
  textPrimary: "#1A1A1A",
  textSecondary: "#6C757D",
  heroEmoji: "#E8F5E9",
  border: "#F0F0F0",
  borderMid: "#E0E0E0",
  infoBlue: "#EFF6FF",
};

// ─── Mobile shell: centers content at 390px ───────────────────────────────────
function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100dvh", background: "#ECEEF1", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "100%",
          maxWidth: 390,
          minHeight: "100dvh",
          background: C.bg,
          position: "relative",
          fontFamily: "'Inter', sans-serif",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Bottom Navigation ────────────────────────────────────────────────────────
function BottomNav({ active }: { active: "mercado" | "productores" | "reserva" }) {
  const navigate = useNavigate();
  const items = [
    { id: "mercado" as const, label: "Mercado", Icon: Calendar, path: "/" },
    { id: "productores" as const, label: "Productores", Icon: Users, path: "/productor/huerta-la-vega" },
    { id: "reserva" as const, label: "Mi reserva", Icon: ShoppingBag, path: "/confirmacion" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 390,
        height: 56,
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 100,
      }}
    >
      {items.map(({ id, label, Icon, path }) => {
        const isActive = active === id;
        return (
          <div
            key={id}
            onClick={() => navigate(path)}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, cursor: "pointer" }}
          >
            {id === "reserva" && active === "reserva" ? (
              <div style={{ position: "relative" }}>
                <Icon size={22} color={C.primary} />
                <span
                  style={{
                    position: "absolute", top: -4, right: -6,
                    background: C.accent, color: "#fff", fontSize: 9, fontWeight: 700,
                    borderRadius: "50%", width: 14, height: 14,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  1
                </span>
              </div>
            ) : (
              <Icon size={22} color={isActive ? C.primary : C.textSecondary} />
            )}
            <span style={{ fontSize: 10, fontWeight: isActive ? 600 : 400, color: isActive ? C.primary : C.textSecondary, lineHeight: 1 }}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── PAGE: Wireframe (lo-fi) ──────────────────────────────────────────────────
function WireframePage() {
  const navigate = useNavigate();
  const wf = { fill: "#E0E0E0", fillDark: "#9E9E9E", text: "#1A1A1A", border: "#BDBDBD", bg: "#FAFAFA" };

  return (
    <MobileShell>
      <div style={{ flex: 1, background: wf.bg, display: "flex", flexDirection: "column", paddingBottom: 56 }}>
        <div style={{ height: 56, background: "#fff", borderBottom: `1px solid ${wf.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", flexShrink: 0 }}>
          <div style={{ width: 140, height: 16, background: wf.fillDark, borderRadius: 4 }} />
          <div style={{ width: 22, height: 22, background: wf.fill, borderRadius: 4 }} />
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ margin: "16px 16px 0", height: 160, background: wf.fill, borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ width: 130, height: 14, background: wf.fillDark, borderRadius: 20 }} />
            <div style={{ width: 180, height: 24, background: wf.fillDark, borderRadius: 4 }} />
            <div style={{ width: 260, height: 12, background: "#ccc", borderRadius: 4 }} />
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <div style={{ width: 96, height: 28, background: "#fff", borderRadius: 20, opacity: 0.7 }} />
              <div style={{ width: 110, height: 28, background: wf.fillDark, borderRadius: 20 }} />
            </div>
          </div>

          <div style={{ margin: "20px 16px 12px" }}>
            <div style={{ width: 210, height: 16, background: wf.fillDark, borderRadius: 4 }} />
          </div>

          <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{ height: 100, background: wf.fill, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <div style={{ width: 48, height: 48, background: wf.fillDark, borderRadius: 8, opacity: 0.6 }} />
                <div style={{ width: 70, height: 11, background: wf.fillDark, borderRadius: 4 }} />
                <div style={{ width: 54, height: 9, background: wf.border, borderRadius: 4 }} />
              </div>
            ))}
          </div>

          <div style={{ margin: "20px 16px 12px" }}>
            <div style={{ width: 200, height: 16, background: wf.fillDark, borderRadius: 4 }} />
          </div>

          {[0, 1].map((i) => (
            <div key={i} style={{ margin: "0 16px 12px", background: "#fff", borderRadius: 12, padding: 16, border: `1px solid ${wf.border}`, display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: wf.fill, flexShrink: 0 }} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ width: "75%", height: 13, background: wf.fillDark, borderRadius: 4 }} />
                <div style={{ width: "55%", height: 11, background: wf.fill, borderRadius: 4 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ width: 58, height: 14, background: wf.fillDark, borderRadius: 4 }} />
                  <div style={{ width: 70, height: 26, background: wf.fillDark, borderRadius: 20 }} />
                </div>
              </div>
            </div>
          ))}

          <div style={{ padding: "20px 16px", textAlign: "center" }}>
            <button onClick={() => navigate("/")} style={{ background: wf.fillDark, color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, cursor: "pointer" }}>
              Ver mockup hi-fi →
            </button>
          </div>
        </div>

        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, height: 56, background: "#fff", borderTop: `1px solid ${wf.border}`, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ width: 22, height: 22, background: i === 0 ? wf.fillDark : wf.fill, borderRadius: 4 }} />
              <div style={{ width: 40, height: 8, background: i === 0 ? wf.fillDark : wf.fill, borderRadius: 4 }} />
            </div>
          ))}
        </div>
      </div>
    </MobileShell>
  );
}

// ─── PAGE: Home ───────────────────────────────────────────────────────────────
function HomePage() {
  const navigate = useNavigate();
  const categories = [
    { emoji: "🥦", name: "Verduras", count: "3 productores", path: "/verduras" },
    { emoji: "🍅", name: "Fruta", count: "2 productores", path: "/fruta" },
    { emoji: "🧀", name: "Lácteos", count: "1 productor", path: "/lacteos" },
    { emoji: "🫙", name: "Conservas", count: "2 productores", path: "/conservas" },
  ];
  const featured = [
    { emoji: "🍋", name: "Limones ecológicos", producer: "Finca La Vega · Loja, Granada", price: "1,20 €/kg" },
    { emoji: "🍓", name: "Mix frutos rojos", producer: "El Cortijillo · Montefrío, Granada", price: "3,50 €/250g" },
  ];

  return (
    <MobileShell>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingBottom: 56 }}>
        <div style={{ height: 56, background: C.bg, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", flexShrink: 0 }}>
          <span style={{ fontSize: 18, fontWeight: 600, color: C.primary }}>Ecomercado UGR</span>
          <Bell size={22} color={C.textSecondary} />
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ margin: "16px 16px 0", height: 160, background: C.primary, borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ alignSelf: "flex-start", background: C.accent, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", padding: "3px 10px", borderRadius: 20 }}>
              PRÓXIMO MERCADO
            </span>
            <span style={{ color: "#fff", fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}>Jueves 19 Jun</span>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>10:00 – 14:00 · Paseíllos UGR, Fuentenueva</span>
            <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
              <button style={{ background: "#fff", color: C.primary, border: "none", borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Ver en mapa</button>
              <button style={{ background: C.accent, color: "#fff", border: "none", borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>+ Recordarme</button>
            </div>
          </div>

          <div style={{ margin: "20px 16px 12px" }}>
            <span style={{ fontSize: 18, fontWeight: 600, color: C.textPrimary }}>Productores confirmados (8)</span>
          </div>
          <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {categories.map((cat) => (
              <div key={cat.name} onClick={() => navigate(cat.path)} style={{ height: 100, background: C.surface, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", cursor: "pointer" }}>
                <span style={{ fontSize: 36 }}>{cat.emoji}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.textPrimary }}>{cat.name}</span>
                <span style={{ fontSize: 12, color: C.textSecondary }}>{cat.count}</span>
              </div>
            ))}
          </div>

          <div style={{ margin: "20px 16px 12px" }}>
            <span style={{ fontSize: 18, fontWeight: 600, color: C.textPrimary }}>Destacados de la semana</span>
          </div>
          {featured.map((item) => (
            <div key={item.name} style={{ margin: "0 16px 12px", background: C.bg, borderRadius: 12, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: C.heroEmoji, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>{item.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary }}>{item.name}</div>
                <div style={{ fontSize: 13, color: C.textSecondary, marginTop: 2 }}>{item.producer}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: C.primary }}>{item.price}</span>
                  <button onClick={() => navigate("/producto/tomates-rama")} style={{ background: C.primary, color: "#fff", border: "none", borderRadius: 20, padding: "5px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Reservar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BottomNav active="mercado" />
      </div>
    </MobileShell>
  );
}

// ─── PAGE: Product Listing ────────────────────────────────────────────────────
function ListingPage() {
  const navigate = useNavigate();
  const chips = ["Todos", "Km 0", "Temporada", "Disponible hoy"];
  const producers = [
    { initial: "H", name: "Huerta La Vega", origin: "Loja" },
    { initial: "E", name: "El Olivar", origin: "Illora" },
    { initial: "C", name: "Cortijo Nuevo", origin: "Güevéjar" },
  ];
  const products = [
    { emoji: "🍅", name: "Tomates rama", producer: "Huerta La Vega", price: "1,80 €/kg" },
    { emoji: "🫑", name: "Pimientos rojos", producer: "El Olivar", price: "2,20 €/kg" },
    { emoji: "🥬", name: "Lechuga variada", producer: "Cortijo Nuevo", price: "1,50 €/ud" },
    { emoji: "🥒", name: "Calabacín", producer: "Huerta La Vega", price: "1,20 €/kg" },
  ];

  return (
    <MobileShell>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingBottom: 56 }}>
        <div style={{ height: 56, background: C.bg, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", padding: "0 16px", flexShrink: 0 }}>
          <ArrowLeft size={22} color={C.textPrimary} style={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
          <span style={{ flex: 1, textAlign: "center", fontSize: 20, fontWeight: 700, color: C.textPrimary, marginRight: 34 }}>Verduras</span>
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ display: "flex", gap: 8, padding: "12px 16px", overflowX: "auto" }}>
            {chips.map((chip, i) => (
              <button key={chip} style={{ flexShrink: 0, background: i === 0 ? C.primary : C.bg, color: i === 0 ? "#fff" : C.primary, border: i === 0 ? "none" : `1.5px solid ${C.primary}`, borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
                {chip}
              </button>
            ))}
          </div>

          <div style={{ margin: "0 16px 16px", background: C.surface, borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.textPrimary }}>Productores</span>
              <ChevronRight size={16} color={C.textSecondary} />
            </div>
            {producers.map((p) => (
              <div key={p.name} onClick={() => navigate("/productor/huerta-la-vega")} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, cursor: "pointer" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, flexShrink: 0 }}>{p.initial}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.textPrimary }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: C.textSecondary }}>{p.origin}</div>
                </div>
              </div>
            ))}
          </div>

          {products.map((prod) => (
            <div key={prod.name} style={{ margin: "0 16px 12px", background: C.bg, borderRadius: 12, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 80, height: 80, borderRadius: 12, background: C.heroEmoji, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, flexShrink: 0 }}>{prod.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary }}>{prod.name}</div>
                <div style={{ fontSize: 13, color: C.textSecondary, marginTop: 2 }}>{prod.producer}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: C.primary }}>{prod.price}</span>
                  <button onClick={() => navigate("/producto/tomates-rama")} style={{ background: C.primary, color: "#fff", border: "none", borderRadius: 20, padding: "5px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Reservar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BottomNav active="mercado" />
      </div>
    </MobileShell>
  );
}

// ─── PAGE: Product Detail ─────────────────────────────────────────────────────
function DetailPage() {
  const navigate = useNavigate();
  const slots = ["10:00 – 11:00", "11:00 – 12:00", "12:00 – 14:00"];

  return (
    <MobileShell>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingBottom: 56 }}>
        <div style={{ height: 56, background: C.bg, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", padding: "0 16px", flexShrink: 0 }}>
          <ArrowLeft size={22} color={C.textPrimary} style={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
          <span style={{ flex: 1, textAlign: "center", fontSize: 20, fontWeight: 700, color: C.textPrimary, marginRight: 34 }}>Tomates rama</span>
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ margin: 16, height: 180, background: C.heroEmoji, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>🍅</div>

          <div style={{ padding: "0 16px 16px" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: C.textPrimary }}>Tomates rama</div>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              {["Km 0", "Temporada"].map((chip) => (
                <span key={chip} style={{ border: `1.5px solid ${C.primary}`, color: C.primary, borderRadius: 8, padding: "3px 10px", fontSize: 12, fontWeight: 600 }}>{chip}</span>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
              <Users size={16} color={C.textSecondary} />
              <span style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary }}>Huerta La Vega</span>
              <span style={{ fontSize: 13, color: C.textSecondary }}>· Loja, Granada · 48 km</span>
            </div>

            <p style={{ fontSize: 14, color: C.textSecondary, marginTop: 8, lineHeight: 1.55 }}>
              Tomates cultivados sin pesticidas en finca familiar. Recolección el mismo día del mercado.
            </p>

            <div style={{ fontSize: 26, fontWeight: 700, color: C.primary, marginTop: 10 }}>1,80 €/kg</div>

            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.textPrimary, marginBottom: 10 }}>Cantidad</div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <button style={{ width: 36, height: 36, borderRadius: "50%", border: `2px solid ${C.primary}`, background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Minus size={16} color={C.primary} />
                </button>
                <span style={{ fontSize: 18, fontWeight: 700, color: C.textPrimary, minWidth: 52, textAlign: "center" }}>1 kg</span>
                <button style={{ width: 36, height: 36, borderRadius: "50%", background: C.primary, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Plus size={16} color="#fff" />
                </button>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.primary, marginTop: 8 }}>Total: 1,80 €</div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.textPrimary, marginBottom: 10 }}>Franja de recogida</div>
              {slots.map((slot, i) => (
                <div key={slot} style={{ height: 52, border: i === 0 ? `2px solid ${C.primary}` : `1px solid ${C.borderMid}`, borderRadius: 8, background: i === 0 ? C.heroEmoji : C.bg, display: "flex", alignItems: "center", padding: "0 16px", gap: 12, marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: i === 0 ? C.primary : "#fff", border: i === 0 ? "none" : `2px solid ${C.borderMid}`, boxShadow: i === 0 ? `0 0 0 3px ${C.heroEmoji}, 0 0 0 5px ${C.primary}` : "none", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? C.primary : C.textPrimary }}>{slot}</span>
                </div>
              ))}
            </div>

            <button onClick={() => navigate("/confirmacion")} style={{ width: "100%", height: 52, background: C.primary, color: "#fff", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer", marginTop: 8 }}>
              Confirmar reserva
            </button>
            <div style={{ textAlign: "center", fontSize: 13, color: C.textSecondary, marginTop: 8 }}>Sin necesidad de crear cuenta</div>
          </div>
        </div>

        <BottomNav active="reserva" />
      </div>
    </MobileShell>
  );
}

// ─── QR pattern ───────────────────────────────────────────────────────────────
function QRPattern() {
  const cellSize = 9;
  const cells = 18;
  const size = cellSize * cells;

  const isFinderPattern = (r: number, c: number) => {
    const inTL = r < 7 && c < 7;
    const inTR = r < 7 && c >= cells - 7;
    const inBL = r >= cells - 7 && c < 7;
    if (inTL) return (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4));
    if (inTR) return (r === 0 || r === 6 || c === cells - 1 || c === cells - 7 || (r >= 2 && r <= 4 && c >= cells - 5 && c <= cells - 3));
    if (inBL) return (r === cells - 1 || r === cells - 7 || c === 0 || c === 6 || (r >= cells - 5 && r <= cells - 3 && c >= 2 && c <= 4));
    return false;
  };
  const seed = (r: number, c: number) => ((r * 17 + c * 31 + r * c * 7) % 3) === 0;

  const cells2d: boolean[][] = [];
  for (let r = 0; r < cells; r++) {
    cells2d[r] = [];
    for (let c = 0; c < cells; c++) cells2d[r][c] = isFinderPattern(r, c) || seed(r, c);
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {cells2d.map((row, r) => row.map((filled, c) => filled ? <rect key={`${r}-${c}`} x={c * cellSize + 1} y={r * cellSize + 1} width={cellSize - 2} height={cellSize - 2} fill="#333333" /> : null))}
    </svg>
  );
}

// ─── PAGE: Confirmation ───────────────────────────────────────────────────────
function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <MobileShell>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingBottom: 56 }}>
        <div style={{ height: 56, background: C.bg, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.textPrimary }}>Mi reserva</span>
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ margin: "20px 16px", border: `1px solid ${C.accent}`, borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <CheckCircle size={56} color={C.primary} strokeWidth={1.5} />
            <div style={{ fontSize: 20, fontWeight: 700, color: C.textPrimary }}>¡Reserva confirmada!</div>
            <div style={{ fontSize: 14, color: C.textSecondary, textAlign: "center" }}>Muestra este código al llegar al mercado</div>
            <div style={{ width: 162, height: 162, background: "#fff", border: `1px solid ${C.borderMid}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <QRPattern />
            </div>
            <div style={{ fontSize: 12, color: C.textSecondary, fontFamily: "monospace" }}>RES-20260619-042</div>
          </div>

          <div style={{ margin: "0 16px 16px", background: C.surface, borderRadius: 12, padding: 16 }}>
            {([
              { Icon: ShoppingBag, text: "Tomates rama · 1 kg", price: "1,80 €" },
              { Icon: Clock, text: "Jueves 19 Jun · 10:00 – 11:00", price: null },
              { Icon: MapPin, text: "Paseíllos UGR, Fuentenueva", price: null },
              { Icon: Tag, text: "Recogida en mano, sin envío", price: null },
            ] as const).map(({ Icon, text, price }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < 3 ? 12 : 0 }}>
                <Icon size={16} color={C.textSecondary} />
                <span style={{ fontSize: 14, color: C.textPrimary, flex: 1 }}>{text}</span>
                {price && <span style={{ fontSize: 14, fontWeight: 600, color: C.primary }}>{price}</span>}
              </div>
            ))}
          </div>

          <div style={{ margin: "0 16px 16px", background: C.infoBlue, borderRadius: 8, padding: "12px 16px", borderLeft: `3px solid ${C.primary}`, display: "flex", alignItems: "flex-start", gap: 10 }}>
            <Info size={15} color={C.primary} style={{ flexShrink: 0, marginTop: 1 }} />
            <span style={{ fontSize: 13, color: C.textPrimary, lineHeight: 1.5 }}>Si no puedes venir, cancela antes de las 8:00 del día del mercado.</span>
          </div>

          <div style={{ margin: "0 16px 24px" }}>
            <button onClick={() => navigate("/")} style={{ width: "100%", height: 48, background: C.bg, border: `1.5px solid ${C.primary}`, borderRadius: 12, fontSize: 15, fontWeight: 600, color: C.primary, cursor: "pointer" }}>
              Volver al mercado
            </button>
          </div>
        </div>

        <BottomNav active="reserva" />
      </div>
    </MobileShell>
  );
}

// ─── PAGE: Producer Profile ───────────────────────────────────────────────────
function ProducerPage() {
  const navigate = useNavigate();
  const products = [
    { emoji: "🍅", name: "Tomates rama", price: "1,80 €/kg" },
    { emoji: "🫑", name: "Pimientos rojos", price: "2,20 €/kg" },
    { emoji: "🥬", name: "Lechuga variada", price: "1,50 €/ud" },
  ];

  return (
    <MobileShell>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingBottom: 56 }}>
        <div style={{ height: 56, background: C.bg, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", padding: "0 16px", flexShrink: 0 }}>
          <ArrowLeft size={22} color={C.textPrimary} style={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
          <span style={{ flex: 1, textAlign: "center", fontSize: 20, fontWeight: 700, color: C.textPrimary, marginRight: 34 }}>Productor</span>
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ background: C.primary, borderRadius: "0 0 20px 20px", padding: "24px 16px" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 700, color: C.primary, marginBottom: 12 }}>H</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>Huerta La Vega</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
              <MapPin size={14} color="rgba(255,255,255,0.8)" />
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Loja, Granada · Km 0</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 8, lineHeight: 1.55 }}>
              Agricultura ecológica certificada desde 2008. Cultivos de temporada en Sierra Sur de Granada.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, padding: "16px 16px 0" }}>
            {[{ label: "Km 0", value: "48 km" }, { label: "Desde", value: "2008" }, { label: "Productos", value: "6" }].map((stat) => (
              <div key={stat.label} style={{ flex: 1, background: C.bg, borderRadius: 8, padding: "10px 8px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <div style={{ fontSize: 12, color: C.textSecondary }}>{stat.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.primary, marginTop: 2 }}>{stat.value}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: "16px 16px 8px" }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: C.textPrimary }}>Productos disponibles este mercado</span>
          </div>
          {products.map((prod) => (
            <div key={prod.name} style={{ margin: "0 16px 10px", background: C.bg, borderRadius: 12, padding: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 10, background: C.heroEmoji, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{prod.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary }}>{prod.name}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: C.primary }}>{prod.price}</span>
                  <button onClick={() => navigate("/producto/tomates-rama")} style={{ background: C.primary, color: "#fff", border: "none", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Reservar</button>
                </div>
              </div>
            </div>
          ))}

          <div style={{ padding: "8px 16px 20px" }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.textPrimary, marginBottom: 8 }}>Sobre la finca</div>
            <p style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.65 }}>
              Trabajamos con métodos tradicionales adaptados a la agricultura ecológica certificada. Toda la recolección se hace manualmente el día anterior al mercado para garantizar máxima frescura.
            </p>
          </div>
        </div>

        <BottomNav active="productores" />
      </div>
    </MobileShell>
  );
}

// ─── PAGE: Showcase (all frames) ──────────────────────────────────────────────
function ShowcasePage() {
  const frames = [
    { label: "01 – Wireframe – Home", Component: () => null },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#ECEEF1", padding: "40px 24px 56px", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <div style={{ fontSize: 30, fontWeight: 700, color: C.primary }}>Ecomercado UGR</div>
        <div style={{ fontSize: 13, color: C.textSecondary, marginTop: 6 }}>Mobile PWA · 6 frames · 390 × 844 px · Campus Fuentenueva, Granada</div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 14, flexWrap: "wrap" }}>
          {[{ color: "#E0E0E0", border: "1px solid #BDBDBD", label: "Lo-fi wireframe" }, { color: C.primary, border: "none", label: "Hi-fi mockup" }].map((item) => (
            <span key={item.label} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: C.textSecondary }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, border: item.border, display: "inline-block" }} />
              {item.label}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Home", path: "#/" },
            { label: "Listado", path: "#/verduras" },
            { label: "Detalle", path: "#/producto/tomates-rama" },
            { label: "Confirmación", path: "#/confirmacion" },
            { label: "Productor", path: "#/productor/huerta-la-vega" },
            { label: "Wireframe", path: "#/wireframe" },
          ].map((link) => (
            <a key={link.label} href={link.path} style={{ background: C.primary, color: "#fff", textDecoration: "none", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
        {[
          { label: "01 – Wireframe", path: "#/wireframe" },
          { label: "02 – Home", path: "#/" },
          { label: "03 – Listado", path: "#/verduras" },
        ].map((frame) => (
          <div key={frame.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.textSecondary, textTransform: "uppercase", letterSpacing: "0.08em", background: C.surface, padding: "4px 10px", borderRadius: 4, border: `1px solid ${C.borderMid}` }}>
              {frame.label}
            </div>
            <a href={frame.path} style={{ width: 390, height: 200, background: C.surface, borderRadius: 16, border: `1px solid ${C.borderMid}`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: C.primary, fontSize: 14, fontWeight: 600 }}>
              Abrir pantalla →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verduras" element={<ListingPage />} />
        <Route path="/fruta" element={<ListingPage />} />
        <Route path="/lacteos" element={<ListingPage />} />
        <Route path="/conservas" element={<ListingPage />} />
        <Route path="/producto/tomates-rama" element={<DetailPage />} />
        <Route path="/confirmacion" element={<ConfirmationPage />} />
        <Route path="/productor/huerta-la-vega" element={<ProducerPage />} />
        <Route path="/wireframe" element={<WireframePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </HashRouter>
  );
}
