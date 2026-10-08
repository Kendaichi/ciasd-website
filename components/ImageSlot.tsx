import type { CSSProperties } from "react";

type Shape = "rect" | "rounded" | "circle" | "pill";

interface ImageSlotProps {
  shape?: Shape;
  radius?: number;
  placeholder?: string;
  /** When a real image is supplied the slot renders it (cover). */
  src?: string;
  alt?: string;
  style?: CSSProperties;
}

/**
 * A faithful, presentational stand-in for the original <image-slot> custom
 * element. The source component let users drop a photo into a persisted slot;
 * here we render the same styled, sized placeholder (or a real image when a
 * `src` is provided), so the layout and intent are preserved.
 */
export default function ImageSlot({
  shape = "rounded",
  radius = 12,
  placeholder,
  src,
  alt = "",
  style,
}: ImageSlotProps) {
  const borderRadius =
    shape === "circle"
      ? "50%"
      : shape === "pill"
        ? "999px"
        : shape === "rect"
          ? "0"
          : `${radius}px`;

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          objectFit: "cover",
          borderRadius,
          display: "block",
          width: "100%",
          height: "100%",
          ...style,
        }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={placeholder || "Image placeholder"}
      style={{
        background: "#E6EFF8",
        border: "1px dashed #9DB8D2",
        borderRadius,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        ...style,
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          padding: "18px",
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7FA3C6"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.6" />
          <path d="M21 16l-5-5L5 20" />
        </svg>
        {placeholder ? (
          <span
            style={{
              fontSize: "13px",
              lineHeight: 1.45,
              color: "#4A5D70",
              maxWidth: "240px",
            }}
          >
            {placeholder}
          </span>
        ) : null}
      </span>
    </div>
  );
}
