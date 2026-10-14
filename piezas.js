// =====================================================================
// CALENDARIO DE PIEZAS DE DISEÑO – Comunicaciones Internas Achs Servicios
// Este es el único archivo que hay que editar para actualizar el calendario.
// =====================================================================

// Cupo semanal del diseñador
window.CUPO = {
  generales: 9,   // solicitudes generales por semana
  urgentes: 1     // solicitudes urgentes por semana
};

// Correo al que las áreas envían su solicitud
window.CORREO_SOLICITUDES = "rcasalig@achsservicios.cl";

// Piezas agendadas. Agrega una línea por pieza, con este formato:
//   { fecha: "AAAA-MM-DD", titulo: "Nombre de la pieza", area: "Área solicitante", tipo: "General" },
// tipo puede ser "General" o "Urgente". La fecha debe ser un día de lunes a viernes.
window.PIEZAS = [
  // { fecha: "2026-10-19", titulo: "Ejemplo: afiche EDD 2026", area: "Gerencia de Personas", tipo: "General" },
];
