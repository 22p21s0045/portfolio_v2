import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
  });
export default function Welcome() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/7tU2e6C1lxINwmuv/scene.splinecode" />
    </div>
  );
}
