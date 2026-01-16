"use client"

export function MapEmbed() {
  // Endereço: Rua Alexandre Dumas, 495 - Santo Amaro, São Paulo - SP
  // Para obter uma melhor visualização, você pode:
  // 1. Ir em google.com/maps
  // 2. Buscar o endereço
  // 3. Clicar em "Compartilhar" > "Incorporar um mapa"
  // 4. Copiar o iframe src
  
  return (
    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Rua+Alexandre+Dumas,+495+-+Santo+Amaro,+São+Paulo+-+SP&output=embed"
      />
    </div>
  )
}
