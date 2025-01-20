import { useState, useEffect } from 'react'

const images = [
    'https://plus.unsplash.com/premium_photo-1681223447383-402912b83029?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1677639176433-503148857a0b?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1589271589010-132f9d82f976?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

export default function ImageSlider() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg">
            {images.map((src, index) => (
                <img
                    key={src}
                    src={src || "/placeholder.svg"}
                    alt={`Imagen de República Dominicana ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{
                        opacity: index === currentImage ? 1 : 0,
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white text-2xl md:text-3xl lg:text-4xl font-light">
                <h2 className="mb-2">Descubre la magia de</h2>
                <h1 className="font-bold">República Dominicana</h1>
            </div>
        </div>
    )
}

