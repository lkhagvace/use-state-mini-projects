import { Counter } from "@/app/components/Counter";
import { LightSwitch } from "@/app/components/LightSwitch";
import { SecretMessage } from "@/app/components/SecretMessage";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <h1 className="text-center text-3xl font-bold">useState</h1>
      <div className="mx-auto mt-10 grid max-w-4xl items-start gap-6 md:grid-cols-3">
        <Counter />
        <LightSwitch />
        <SecretMessage />
      </div>
    </main>
  );
}
