export default function Contact() {
    return (
      <>
        <section className="mb-32 w-full mt-8">
          <div className="w-full max-w-7xl mx-auto px-5">
            <div className="w-full bg-[#26272d] rounded pb-5 flex flex-wrap pt-4 px-2">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-7/12 md:px-3 lg:px-6">
                <h2 className="mb-8 text-3xl font-bold text-white font-roboto">Întrebări frecvente</h2>
                <p className="mb-2 font-bold text-white font-roboto">Cum pot să contactez echipa RoDia pentru întrebări sau feedback?</p>
                <p className="mb-8 text-neutral-300 font-roboto">
                Pentru orice întrebări sau feedback, ne poți contacta prin completarea formularului de contact de pe pagina noastră web sau prin trimiterea unui email la adresa noastră de contact: ion.ladaniuc@iis.utm.md
                </p>
                <p className="mb-2 font-bold text-white font-roboto">Care sunt orele de lucru ale echipei RoDia și cât de repede pot aștepta un răspuns?</p>
                <p className="mb-8 text-neutral-300 font-roboto">
                Echipa RoDia lucrează de luni până vineri, între orele [10:00] și [18:00]. Încercăm să răspundem la întrebările și feedback-ul primit în cel mai scurt timp posibil, de obicei în decurs de 24-48 de ore lucrătoare.
                </p>
                <p className="mb-2 font-bold text-white font-roboto">
                Pot solicita acces la anumite date sau informații specifice din corpusul RoDia?
                </p>
                <p className="mb-8 text-neutral-300 font-roboto">
                Da, suntem deschiși să oferim acces la date sau informații specifice din corpusul RoDia, în funcție de necesitățile și scopurile dvs. de cercetare. Vă rugăm să ne contactați și să ne furnizați detalii cu privire la cererea dvs., iar noi vom încerca să vă ajutăm în cel mai bun mod posibil.
                </p>
                <p className="mb-2 font-bold text-white font-roboto">
                Cum pot contribui la dezvoltarea sau îmbunătățirea corpusului RoDia?
                </p>
                <p className="text-neutral-300 font-roboto">
                Suntem recunoscători pentru orice contribuție la îmbunătățirea corpusului RoDia. Dacă aveți sugestii, comentarii sau texte vechi pe care doriți să le adăugați la corpus, vă rugăm să ne contactați. Vom analiza cu atenție propunerile dvs. și vom lua în considerare implementarea lor în viitoarele actualizări ale corpusului.
                </p>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto md:w-5/12 md:px-3 lg:px-6">
                <p className="mb-8 font-bold font-roboto text-white">
                Nu ați găsit răspunsul dvs. în Întrebări frecvente? Contactați administrația noastră
                </p>
                <form>
                  <div className="relative mb-6">
                    <input type="text"
                      className="border sm:text-sm rounded-sm focus:outline-none  block w-full p-2 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                      id="Name" placeholder="Nume" />
                  </div>
                  <div className="relative mb-6">
                    <input type="email"
                      id="email" 
                      className="border sm:text-sm rounded-sm focus:outline-none  block w-full p-2 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                      placeholder="Email" />
                   
                  </div>
                  <div className="relative mb-6"t>
                    <textarea
                        className="border sm:text-sm rounded-sm focus:outline-none  block w-full p-2 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                      id="message" rows="3" placeholder="Mesaj"></textarea>
                  </div>

                
                  <button 
                    type="button"
                    className="w-full text-white hover:bg-white hover:text-black hover:transition font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#7D33FF]"
                  >
                    Trimite
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  