import { Link } from 'react-router-dom';

export default function FloatingButton() {
  return (
    <Link className="to-home" to="/">
      {'⬅️'}
    </Link>
  );
}
