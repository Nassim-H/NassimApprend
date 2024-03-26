

const Footer = () => {
    return (
        <footer className="bg-primary py-6 w-full">
        <div className="container mx-auto px-4 text-center ">
        <a href="https://cv-jade-iota.vercel.app" className="text-gray-800 hover:text-indigo-800 transition duration-300" target="_blank">Concevez votre site avec moi !</a>
          <p className="text-sm">&copy; {new Date().getFullYear()} Nassim Hassain. Tous droits réservés.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  