const InteractiveSection = () => {
    return (
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Découvrez notre méthode d'apprentissage interactive</h2>
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Vidéo interactive"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default InteractiveSection;
  