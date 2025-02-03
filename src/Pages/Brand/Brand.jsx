import React from "react";

// Sample data for watch brands with specific images
const watchBrands = [
  {
    id: 1,
    name: "Rolex",
    image:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1710348133/rolexcom/new-watches/2024/hub-watches/collection-rolex-watches-sea-dweller-10158_rsa_seadweller_43_m126603_0001_carrousel_24",
  },
  {
    id: 2,
    name: "Casio",
    image:
      "https://www.casio.com/content/casio/locales/in/en/products/_jcr_content/root/responsivegrid/carousel_copy_203272445/item_1721998825425.casiocoreimg.jpeg/1735104020377/cic-banner-1920x816-50th.jpeg",
  },
  {
    id: 3,
    name: "Fossil",
    image:
      "https://stygen.gift/assets/uploads/brand/1710824075-Original-fossil-Watch-Best-Price-in-Bangladesh.jpg",
  },
  {
    id: 4,
    name: "Timex",
    image:
      "https://timex.com/cdn/shop/files/6668_TX_TC24_stackable_card_TW2W64500.jpg?v=1736522759&width=1946",
  },
  {
    id: 5,
    name: "Tissot",
    image:
      "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Library-Sites-Tissot-SharedLibrary/default/dw4e590ce6/1-HOMEPAGE/2-IMAGE-TILE/DESKTOP/Tis-Digital-LeLocle-HP-Collection-Banner-Desktop.jpg",
  },
  {
    id: 6,
    name: "MVMT",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F38b2dee9796741abbb7e0fe61ffd8ea1?format=webp&width=2000",
  },
  {
    id: 7,
    name: "Garmin",
    image:
      "https://res.garmin.com/en/products/010-02936-00/g/AMOLED-D-3.jpg",
  },
  {
    id: 8,
    name: "Swatch",
    image:
      "https://www.swatch.com/dw/image/v2/BDNV_PRD/on/demandware.static/-/Library-Sites-swarp-global/default/dw7f2b9a67/images/Swatch/collections/2024/MoonSwatch%20refresh/neptune-single_card_variation_2_neptune_1080x1080.jpeg",
  },
  {
    id: 9,
    name: "Seiko",
    image:
      "https://www.seikowatches.com/global-en/-/media/Images/Common/Seiko/home/top/carouselImage/SEIKO2_PSX_Y_CMYK_1920-1080v2.jpg",
  },
  {
    id: 10,
    name: "Omega",
    image:
      "https://www.omegawatches.com/media/wysiwyg/SP62_310.30.40.50.06.001-large.jpg",
  },
];

const Brand = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Top Watch Brands</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {watchBrands.map((brand) => (
          <div
            key={brand.id}
            className="relative group w-64 h-64 rounded-full overflow-hidden shadow-lg transition-transform hover:scale-110 transform cursor-pointer"
          >
            {/* Brand Image */}
            <img
              src={brand.image}
              alt={brand.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {/* Brand Name Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              {brand.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;