import { FC } from 'react';


export const App: FC = () => {
  const str = 'César';

  return (
    <div className="font-sans h-screen bg-slate-900 text-slate-400 p-4">
      <h1 className="text-3xl text-center font-bold">Hello World {str}</h1>
    </div>
  );
};
