import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image src="/images/pokeball.png" alt="Poke Agenda Logo" width={30} height={30} />
                <h1>Poke Agenda</h1>
            </div>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}