

interface AnecdoteProps {
    children: React.ReactNode;
    align?: 'left' | 'right' | 'center' ; // Alignement à gauche ou à droite ou au centre
    color?: string; // Couleur de fond de l'anecdote
    icon?: React.ReactNode; // L'icône est optionnelle
  }

const Anecdote: React.FC<AnecdoteProps> = ({ children,  align = 'left', color = 'bg-white', icon }) => {
    const containerClasses = align === 'right'
    ? `max-w-md mx-auto ${color} rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8 md:ml-auto md:mr-0 hover:shadow-xl` // Alignement à droite
    : align === 'center'
        ? `max-w-md mx-auto ${color} rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8 hover:shadow-xl` // Centrage
        : `max-w-md mx-auto ${color} rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8 md:mr-auto md:ml-0 hover:shadow-xl`; // Alignement à gauche par défaut


    return (
        <div className={containerClasses}>
        <div className="p-8 flex justify-between items-center">
            <div className="">
                <div className="uppercase tracking-wide text-sm text-rose-400 font-semibold">Anecdote</div>
                <p className="mt-2 text-gray-500 text-justify">{children}</p>
            </div>
            {icon && <div className="flex-shrink-0 ml-6">
                {icon}
            </div>}
            </div>
        </div>
    );
}

export default Anecdote;
  