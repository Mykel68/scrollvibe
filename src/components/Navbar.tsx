import React from 'react'

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Awards', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Contact', href: '#' },
]

export default function Navbar() {
    return (
        <div className='flex py-6 gap-6 flex-col items-center justify-center w-full bg-white'>
            <div className="flex gap-8 items-center justify-center">
                {navLinks.map((link) => (
                    <p key={link.name} className='text-lg text-muted-foreground underline-offset-4 underline hover:text-black uppercase cursor-pointer' >{link.name}</p>
                ))}
            </div>
            <h1 className='text-9xl uppercase font-bold text-center'>Scrollvibe</h1>
        </div>
    )
}
