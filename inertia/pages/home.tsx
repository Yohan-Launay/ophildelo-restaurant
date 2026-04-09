import { Icon } from "@iconify/react";
import Layout from "~/layouts/default";
import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(0);

  const menuItems = [
    {
      id: 1,
      title: "Assiette Créole",
      price: "12€",
      description: "Trio de samoussas, bonbons piments et bouchons, servis avec une sauce aigre-douce.",
      category: "Entrée",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Rougail Saucisse",
      price: "19€",
      description: "L'incontournable. Saucisses fumées mijotées avec tomates, oignons, épices, servi avec riz, grains et rougail mangue.",
      category: "Plat",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Cari Poulet Vanille",
      price: "21€",
      description: "Poulet fermier cuit lentement avec de la vanille Bourbon de la Réunion et lait de coco.",
      category: "Plat",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
    },
    {
      id: 4,
      title: "Bonbons Piments",
      price: "8€",
      description: "Petits beignets épicés à base de thon et piments, typiques de la Réunion.",
      category: "Entrée",
      image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Gratin de Chouchou",
      price: "15€",
      description: "Gratin de chayotte, un légume tropical, avec une touche de fromage et d'épices.",
      category: "Plat",
      image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Flan Coco",
      price: "7€",
      description: "Dessert crémeux à la noix de coco, léger et rafraîchissant.",
      category: "Douceurs",
      image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const filteredItems = activeFilter === "Tous" ? menuItems : menuItems.filter(item => item.category === activeFilter);

  // Pagination logic
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <Layout>

      <div className="bg-stone-50 text-stone-600 antialiased selection:bg-orange-200 selection:text-orange-900">
        {/* Hero Section */}
        < header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" >
          {/* Background with Overlay */}
          < div className="absolute inset-0 z-0" >
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Tropical Reunion Island Vibe" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-stone-900/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
          </div >

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">

              <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] text-shadow-sm">
                Le soleil de la <span className="text-yellow italic font-serif">Réunion</span> dans votre assiette.
              </h1>

              <p className="text-lg text-stone-100 max-w-lg leading-relaxed font-light">
                Voyagez à 10 000 km sans quitter le sud de la France. Une cuisine artisanale, épicée et généreuse, préparée avec amour et tradition.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#menu" className="group flex items-center justify-center gap-2 bg-blue hover:bg-orange text-yellow px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-xl shadow-blue-500/20">
                  <Icon icon="solar:chef-hat-linear" width="20" stroke-width="1.5" />
                  <span>Voir la Carte</span>
                </a>
                <a href="#book" className="group flex items-center justify-center gap-2 bg-yellow hover:bg-orange text-blue px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-xl shadow-yellow-500/20">
                  <Icon icon="solar:calendar-linear" width="20" stroke-width="1.5" />
                  <span>Réserver une table</span>
                </a>
              </div>
            </div>

            {/* Floating visual element (hidden on mobile) */}
            <div className="hidden md:block relative">
              <div className="relative z-10 p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Rougail Saucisse" className="rounded-xl w-full h-auto object-cover shadow-inner" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                    <Icon icon="solar:leaf-linear" width="20" stroke-width="1.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-900">Produits Frais</p>
                    <p className="text-[10px] text-stone-500">Arrivage quotidien</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header >

        {/* About Section */}
        < section id="about" className="py-24 md:py-32 relative overflow-hidden" >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow rounded-full blur-3xl opacity-50"></div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute inset-0 bg-stone-900 rounded-2xl rotate-2 group-hover:rotate-1 transition-transform opacity-10"></div>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" alt="Spices and Cooking" className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-2 text-blue font-medium text-sm tracking-wide uppercase">
                <span className="w-8 h-[1px] bg-blue"></span>
                Notre Histoire
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">Des racines volcaniques au cœur de la Provence.</h2>
              <p className="text-stone-600 leading-relaxed">
                Née au pied du Piton des Neiges, notre Cheffe Marie a emporté dans ses valises les secrets de sa grand-mère. La Case Vanille n'est pas juste un restaurant, c'est un pont entre deux cultures.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Nous cuisinons comme à la maison : le <span className="text-blue font-medium">curcuma</span> (safran péi), le combava et la vanille bourbon rythment nos préparations. Une cuisine de partage, chaleureuse et sans artifice.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <Icon icon="solar:heart-angle-linear" className="text-blue mb-2" width="32" stroke-width="1.5" />
                  <h4 className="font-semibold text-stone-900">Fait Maison</h4>
                  <p className="text-sm text-stone-500 mt-1">Rougails mijotés 4h minimum</p>
                </div>
                <div>
                  <Icon icon="solar:bottle-linear" className="text-blue mb-2" width="32" stroke-width="1.5" />
                  <h4 className="font-semibold text-stone-900">Rhum Arrangé</h4>
                  <p className="text-sm text-stone-500 mt-1">Macération artisanale</p>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Menu Highlights */}
        < section id="menu" className="py-24 bg-white border-y border-stone-100" >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-4 text-blue">La Carte des Saveurs</h2>
              <p className="text-stone-500">Une sélection de nos plats signatures, évoluant au gré des saisons et des arrivages du marché.</p>
            </div>

            {/* Categories Tabs (Functional) */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => {
                  setActiveFilter("Tous");
                  setCurrentPage(0);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "Tous" ? "bg-yellow text-blue" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
              >
                Tous
              </button>
              <button
                onClick={() => {
                  setActiveFilter("Entrée");
                  setCurrentPage(0);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "Entrée" ? "bg-yellow text-blue" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
              >
                Entrées
              </button>
              <button
                onClick={() => {
                  setActiveFilter("Plat");
                  setCurrentPage(0);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "Plat" ? "bg-yellow text-blue" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
              >
                Plats
              </button>
              <button
                onClick={() => {
                  setActiveFilter("Douceurs");
                  setCurrentPage(0);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "Douceurs" ? "bg-yellow text-blue" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
              >
                Douceurs
              </button>
            </div>

            {/* Menu Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {currentItems.map((item) => (
                <div key={item.id} className="group relative bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-stone-900 text-blue">{item.title}</h3>
                      <span className="text-blue font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed mb-4">{item.description}</p>
                    <span className="inline-block px-2 py-1 rounded bg-yellow text-blue text-[10px] uppercase tracking-wider font-semibold">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                <button
                  onClick={goToPrevPage}
                  className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-white hover:border-stone-300 transition-colors"
                >
                  <Icon icon="solar:arrow-left-linear" width="20" stroke-width="1.5" />
                </button>
                <button
                  onClick={goToNextPage}
                  className="w-10 h-10 rounded-full bg-yellow text-blue flex items-center justify-center hover:bg-stone-800 transition-colors"
                >
                  <Icon icon="solar:arrow-right-linear" width="20" stroke-width="1.5" />
                </button>
              </div>
            )}

            <div className="mt-8 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="/menu.pdf" download className="inline-flex items-center gap-2 text-stone-900 hover:text-blue font-medium transition-colors border-b border-stone-300 pb-1 hover:border-orange-600">
                <span>Télécharger le menu complet</span>
                <Icon icon="solar:file-download-linear" width="18" stroke-width="1.5" />
              </a>
              <a href="#book" className="inline-flex items-center gap-2 bg-blue text-white px-6 py-2 rounded-lg hover:bg-orange transition-colors">
                <Icon icon="solar:calendar-linear" width="18" stroke-width="1.5" />
                <span>Réserver une table</span>
              </a>
            </div>
          </div>
        </section >

        {/* Gallery & Ambiance */}
        < section id="gallery" className="py-24 bg-stone-50" >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-blue tracking-tight">Immersion Tropicale</h2>
                <p className="text-stone-500 mt-2">Une ambiance décontractée et chaleureuse.</p>
              </div>
              {/* <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-white hover:border-stone-300 transition-colors">
                  <Icon icon="solar:arrow-left-linear" width="20" stroke-width="1.5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-yellow text-blue flex items-center justify-center hover:bg-stone-800 transition-colors">
                  <Icon icon="solar:arrow-right-linear" width="20" stroke-width="1.5" />
                </button>
              </div> */}
            </div>

            {/* Masonry-like Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Restaurant Interior" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Salle principale</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cocktail" />
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dessert" />
              </div>
              <div className="col-span-2 relative rounded-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Terrace" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Terrasse ensoleillée</p>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Info & Reservation Section */}
        < section id="infos" className="relative text-stone-300 py-24 overflow-hidden" >
          {/* Decoration */}
          < div className="absolute top-0 left-0 w-full h-px from-transparent via-stone-700 to-transparent" ></div >
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
            {/* Practical Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-blue tracking-tight mb-2">Infos Pratiques</h2>
                <p className="text-stone-400">Retrouvez-nous au Cap d'Agde.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-stone-800 transition-colors">
                  <div className="p-2 bg-blue rounded-lg text-yellow">
                    <Icon icon="solar:map-point-linear" width="24" stroke-width="1.5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-blue font-medium mb-1">Adresse</h4>
                    <p className="text-sm text-stone-600">24 QUAI DI DOMINICO LE CAP D AGDE<br />34300 AGDE</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/%C3%94+Phil+d'Elo+974/@43.2849787,3.5092657,17.32z/data=!4m6!3m5!1s0x12b13b506b487fc3:0x9c7c4ae1d07fd423!8m2!3d43.2845434!4d3.5095494!16s%2Fg%2F11fylw82d_!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 bg-yellow text-blue rounded-lg hover:bg-orange transition-colors"
                  >
                    <Icon icon="solar:point-on-map-linear" width="20" stroke-width="1.5" />
                  </a>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-stone-800 transition-colors">
                  <div className="p-2 bg-blue rounded-lg text-yellow">
                    <Icon icon="solar:clock-circle-linear" width="24" stroke-width="1.5" />
                  </div>
                  <div>
                    <h4 className="text-blue font-medium mb-1">Horaires</h4>
                    <p className="text-sm text-stone-600">Lundi - Dimanche : 12h00 - 15h30 / 18h30 - 22h30<br />Mercredi : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div id="book" className="bg-white rounded-2xl p-8 text-stone-800 shadow-2xl shadow-black/20">
              <h3 className="text-2xl font-semibold mb-6 tracking-tight text-blue">Réserver une table</h3>
              <p className="mb-4 text-stone-600">Contactez-nous pour une réservation :</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+33442000000"
                  className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-orange transition-colors flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Appeler
                </a>
                <a
                  href="sms:+33442000000"
                  className="bg-blue text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  Envoyer un SMS
                </a>
              </div>
            </div>
          </div>
        </section >

        <footer className="text-stone-500 py-8 text-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue tracking-tight">Ô Phil d'Elo</span>
              <span className="text-stone-600">|</span>
              <span>© 2026 Tous droits réservés.</span>
            </div>

            {/* <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            </div> */}
          </div>
        </footer>
      </div >
    </Layout>
  )
}
