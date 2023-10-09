import Link from "next/link";
import style from './style.module.css'


export default function AppBar () {
    return<>
       <div className={style.container}>
        <ul className={style.lista}>
            <li className={style.item}><Link href={'/'}>Home</Link></li>
            <li className={style.item}><Link href={'/eventos'}>Eventos</Link></li>
            <li className={style.item}><Link href={'/cadastrar'}>Cadastrar</Link></li>
        </ul>
       </div>
    </>
}