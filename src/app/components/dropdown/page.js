import { useEffect, useRef, useState } from "react";

export default function DropdownList({
  id,
  value,
  onChange,
  placeholder,
  options,
  className,
  buttonClassName,
  listClassName,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value ?? "");
  const [highlight, setHighlight] = useState(-1);
  const rootRef = useRef(null);

//   useEffect(() => setSelected(value ?? ""), [value]);

  useEffect(() => {
    function onDoc(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const toggle = () => setOpen((v) => !v);

  const selectOption = (opt) => {
    setSelected(opt.value);
    setOpen(false);
    onChange?.(opt.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => (h < options.length - 1 ? h + 1 : options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => (h > 0 ? h - 1 : 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (open && highlight >= 0) selectOption(options[highlight]);
      else setOpen(true);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const selectedLabel = options.find((o) => o.value === selected)?.label;

  if (!id)
    return (
      <p style={{ color: "red" }}>
        Error: <strong>id</strong> prop is required
      </p>
    );
  if (!options || options.length === 0)
    return (
      <p style={{ color: "red" }}>
        Error: <strong>options</strong> prop is required
      </p>
    );

  const rootClasses = ["relative inline-block", className].filter(Boolean).join(" ");
  const btnBase = "flex items-center justify-between min-w-[160px] px-3 py-2 bg-white border border-gray-300 rounded text-left";
  const btnClasses = [btnBase, buttonClassName].filter(Boolean).join(" ");
  const listBase = "absolute mt-1 left-0 bg-white border border-gray-200 shadow z-50 list-none p-0 max-h-60 overflow-auto w-full rounded";
  const listClasses = [listBase, listClassName].filter(Boolean).join(" ");

  return (
    <div ref={rootRef} className={rootClasses}>
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={id}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={btnClasses}
      >
        <span className="mr-2 truncate">{selectedLabel || placeholder || "Select an option"}</span>
        <span aria-hidden className="ml-2">▾</span>
      </button>

      {open && (
        <ul role="listbox" aria-labelledby={id} tabIndex={-1} className={listClasses}>
          {options.map((opt, idx) => {
            const isSelected = selected === opt.value;
            const isHighlighted = highlight === idx;
            const liClasses = [
              "px-3 py-2 cursor-pointer",
              isHighlighted ? "bg-gray-100" : "",
              isSelected ? "font-medium" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => selectOption(opt)}
                onMouseEnter={() => setHighlight(idx)}
                className={liClasses}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}