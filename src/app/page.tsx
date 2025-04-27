// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="bg-black text-white py-6 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">LUXAI STARTUP</h1>
          <p className="mt-2 text-gray-300">
            Dashboard Interattiva Business Plan
          </p>
        </div>
      </header>

      <main className="flex-1 bg-black">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Benvenuto nella Dashboard LUXAI
            </h2>
            <p className="text-lg text-gray-300">
              Esplora i dati, le analisi e le simulazioni interattive del
              business plan LUXAI. Questa dashboard ti permette di visualizzare
              tutte le informazioni chiave e interagire con i servizi AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/dashboard" className="block group">
              <div className="dashboard-card">
                <div className="h-3 bg-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    Dashboard Overview
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Visualizza le metriche chiave e i grafici principali in
                    un'unica vista panoramica.
                  </p>
                  <div className="text-blue-400 font-medium">Esplora →</div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/market" className="block group">
              <div className="dashboard-card">
                <div className="h-3 bg-green-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                    Analisi di Mercato
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Esplora i dati di crescita del mercato, CAGR per segmento e
                    penetrazione del dropshipping.
                  </p>
                  <div className="text-green-400 font-medium">Esplora →</div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/demographics" className="block group">
              <div className="dashboard-card">
                <div className="h-3 bg-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    Demografia
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Analizza la distribuzione generazionale e i comportamenti
                    d'acquisto per segmento demografico.
                  </p>
                  <div className="text-purple-400 font-medium">Esplora →</div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/competitors" className="block group">
              <div className="dashboard-card">
                <div className="h-3 bg-orange-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                    Benchmarking Competitor
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Confronta LUXAI con i principali competitor in termini di
                    posizionamento e performance.
                  </p>
                  <div className="text-orange-400 font-medium">Esplora →</div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/finance" className="block group">
              <div className="dashboard-card">
                <div className="h-3 bg-red-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">
                    Piano Finanziario
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Visualizza proiezioni finanziarie, scenari di crescita e
                    suddivisione del budget iniziale.
                  </p>
                  <div className="text-red-400 font-medium">Esplora →</div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/expansion" className="block group">
              <div className="dashboard-card">
                <div className="h-3 bg-yellow-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                    Strategia di Espansione
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Esplora le fasi di espansione, il processo di onboarding
                    delle boutique e le metriche di successo.
                  </p>
                  <div className="text-yellow-400 font-medium">Esplora →</div>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/ai-services" className="block group">
              <div className="dashboard-card">
                <div className="h-3 bg-indigo-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                    Servizi AI
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Interagisci con le simulazioni dei servizi AI: Insight,
                    Product Matcher, Trend Generator e Assistente.
                  </p>
                  <div className="text-indigo-400 font-medium">Esplora →</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <Link
              href="/dashboard"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
              Accedi alla Dashboard
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 LUXAI STARTUP. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
