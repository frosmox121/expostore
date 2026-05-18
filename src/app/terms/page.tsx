import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">Términos y Condiciones</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-secondary">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Objeto</h2>
            <p>
              EXPOSTORE es una plataforma de comercio electrónico dedicada a la venta de productos premium.
              Estos términos regulan el acceso y uso de nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Productos y Servicios</h2>
            <p>
              Todos nuestros productos son 100% originales con garantía de autenticidad.
              Los precios mostrados incluyen IVA y son válidos al momento de la consulta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Forma de Compra</h2>
            <p>
              La compra se realiza a través de consulta directa por WhatsApp. Coordinarás con nuestro equipo
              los detalles del producto, envío y forma de pago.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Métodos de Pago</h2>
            <p>
              Aceptamos: Mercado Pago, Efectivo contra entrega, Transferencia bancaria y USDT.
              Todos los pagos se coordinan directamente con nuestro equipo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Devoluciones</h2>
            <p>
              Aceptamos devoluciones dentro de 14 días del recibimiento si el producto está sin abrir.
              Los productos abiertos no se aceptan por razones de higiene y autenticidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Garantía</h2>
            <p>
              Todos los productos incluyen garantía oficial del fabricante. Nos comprometemos a
              responder cualquier reclamo en 48 horas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Responsabilidad</h2>
            <p>
              EXPOSTORE se esfuerza por proporcionar información precisa, pero no se responsabiliza
              por errores involuntarios o cambios en disponibilidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos, contacta a través de WhatsApp o envía
              un email a agusrojas010309@gmail.com
            </p>
          </section>

          <p className="text-xs italic mt-12">
            Última actualización: {new Date().toLocaleDateString('es-AR')}
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
