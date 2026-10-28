import { Poppins } from "next/font/google";

const poppins = Poppins({
  preload: true,
  display: "swap",
  subsets: [
    "latin"
  ],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  fallback: [
    "Roboto",
    "Oxygen",
    "Ubuntu"
  ]
});

export {
  poppins as default,
  poppins
};