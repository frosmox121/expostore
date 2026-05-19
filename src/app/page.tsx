import { Header } from '@/components/header';
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                Tecnología y productos premium
              </div>

              <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                La nueva experiencia
                <span className="block bg-gradient-to-r from-[#d4af37] via-[#f7e7a1] to-[#8f6b29] bg-clip-text text-transparent">
                  premium online
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
                iPhones originales, perfumes importados, Karssell profesional y electrodomésticos premium con estética moderna, seguridad y atención personalizada.
              </p>
            </div>

            {/* Premium Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Originalidad Garantizada',
                  desc: 'Productos sellados y verificados.',
                },
                {
                  icon: Truck,
                  title: 'Envíos Premium',
                  desc: 'Cobertura rápida a todo el país.',
                },
                {
                  icon: Sparkles,
                  title: 'Atención Exclusiva',
                  desc: 'Soporte humano por WhatsApp.',
                },
                {
                  icon: BadgeCheck,
                  title: 'Calidad Verificada',
                  desc: 'Marcas premium seleccionadas.',
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/70 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/20 hover:shadow-2xl hover:shadow-yellow-500/10"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#f5f5f5]/10" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#b38728] via-[#f7e7a1] to-[#8f6b29] shadow-lg">
                        <Icon className="h-5 w-5 text-black" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-zinc-400">
   
