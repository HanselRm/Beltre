import ImageSlider from '../components/ImageSlider'
import ExcursionCard from '../components/ExcursionCard'
import Navbar from '../components/Navbar'

export default function Home() {
    const excursions = [
        { title: 'Aventura en Buggies', description: 'Explora los terrenos más emocionantes de la isla en nuestros buggies todoterreno.', image: 'https://images.musement.com/cover/0158/11/thumb_15710876_cover_header.jpg' },
        { title: 'Parque Dorado', description: 'Disfruta de la adrenalina y la diversión en nuestros parques temáticos de clase mundial.', image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/c5/34/bd.jpg' },
        { title: 'Isla Saona', description: 'Relájate en las playas de arena blanca y aguas cristalinas del Caribe.', image: 'https://th.bing.com/th/id/OIP.rR21WKSLTbM_YoPBsuru8QHaEK?rs=1&pid=ImgDetMain' },
        { title: 'Discoteca Coco Bongo', description: 'Disfruta del espectáculo de una de las discotecas más famosas de Latinoamérica. Las noches en Coco Bongo son mágicas, con un espectáculo diverso y una gran variedad de escenarios cambiantes.', image: 'https://cdn.getyourguide.com/img/tour/5d0baf2f36e1a.jpeg/145.jpg' },
        { title: 'Isla Catalina Snorkel', description: 'En la Isla Catalina, con sus aguas de color turquesa, experimentarás un día inolvidable en el paraíso, disfrutando de sus playas, la brisa fresca, vistas alucinantes y una selección de comidas y bebidas incluidas en la excursión, siempre con el inmenso mar caribeño como telón de fondo.', image: 'https://www.excursionespuntacana.com/wp-content/uploads/2016/11/catalina-snorkel-820x410.jpg' },
        { title: 'Dolphin Intermedio', description: 'La experiencia Explorer de interactuar con delfines es una de las más exclusivas y, seguramente, una de las más inolvidables de tu vida. Estos mamíferos marinos son extremadamente inteligentes y juguetones y con esta excursión ahora puedes nadar junto a uno de ellos en las cristalinas aguas de Punta Cana', image: 'https://www.excursionespuntacana.com/wp-content/uploads/2016/11/dolphin_explorer_10-820x410.jpg' },
        { title: 'Ocean Spa Dr Fish Punta Cana', description: 'El Doctor Fish Ocean Spa es una embarcación de dos pisos, diseñada para ser un spa flotante y tiene una capacidad limitada que permite brindar una atención personalizada a sus visitantes. Relájate con ejercicios de bio-pilates mientras surcas las tranquilas y cristalinas aguas de Punta Cana.', image: 'https://www.excursionespuntacana.com/wp-content/uploads/2019/07/Dr-Fish-Ocean-Spa_002-1-820x410.jpg' },

    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
                <ImageSlider />

                <section className="container mx-auto px-4 py-16 md:py-24">
                    <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-8">Descubre Nuestras Experiencias</h2>
                    <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        Embárcate en una aventura inolvidable por la República Dominicana. Desde emocionantes recorridos en buggies hasta relajantes días en playas paradisíacas, tenemos la excursión perfecta para ti.
                    </p>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {excursions.map((excursion, index) => (
                            <ExcursionCard key={index} {...excursion} />
                        ))}
                    </div>
                </section>

                <section className="bg-primary-600 text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-light mb-6">¿Listo para tu próxima aventura?</h2>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Reserva ahora y prepárate para vivir experiencias únicas en el corazón del Caribe.</p>
                        <button className="bg-white text-primary-600 text-lg px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                                onClick={() => window.open('https://wa.me/18293205694', '_blank')}>
                            Reservar Ahora
                        </button>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 RD Tours. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )
}

