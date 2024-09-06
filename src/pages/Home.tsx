import Navbar from "../components/NavBar";
import Counter from "../features/counter";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <Counter />
    </div>
  );
}
