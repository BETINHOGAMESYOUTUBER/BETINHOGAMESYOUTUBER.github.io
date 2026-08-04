/**
 * Adiciona ou substitui parâmetros UTM em uma URL com segurança.
 * Preserva query strings existentes sem duplicar '?' ou '&'.
 */
export function addUtmParameters(
  baseUrl: string,
  params: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  }
): string {
  if (!baseUrl) return '';

  // Se for uma rota relativa (ex: /curso-facemaker), montar com base fake para tratar com a API URL
  const isRelative = baseUrl.startsWith('/');
  const dummyDomain = 'https://temp-domain.internal';
  
  try {
    const urlObj = new URL(isRelative ? `${dummyDomain}${baseUrl}` : baseUrl);

    if (params.source) urlObj.searchParams.set('utm_source', params.source);
    if (params.medium) urlObj.searchParams.set('utm_medium', params.medium);
    if (params.campaign) urlObj.searchParams.set('utm_campaign', params.campaign);
    if (params.term) urlObj.searchParams.set('utm_term', params.term);
    if (params.content) urlObj.searchParams.set('utm_content', params.content);

    if (isRelative) {
      return `${urlObj.pathname}${urlObj.search}${urlObj.hash}`;
    }

    return urlObj.toString();
  } catch (error) {
    console.error('Erro ao formatar parâmetros UTM na URL:', error);
    return baseUrl;
  }
}
