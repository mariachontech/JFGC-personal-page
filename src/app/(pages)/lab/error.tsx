'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="py-16 text-center">
      <h2 className="text-xl font-semibold">Algo salió mal</h2>
      <p className="mt-2 text-muted-foreground">
        No pudimos cargar este contenido. Intenta de nuevo.
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-md border px-4 py-2"
      >
        Reintentar
      </button>
    </main>
  )
}
