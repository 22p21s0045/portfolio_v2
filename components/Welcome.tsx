import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function App() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/YdNXPKPis5ZEIXqR/scene.splinecode" />
    </div>
  );
}