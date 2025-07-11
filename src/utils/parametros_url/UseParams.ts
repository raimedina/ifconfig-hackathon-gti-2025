export function useParams(): { numero: string | undefined } {
    const urlParams = new URLSearchParams(window.location.search);
    const numero = urlParams.get("numero") || undefined;
    return { numero };
}