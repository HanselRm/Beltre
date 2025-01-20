import { Link } from 'react-router-dom'

interface ExcursionCardProps {
    title: string
    description: string
    image: string
}

export default function ExcursionCard({ title, description, image }: ExcursionCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="relative w-full h-48 md:h-56 lg:h-64">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                    <Link to="/contact" className="px-6 py-2 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300">
                        Contactanos
                    </Link>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

