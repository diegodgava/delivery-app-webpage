import Content from "./components/Content";
import Phone from "./components/Phone";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row md:flex-row">
      <div className="lg:w-1/2 md:w-1/2 w-2/2">
        <Content />
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-2/2 mb-4">
        <Phone />
      </div>
    </main>
  );
}


