"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@/components/icons/Icon";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { NAV_LINKS } from "@/lib/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const EASE_ELEGANT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Namjerno NIJE generic slide-in drawer sa strane. Cijeli ekran postaje
 * jedna smirena, prostrana "soba" — veliki razmaci, velika tipografija,
 * fade+blagi scale umjesto klizanja sa strane. Zatvaranje je jednako
 * elegantno kao otvaranje (ista krivulja, obrnuti smjer).
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_ELEGANT }}
          role="dialog"
          aria-modal="true"
          aria-label="Glavni izbornik"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg tracking-wide text-ink">
              Apartman Oliva
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Zatvori izbornik"
              className="text-ink transition-colors duration-300 hover:text-accent"
            >
              <CloseIcon size={26} />
            </button>
          </div>

          <motion.nav
            className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
            }}
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={onClose}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: EASE_ELEGANT },
                  },
                }}
                className="font-display text-3xl text-ink transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          <div className="flex justify-center pb-10">
            <LanguageSwitcher tone="light" variant="expanded" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
