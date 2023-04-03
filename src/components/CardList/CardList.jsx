import datas from '../../data/datas'
import Card from '../Card/Card'
import { Link } from "react-router-dom";

export default function CardList() {

    return (
        <main className='home_CardList'>
                    { datas && datas.length > 0 && datas.map((lodging) =>
                        <Link key={`${lodging.id}`} to={`/lodging/${lodging.id}`}>
                            <Card   
                                key={lodging.id}
                                id={lodging.id}
                                title={lodging.title}
                                cover={lodging.cover}
                                />  
                        </Link>       
                    )}
        </main>
    )
}
