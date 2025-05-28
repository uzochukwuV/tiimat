import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

import { getFaculties } from '@/services/read'

interface Faculty {
    id: string
    name: string
    description: string
    image: string
}

function FacultyCard() {
        const [faculties, setFaculties] = useState<Faculty[]>([])

        useEffect(() => {
                document.body.scrollIntoView()
                getFaculties().then((data) => {
                        setFaculties(data as any[])
                })
        }, [])

        return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                        {faculties.map((faculty) => (
                                <div key={faculty.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                                        <div className="relative h-56">
                                                <img 
                                                        src={faculty.image} 
                                                        alt={faculty.name}
                                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                        </div>
                                        <div className="p-8 space-y-4">
                                                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                                                        {faculty.name}
                                                </h3>
                                                <p className="text-gray-600 line-clamp-3 text-sm">
                                                        {faculty.description}
                                                </p>
                                                <Button
                                                        variant="outline"
                                                        className="w-full cursor-pointer rounded-xl hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 transition-all duration-300"
                                                        asChild
                                                >
                                                        <Link to={`/faculty/${faculty.id}`}>
                                                                Explore →
                                                        </Link>
                                                </Button>
                                        </div>
                                </div>
                        ))}
                </div>
        )
}

export default FacultyCard