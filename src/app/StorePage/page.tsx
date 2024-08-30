import { Metadata } from "next";
import Header from "@/templates/Header";
import Store from "./components/StoreZone";
import Footer from "@/templates/Footer";

export const metadata: Metadata = {
  title: "Store Zone | e-commerce ",
  description: "store zone page",
};

export default function StoreZone() {
  return (
    <>
      <Header />
      <Store />;
      <Footer />
    </>
  );
}
