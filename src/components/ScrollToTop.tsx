import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 lg:hidden w-12 h-12 rounded-full bg-[#004380] text-white shadow-lg flex items-center justify-center hover:bg-[#003060] transition-colors"
      aria-label="Retour en haut"
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default ScrollToTop;
