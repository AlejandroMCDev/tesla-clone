
interface Props {
    title: string,
    subtitle?: string,
    img: string,
    children?: JSX.Element,
    color: string
}

export const ChargeSection = ({title,subtitle,img,children,color}:Props) => {
    return (
      <section id={title.toLocaleLowerCase().replace(/\s/g, '')} className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden"
        data-header-color={`${color}`}>
          <div className="z-30 relative h-full flex flex-col">
              <header>
                  <h2 className={`text-${color} pt-40 text-[40px] font-medium`}>
                      {title}
                  </h2>
                  <p className={`text-${color} text-sm ${title === 'Disfrute de Tesla' || 'underline' }`}>
                      {subtitle}
                  </p>
              </header>
  
              {children}
          </div>
  
        {   title !== 'Disfrute de Tesla'
            ? ( <div className="absolute top-0 bottom-0 h-full w-full z-10">
                    <img src={`/${img}`}
                    alt="Model Y"
                    className="h-full w-full object-cover object-center" />
                </div>
            ) : (
                <div className="absolute top-0 bottom-0 h-full w-full z-10">
                    <video src={`/${img}`} className="object-center object-cover h-full w-full" autoPlay muted loop ></video>
                </div>
            )
        }
      </section>
    ) 
  }
  