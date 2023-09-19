import { ChargeSection } from "../component/ChargeSection"
import { Header } from "../component/Header"

export const MainPage = () => {
  return (
    <>
      <Header/>
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-x-hidden overflow-auto scroll-smooth ">

        <div className="snap-center">
          <ChargeSection title="Disfrute de Tesla" subtitle="Programe una prueba de conduccion hoy mismo" color="white" img="public_video.webm">
            <footer className="flex flex-col flex-grow flex-nowrap justify-end pb-20">
                <div>
                    <a className="border-[3px] border-white text-sm rounded font-medium px-12 py-2 text-white inline-block
                        hover:bg-white hover:text-black transition-colors" href="#">
                        Prueba de conduccion
                    </a>
                </div>
            </footer>
          </ChargeSection>
        </div>

        <div className="snap-center">
          <ChargeSection title="Model S" subtitle="Concertar una prueba de conduccion" img="model-s.avif" color="black">
            <footer className="flex flex-col flex-grow  justify-end pb-20">
                <div className="gap-x-6 flex justify-center">
                    <a className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="#">
                        Explorar inventario
                    </a>
                    <a className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black" href="#">
                        Pedido personalizado
                    </a>
                </div>
            </footer>
          </ChargeSection>
        </div>

        <div className="snap-center">
          <ChargeSection title="Model 3" subtitle="Concertar una prueba de conduccion" img="model-3.avif" color="black">
            <footer className="flex flex-col flex-grow  justify-end pb-20">
                <div className="gap-x-6 flex justify-center">
                    <a className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="#">
                        Explorar inventario
                    </a>
                    <a className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black" href="#">
                        Pedido personalizado
                    </a>
                </div>
            </footer>
          </ChargeSection>
        </div>

        <div className="snap-center">
          <ChargeSection title="Model X" subtitle="Concertar una prueba de conduccion" img="model-x.avif" color="black">
            <footer className="flex flex-col flex-grow  justify-end pb-20">
                <div className="gap-x-6 flex justify-center">
                    <a className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="#">
                        Explorar inventario
                    </a>
                    <a className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black" href="#">
                        Pedido personalizado
                    </a>
                </div>
            </footer>
          </ChargeSection>
        </div>

        <div className="snap-center">
          <ChargeSection title="Model Y" subtitle="Concertar una prueba de conduccion" img="model-y.avif" color="black">
            <footer className="flex flex-col flex-grow  justify-end pb-20">
                <div className="gap-x-6 flex justify-center">
                    <a className="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="#">
                        Explorar inventario
                    </a>
                    <a className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black" href="#">
                        Pedido personalizado
                    </a>
                </div>
            </footer>
          </ChargeSection>
        </div>

        <div className="snap-center">
          <ChargeSection title="Energia Solar y Powerwall" subtitle="Energia para todos" img="powerwall.avif" color="black">
            <footer className="flex flex-col flex-grow justify-end pb-20">
                <div className="gap-x-6 flex justify-center">
                    <a className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black" href="#">
                        Saber mas
                    </a>
                </div>
            </footer>
          </ChargeSection>
        </div>

        <div className="snap-center">
          <ChargeSection title="Accesorios" img="accessories.avif" color="black">
            <footer className="flex flex-col flex-grow justify-end pb-20">
                <div className="gap-x-6 flex justify-center">
                  <a className="border-[3px] border-black bg-black text-sm rounded font-medium text-white px-12 py-2 inline-block transition-colors hover:border-gray-500 hover:bg-gray-500" href="#">
                        Comprar ahora
                  </a>
                </div>
            </footer>
          </ChargeSection>
        </div>
      </main>
    </>
  )
}
