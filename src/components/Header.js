import { Link } from 'react-router-dom';

export default function header() {
    return (
        <div className="header">
            <Link to={'/'}>
                <h1>💖 My Note</h1>
            </Link>
            <Link to={'/write'}>
                <button>글쓰기</button>
            </Link>
        </div>
    );
}
