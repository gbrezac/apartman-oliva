import { OliveBranchIcon } from "@/components/icons/Icon";

interface DividerProps {
  withIcon?: boolean;
  className?: string;
  /** Boja pozadine na kojoj divider sjedi — potrebna da "izreže" prostor oko ikone. */
  surfaceClassName?: string;
}

/**
 * Vrlo suptilna linija za odvajanje sadržaja unutar sekcije (ne između sekcija —
 * za to služi Section-ov vlastiti padding). withIcon dodaje sitnu maslinovu
 * grančicu na sredini, arhitektura pripremljena, koristi se selektivno.
 */
export function Divider({
  withIcon = false,
  className = "",
  surfaceClassName = "bg-background",
}: DividerProps) {
  if (!withIcon) {
    return <hr className={`border-t border-ink/10 ${className}`} />;
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <hr className="w-full border-t border-ink/10" />
      <span className={`absolute px-4 text-accent-secondary ${surfaceClassName}`}>
        <OliveBranchIcon size={18} />
      </span>
    </div>
  );
}
