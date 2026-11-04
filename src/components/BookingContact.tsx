import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/magicData';

export const BookingContact: React.FC = () => {
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
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#f3d37a', '#8b5cf6', '#ffffff']
    });
  };

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 relative bg-[#090912] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d37a] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Contacto & Presupuesto Sin Compromiso
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight mb-4"
          >
            Hagamos que tu evento sea{' '}
            <span className="gold-gradient-text">inolvidable</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Cuéntame sobre tu evento y diseñaremos una propuesta a medida. Respuesta garantizada en menos de 24 horas.
          </motion.p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct contact channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141420] via-[#0f0f18] to-[#0a0a10] border border-white/10 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">
                Contacto Directo
              </h3>
              <p className="text-sm text-slate-400">
                ¿Prefieres hablar directamente por teléfono o WhatsApp? Escríbeme o llámame sin compromiso.
              </p>

              {/* WhatsApp Quick Action Card */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-900/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-bold shadow-lg group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-black" />
                </div>
                <div>
                  <div className="text-emerald-300 font-semibold text-sm">
                    Escribir por WhatsApp
                  </div>
                  <div className="text-xs text-slate-300">
                    Respuesta rápida y directa
                  </div>
                </div>
              </a>

              {/* Phone call link */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">
                    Teléfono directo
                  </div>
                  <div className="text-white font-medium text-sm group-hover:text-[#f3d37a] transition-colors">
                    {CONTACT_INFO.phone}
                  </div>
                </div>
              </a>

              {/* Email link */}
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Consulta%20Magia%20para%20Evento`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">
                    Email
                  </div>
                  <div className="text-white font-medium text-sm group-hover:text-[#f3d37a] transition-colors">
                    {CONTACT_INFO.email}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">
                    Ubicación y Desplazamientos
                  </div>
                  <div className="text-white text-xs leading-relaxed">
                    {CONTACT_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141420] via-[#0f0f18] to-[#0a0a10] border border-[#d4af37]/30 shadow-[0_0_35px_rgba(212,175,55,0.1)] relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    ¡Mensaje Mágico Enviado!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Gracias por tu interés, {formData.nombre}. He recibido tu solicitud para{' '}
                    <strong className="text-[#f3d37a]">{formData.tipoEvento}</strong>. 
                    Me pondré en contacto contigo muy pronto para concretar todos los detalles.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all mt-4"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#d4af37] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Email de contacto *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#d4af37] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#d4af37] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Tipo de evento *
                      </label>
                      <select
                        value={formData.tipoEvento}
                        onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141420] border border-white/10 focus:border-[#d4af37] focus:outline-none text-white text-sm transition-colors"
                      >
                        <option value="Empresas y Corporativo">Magia para Empresas & Galas</option>
                        <option value="Boda">Boda (Cóctel / Banquete)</option>
                        <option value="Coctelería o Restaurante">Coctelería o Restaurante</option>
                        <option value="Celebración Privada">Celebración Privada / Aniversario</option>
                        <option value="Maestro de Ceremonias">Maestro de Ceremonias / Presentador</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Fecha aproximada
                      </label>
                      <input
                        type="date"
                        value={formData.fecha}
                        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#d4af37] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Ciudad / Localidad
                      </label>
                      <input
                        type="text"
                        value={formData.ciudad}
                        onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                        placeholder="Ej. Madrid, Barcelona..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#d4af37] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Detalles del evento o mensaje
                    </label>
                    <textarea
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Cuéntame número aproximado de invitados, horario, temática especial..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#d4af37] focus:outline-none text-white text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3d37a] to-[#d4af37] text-black font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Presupuesto</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
