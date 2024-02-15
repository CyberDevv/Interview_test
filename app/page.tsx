import AsideIntro from "@/components/AsideIntro";
import PersonalForm from "@/components/PersonalForm";

export default function Home() {
  return (
    <main className="md:start container_fluid  md:h-[calc(100vh-90px)]">
      <AsideIntro />
      <PersonalForm />
    </main>
  );
}
