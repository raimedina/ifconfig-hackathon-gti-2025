export function getTipoDescricao(texto: string) {
  const mapa: Record<string, string> = {
    EDITAL: "Edital",
    TR: "Termo de referência",
    ETP: "Estudo Técnico Preliminar (ETP)",
    DFD: "Documento de formalização de demanda",
    ORÇAMENTO: "Orçamento estimado",
  };
  return mapa[texto] || "Documento";
}