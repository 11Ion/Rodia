
import image from "../../img/about.svg"
export default function About(){
    return(
    <>
               <section className="mb-32 w-full mt-8">
          <div className="w-full max-w-7xl mx-auto px-5">
            <div className="w-full bg-[#26272d] rounded pb-5 flex flex-wrap pt-4 px-2 items-center">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-7/12 md:px-3 lg:px-6">
                <h2 className="mb-8 text-3xl font-bold text-white font-roboto">Despre corpus</h2>
                <p className="mb-2 font-bold text-white font-roboto">Ce este RoDia și care este scopul său?</p>
                <p className="mb-8 text-neutral-300 font-roboto">
                RoDia este un corpus diacronic al limbii române, care cuprinde texte din diferite perioade istorice. Scopul său este să ofere cercetătorilor și lingviștilor un instrument util pentru studiul evoluției limbii române de-a lungul timpului.
                </p>
                <p className="mb-2 font-bold text-white font-roboto">Ce tipuri de texte sunt incluse în corpusul RoDia?</p>
                <p className="mb-8 text-neutral-300 font-roboto">
                RoDia conține o varietate de texte, precum documente istorice, literatură clasică, publicații periodice, texte științifice și multe altele. Această diversitate reflectă schimbările lingvistice și culturale de-a lungul secolelor.
                </p>
                <p className="mb-2 font-bold text-white font-roboto">
                Care este importanța utilizării corpusului RoDia în studiul limbii române?
                </p>
                <p className="mb-8 text-neutral-300 font-roboto">
                Utilizarea corpusului RoDia oferă cercetătorilor și lingviștilor o perspectivă amplă asupra schimbărilor în limba română de-a lungul timpului. Acesta permite analiza evoluției vocabularului, gramaticii, stilului și a altor aspecte lingvistice în contextul istoric adecvat.

                </p>
                <p className="mb-2 font-bold text-white font-roboto">
                Cum poate fi accesat și utilizat corpusul RoDia?
                </p>
                <p className="text-neutral-300 font-roboto">
                Corpusul RoDia este disponibil online și poate fi accesat gratuit de către cercetători și lingviști. Utilizatorii pot căuta și filtra texte în funcție de diferite criteri. 
                </p>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto md:w-5/12 md:px-3 lg:px-6 flex justify-center">
               
                    <img 
                    className="w-full max-w-80 rounded-md" src={image} alt="img" />


                <div >
                </div>
                 
              </div>
            </div>
          </div>
        </section>
    </>
)}
