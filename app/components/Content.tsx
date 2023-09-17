import React from 'react'

function Content() {
    return (
      <div className="flex items-center h-full p-10 lg:ml-10">
        <div className="text-left">
          <h1 className="text-gradient text-5xl font-semibold md:text-6xl lg:text-7xl mb-10 mt-20">Meu aplicativo de delivery mobile!</h1>
          <p className="text-black text-xl md:text-2xl lg:text-2xl">
           Demonstração do aplicativo mobile feito utilizando React Native!</p>
           <p className="text-black text-xl md:text-2xl lg:text-2xl" >Projeto surgiu como um protótipo durante o curso de UX Design do Google.</p>
           <p className="text-blac text-xl md:text-2xl lg:text-2xl" >Dos primeiros Wireframes aos protótipos de baixa e alta fidelidade, compartilho os registros de cada etapa do processo até a aplicação final.</p>
           <p className="text-black text-xl md:text-2xl lg:text-2xl mt-5" >Veja em:</p>
           <div className="flex flex-col">
                <a href="https://github.com/diegodgava/aplicativo-delivery" 
                target="_blank" className="text-white text-center 
                h-10 w-72 rounded-md p-2 mt-5 bg-gradient-to-r from-[#f07d66] to-[#e7494c]">
                    Código da aplicação no GitHub
                </a>
                <a href="https://www.figma.com/proto/oQBywZktoIxfVfNjyG8Jsg/Delivery-App?type=design&node-id=1-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3" 
                target="_blank" className="text-white text-center 
                h-10 w-72 rounded-md p-2 mt-5 bg-gradient-to-r from-[#f07d66] to-[#e7494c]">
                    Protótipo da aplicação no Figma
                </a>
                <a href="https://drive.google.com/file/d/1kJDD_Ys2P-yqWqMtnt6291BvcN7bppA9/view?usp=share_link" target="_blank" className="text-white text-center h-10 w-72 rounded-md p-2 mt-5 bg-gradient-to-r from-[#f07d66] to-[#e7494c]">
                    Estudo de caso Google UX Design
                </a>

            </div>        
        </div>
      </div>
    );
  }
  
  export default Content;
