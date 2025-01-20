import Navbar from '../components/Navbar'

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-16 md:py-24">
                <h1 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-12">Contáctanos</h1>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white rounded-lg p-8 shadow-md">
                        <h2 className="text-2xl font-light mb-6 text-primary-600">Información de Contacto</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-secondary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gray-600">C. Marcio Maggiolo 9, Punta Cana, República Dominicana</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-secondary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="text-gray-600">+1 (829) 320-5694</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-secondary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p className="text-gray-600">excursionesbeltre@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-6 w-6 text-secondary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-600">Lunes a Domingo, 8:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-8 shadow-md">
                        <h2 className="text-2xl font-light mb-6 text-primary-600">Contáctanos por Correo</h2>
                        <p className="text-gray-600 mb-6">Estamos disponibles para atenderte por Correo. Haz clic en el botón para enviar un email a nosotros.</p>
                        <button
                            className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center transition duration-300"
                            onClick={() => window.location.href = 'mailto:ejxcursionesbeltre@gmail.com'}
                        >
                            <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            Contactar por correo
                        </button>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8 mt-14">
                <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 Beltre. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )
}

