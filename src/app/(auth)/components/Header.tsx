import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
function Header() {
    return (
        <div className='bg-brand'>
            <div className='container mx-auto p-4'>
                <Image src={Logo} alt='Joyful' height={110} className='mx-auto' priority={false} />
            </div>
        </div>
    )
}

export default Header