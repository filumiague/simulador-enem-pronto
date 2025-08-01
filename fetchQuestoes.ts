export async function carregarQuestoesAleatorias() {
  const anos = [
    2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020,
    2021, 2022, 2023
  ];
  const anoSorteado = anos[Math.floor(Math.random() * anos.length)];
  const response = await fetch(`/json-questoes-enem/enem_${anoSorteado}.json`);
  if (!response.ok) throw new Error('Erro ao carregar questões.');
  const data = await response.json();
  return data.sort(() => Math.random() - 0.5).slice(0, 15); // retorna 15 questões aleatórias
}
