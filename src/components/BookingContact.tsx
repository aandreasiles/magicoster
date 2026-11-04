import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/magicData';

export const BookingContact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: 'Empresas y Corporativo',
    fecha: '',
    ciudad: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 border-b border-zinc-800/60 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow block mb-2">
            Contacto & Disponibilidad
          </span>
          <h2 className="heading-lg mb-4">
            Contacta directamente
          </h2>
          <p className="text-zinc-400 text-sm">
            Cuéntame sobre tu evento y diseñaremos una propuesta a medida sin compromiso. Respuesta rápida en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">

            <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-sans text-zinc-400 uppercase">Teléfono</div>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="text-sm font-medium text-white hover:text-champagne transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-sans text-zinc-400 uppercase">Email directo</div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-medium text-white hover:text-champagne transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-sans text-zinc-400 uppercase">Ubicación</div>
                  <div className="text-xs text-zinc-300">
                    {CONTACT_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-zinc-900 border border-zinc-800">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="heading-md">
                    Solicitud enviada correctamente
                  </h3>
                  <p className="text-zinc-400 text-xs max-w-md mx-auto leading-relaxed">
                    Gracias por ponerte en contacto, {formData.nombre}. Te responderé en un plazo máximo de 24 horas con toda la información y disponibilidad para tu evento.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-sans uppercase text-zinc-200 transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-zinc-400 mb-1.5">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Carmen Rodríguez"
                        className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-zinc-400 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carmen@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-zinc-400 mb-1.5">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-zinc-400 mb-1.5">
                        Tipo de evento *
                      </label>
                      <select
                        value={formData.tipoEvento}
                        onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white text-xs transition-colors"
                      >
                        <option value="Empresas y Corporativo">Magia para Empresas & Galas</option>
                        <option value="Boda">Boda (Cóctel o Banquete)</option>
                        <option value="Coctelería o Restaurante">Coctelería o Restaurante</option>
                        <option value="Celebración Privada">Celebración Privada / Aniversario</option>
                        <option value="Maestro de Ceremonias">Maestro de Ceremonias / Gala</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-zinc-400 mb-1.5">
                        Fecha aproximada
                      </label>
                      <input
                        type="date"
                        value={formData.fecha}
                        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans uppercase tracking-wider text-zinc-400 mb-1.5">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        value={formData.ciudad}
                        onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                        placeholder="Ej. Madrid"
                        className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-zinc-400 mb-1.5">
                      Detalles o dudas
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Número aproximado de invitados, lugar, necesidades concretas..."
                      className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-white text-xs transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar consulta</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
