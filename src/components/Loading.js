import { MutatingDots } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="loading">
      <MutatingDots color="#222" width={80} height={80} />
    </div>
  );
}
