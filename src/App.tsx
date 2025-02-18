import React from 'react';
import { Book, Dog, Cookie, Heart, ChefHat, Star, Coffee, Popcorn as Poop } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const photos = [
  '/photo1.jpg',
  '/photo2.jpg',
  '/photo3.jpg',
  '/photo4.jpg',
  '/photo5.jpg',
  '/photo6.jpg'
];

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-purple-400 to-pink-400">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Oi! Eu sou a Maria Clara! 👋</h1>
            <p className="text-xl opacity-90">Uma garota de 11 anos que acha que <span className="font-bold text-2xl bg-pink-500 px-2 rounded">TUDO É UMA BOSTA!</span> 😅</p>
            <div className="mt-4 flex items-center space-x-2">
              <Poop className="w-6 h-6" />
              <span className="text-lg">Minha frase favorita do momento!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Carousel */}
      <div className="py-12 bg-gradient-to-b from-pink-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Minha Vida em Fotos 📸</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="rounded-xl shadow-lg"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={photo} 
                  alt={`Maria Clara - Foto ${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Personality Traits */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
            <Book className="w-12 h-12 text-purple-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Amo Ler!</h2>
            <p className="text-gray-600">Estudante do SESI Taguatinga e sempre com um livro por perto!</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
            <Dog className="w-12 h-12 text-purple-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Louca por Cachorros</h2>
            <p className="text-gray-600">Meus amigos de quatro patas são tudo pra mim! 🐕</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
            <Heart className="w-12 h-12 text-purple-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Super Carente</h2>
            <p className="text-gray-600">Sempre precisando de atenção e carinho (muito carinho)!</p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Minhas Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Coffee className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Zero Organização</h3>
                <p className="text-gray-600">Meu quarto? Uma bosta! Mas eu sei onde tudo está... mais ou menos.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <ChefHat className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Aventuras na Cozinha</h3>
                <p className="text-gray-600">Às vezes dá certo, às vezes... que bosta! 👩‍🍳</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Cookie className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Doces = ❤️</h3>
                <p className="text-gray-600">Não consigo resistir a doces... tudo é uma bosta sem doces!</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Star className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Metas 2025</h3>
                <p className="text-gray-600">Tentando ser uma pessoa melhor... mas ainda tem muita bosta pra limpar!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-purple-100 rounded-xl p-8 text-center transform hover:scale-105 transition-transform">
          <blockquote className="text-2xl font-bold text-purple-800 mb-4">
            "Tudo é uma bosta... mas tá tudo bem!"
          </blockquote>
          <p className="text-purple-600">- Eu, literalmente todos os dias 💁‍♀️</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 - Uma garota tentando ser menos rabugenta (mas tá uma bosta) 😊</p>
        </div>
      </footer>
    </div>
  );
}

export default App;