import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">Política de Privacidad</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-secondary">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Recolección de Datos</h2>
            <p>
              EXPOSTORE recolecta información personal cuando te comunicas con nosotros a través de
              WhatsApp, Instagram o email. Esta información se utiliza únicamente para procesar tu compra
              y mejora r nuestro servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Información que Recolectamos</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nombre y apellido</li>
              <li>Número de teléfono</li>
              <li>Dirección de envío</li>
              <li>Email (opcional)</li>
              <li>Historial de compras</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso de la Información</h2>
            <p>
              Tu información personal se utiliza para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Procesar y entregar tu pedido</li>
              <li>Comunicarnos contigo sobre tu compra</li>
              <li>Mejorar nuestro servicio</li>
              <li>Mantener un registro de transacciones</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Seguridad</h2>
            <p>
              Tratamos tu información personal con máxima confidencialidad. No compartimos tus datos
              con terceros sin tu consentimiento, excepto cuando es necesario para procesar el envío.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
            <p>
              Nuestro sitio utiliza cookies para mejorar tu experiencia de navegación. Puedes desactivarlas
              en tu navegador si lo deseas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Derechos del Usuario</h2>
            <p>
              Tienes derecho a acceder, modificar o solicitar la eliminación de tus datos personales en
              cualquier momento. Contáctanos por WhatsApp para ejercer estos derechos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cambios en la Política</h2>
            <p>
              EXPOSTORE se reserva el derecho de modificar esta política de privacidad en cualquier momento.
              Te notificaremos de cambios significativos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contacto</h2>
            <p>
              Para consultas sobre privacidad, contacta a agusrojas010309@gmail.com o por WhatsApp.
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
