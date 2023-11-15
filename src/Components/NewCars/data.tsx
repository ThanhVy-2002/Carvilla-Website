import ncm1 from '../../Assets/new-cars-model/ncm1.png'
import ncm2 from '../../Assets/new-cars-model/ncm2.png'
import ncm3 from '../../Assets/new-cars-model/ncm3.png'
import { ButtonProps } from '../Button/ButtonProps'

export const data = [{
    image: <img src={ncm1} width='800px' height='100px'/>,
    title: 'Chevrolet Camaro ZA100',
    content1: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content2: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    button: <ButtonProps label='View Details' className='rounded w-[200px] h-[50px] shrink-0 bg-[#4f46e5] hover:bg-[#0000ff] hover:text-white'/>
},{
    image: <img src={ncm2} width='800px' height='100px'/>,
    title: 'BMW Series-3 Wagon',
    content1: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content2: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    button: <ButtonProps label='View Details' className='rounded w-[200px] h-[50px] shrink-0 bg-[#4f46e5] hover:bg-[#0000ff] hover:text-white'/>
}, {
    image: <img src={ncm3} width='800px' height='100px'/>,
    title: 'Ferrari 388 Superfast',
    content1: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content2: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    button: <ButtonProps label='View Details' className='rounded w-[200px] h-[50px] shrink-0 bg-[#4f46e5] hover:bg-[#0000ff] hover:text-white'/>
}]