import Navbar from '../components/Navbar'

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-16 md:py-24">
                <h1 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-12">Nuestra Historia</h1>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="https://i.imgur.com/SuzaoMn.png"
                            alt="Playa en República Dominicana"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-light mb-4 text-primary-600">Descubriendo el Paraíso</h2>
                        <p className="text-gray-600 mb-4">
                            Beltre Excursiones nació de la pasión por compartir la belleza incomparable de la República Dominicana. Nuestro viaje comenzó con un sueño: mostrar al mundo los tesoros ocultos de nuestra isla.
                        </p>
                        <p className="text-gray-600">
                            Desde entonces, hemos guiado a miles de viajeros a través de playas de ensueño, montañas majestuosas y ciudades llenas de historia, creando recuerdos que duran toda la vida.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-primary-600">Nuestra Misión</h3>
                        <p className="text-gray-600">Proporcionar experiencias auténticas y memorables que conecten a los viajeros con la verdadera esencia de la República Dominicana.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-primary-600">Nuestros Valores</h3>
                        <p className="text-gray-600">Autenticidad, sostenibilidad y excelencia en el servicio son los pilares que guían cada una de nuestras excursiones.</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-primary-600">Nuestro Compromiso</h3>
                        <p className="text-gray-600">Nos comprometemos a preservar y respetar la naturaleza y las comunidades locales en cada aventura que ofrecemos.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl font-light mb-6 text-center text-primary-600">¿Por qué elegirnos?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'Experiencia Local', desc: 'Nuestros guías son expertos locales apasionados por compartir la cultura y belleza de la isla.' },
                            { title: 'Aventuras Personalizadas', desc: 'Ofrecemos excursiones adaptadas a tus intereses y nivel de aventura.' },
                            { title: 'Seguridad Garantizada', desc: 'Tu seguridad es nuestra prioridad. Seguimos estrictos protocolos en todas nuestras actividades.' },
                            { title: 'Compromiso Ecológico', desc: 'Promovemos el turismo sostenible para preservar la belleza natural de la República Dominicana.' }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                    <svg className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 RD Tours. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )
}

