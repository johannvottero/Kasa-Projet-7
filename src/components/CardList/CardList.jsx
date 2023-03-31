import datas from '../../data/data'
import Card from '../Card/Card'

export default function Gallery() {

    return (
        <main className='home_CardList'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

/* <div className="Card__container">
    {data && data.length > 0 && data.map((lodging) =>
        <Link key{`${lodging.id`} to={`/lodging/${lodging.id}`>
            <Card   
                key={`lodging.id`}
        </Link>
        )}
</div>
 */