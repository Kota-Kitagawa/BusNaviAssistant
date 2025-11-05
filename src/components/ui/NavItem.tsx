import clsx from 'clsx';

interface NavItemProps {
    label: string;    
}

export default function NavItem({ label }: NavItemProps){
    const buttonClass = clsx(
        'px-4 py-3 cursor-pointer text-center transition duration-100',
    )
    return(
        <div className={buttonClass}>
            {label}
        </div>
    )
}