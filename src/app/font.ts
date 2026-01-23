import localFont from "next/font/local"
export const sohne = localFont({
    src: [
        {
            path: "../../public/fonts/Testfont/Sohne-Buch.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Testfont/Sohne-Halbfett.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Testfont/Sohne-Fett.woff",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-sohne",
  })