import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  name: string;
  path: string;
}

interface NavigationDropdownProps {
  label: string;
  items: DropdownItem[];
  isMobile?: boolean;
  isOverDark?: boolean;
}

export const NavigationDropdown = ({ label, items, isMobile = false, isOverDark = false }: NavigationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 flex items-center justify-between text-base font-normal text-foreground hover:text-foreground/60 transition-all duration-300"
        >
          {label}
          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <div className="pl-6 mt-2 space-y-1">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-6 py-3 text-sm text-foreground/60 hover:text-foreground transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div 
      ref={dropdownRef} 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-6 py-2 flex items-center gap-1.5 text-sm font-normal transition-all duration-200 group ${
          isOverDark 
            ? 'text-background/70 hover:text-background' 
            : 'text-foreground/60 hover:text-foreground'
        }`}
      >
        {label}
        <ChevronDown 
          className={`h-3.5 w-3.5 opacity-40 group-hover:opacity-70 transition-all duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>
      
      {isOpen && (
        <div
          className="absolute top-full left-0 pt-3 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          style={{
            animation: 'fadeSlideIn 120ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className={`backdrop-blur-xl rounded-xl py-2 overflow-hidden ${
            isOverDark
              ? 'bg-foreground/95 border border-background/20 shadow-[0_8px_30px_rgb(0,0,0,0.3)]'
              : 'bg-background/98 border border-border/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)]'
          }`}>
            {items.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-2.5 text-sm transition-all duration-150 ${
                  isOverDark
                    ? 'text-background/70 hover:text-background hover:bg-background/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-accent/30'
                }`}
                style={{
                  animation: `fadeSlideIn 120ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 20}ms both`
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};