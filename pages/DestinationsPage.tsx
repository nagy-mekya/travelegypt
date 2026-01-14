import React from 'react';
import { Page } from '../App';

interface DestinationsPageProps {
  onNavigate: (page: Page) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onNavigate }) => {
  const destinations = [
    { name: "Cairo", desc: "The City of a Thousand Minarets, home to the Pyramids and the Sphinx.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFKTMgvnwTw25objoW1591wbzBdKI6T8n8z0qjDH3FHdgt7oVrkVZ_xiE_bCjK5kHr6Y9Orw5bmjrnDSd-IgnoJ-BBRfdUr33vsnH0RiAywwBqbSRdnN92tPMAVEzFkpNjpYDkpgmFhQLLcEBrXrEuLhCiVwOQPpqv-LoNVG8fF0sVYATgSOghLHZnY-260JCyTKxn0VMkptOlgoZQr_bfxIw-EJRsabQfCN083jWCtPRiH6HtQlDw_MTqgqDghkLDM03mrJcZkEYx" },
    { name: "Luxor", desc: "The world's greatest open-air museum, featuring Karnak and Valley of the Kings.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQcocWskdk7iMEYgZNDSoI4q3l3QTDf7txI3-AQSCj5V9Q8oWb46MlJTGyTCgG9__ejpM3FJwlRJhY80KXUyDTNdUw0QG5p6LZwS_zUUPPUhgcT-xve3eRn1fQ_nDvOTtaj9imAmmingq9m7Ef2yr42zpvXc_xYN-HpJabZr_vEkhO-yTcivisr3YPSqNo7I7GSgAxU5BjCOhTK0_OVHbUZrMO7MxlRY5qoQEdP_GAzk5ZG75bCw1DEBvfzz27BscqMHK2GEdPDVj7" },
    { name: "Aswan", desc: "A serene city on the Nile, famous for the High Dam and Philae Temple.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdh4KzK0sQIxIUSft6PeQLUJ3rX0xtdmnKZN3tOwLzT0DbRt54PSr6tmtiniUxroAhorvn_E0L5rGmWXHwKYPrsft-2aRwNcgy1l4JwlJG26xbKI7z2gU2V6ptWax-VZgy3Ms3lO8ZnzAjjua7Wb_VfkAmyURJatzl5haOteQdXjHs5sePZpGRk5AAPNRHxjy0ZLZ5_PcHF2bS6q_wE1qEa2E1eBs3lwClut0oI5nZdKcnpXhTUQbNjC1-7iZmwWPk8w1W9qa4-X4h" },
    { name: "Hurghada", desc: "A beach resort town stretching some 40km along Egypt's Red Sea coast.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTpL9WK3tk3Xs_IsnmdvN4US32Nek0qX9UZH2MgHsFj1FsO2r0ZuXqA0QSZUFtw_bH1FbfA5xlzK3szOfmHFHKHd8NdURdz5RaXBpaLy57Niuid4h-5Wf6AIzaHA8kgBE0if2kVGKN6HcaA7l0Pmlb8F4HbdaxVvV1VKQpSsYzOQgQRmzpyBC2T8psPz7XAc98q5Vae3GDTp8eNjQKLXJaDLGobZB-JQXCl8h7K6FxzXapS9BLco2M5fWSOOokUMRdfeh4IPkhyeM6" },
    { name: "Alexandria", desc: "The Mediterranean bride, founded by Alexander the Great.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9caYuVDq1P0oKeNe8IKJsNTrJC-nZZQg9RSCBs5dDo6DDVEeFZvjBLzSBFytycAQ5Ts72YP7EFpuVLO2qNxM4LFuvinJOXEy-a9ebirLpkerdna6spsj21mLt4jUtHZv8T9T8UarKVPnhQKOLfmaeJx7xdJjP4hNlFU56U0FJ0brvNp185bpO2NHko4dn70QzdcteEWjX58APbnt0N9s-lOxGTbOCzj76S653O6Okc_HsjxxhO1x1HHicHCTY9FfDauLHH6FtaSFz" },
    { name: "Sharm El Sheikh", desc: "A world-renowned diving destination with crystal clear waters.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkeuUxFBElgd4vxHf2XpT4ZUfAH8CnnQ8IXH6BP5DFgvUzQmQcUb1eIAvXQnvhaPp7EhMyFBU2qsGbh1Vg0TmIcEylScLCRPBplwG8lvM1tp6R9hBhTIDvgwN0dq5eDTtobnuywxDh2gQYE8sr9kHtEfU6LUU8il1d59tUuozmQIR7FhlpInF3eEDI9x9rD5skmXMY6qF41VWswHiHoX0ON-NpCJrGSU3V-wZRYLHhUbXOCUNNhMUL134dV699HqVao6lrrb6QLsUz" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-main mb-4">Explore Egypt</h1>
        <p className="text-[#897961] max-w-2xl mx-auto">From the Mediterranean coast to the Nubian border, discover the diverse beauty of Egypt's most iconic destinations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, i) => (
          <div key={i} onClick={() => onNavigate('tours')} className="group cursor-pointer rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-500 relative h-80">
            <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{dest.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};