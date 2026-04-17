import { TeamCard } from './components/Teamcard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8 flex gap-4 justify-center items-start">
      
      <TeamCard name="Matti meikäläinen" role="Elämästä naatiskelia" />
      <TeamCard name="Sokka kissa" role="Maukuu paljon" />
      <TeamCard name="Emäntä" role="Valittaaa (vitsi)" />

    </div>
  );
}