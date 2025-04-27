import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FinancialProjectionsChart, GrowthScenariosChart } from "@/components/dashboard/charts";

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Piano Finanziario</h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Investimento Iniziale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">CHF 450K</div>
            <p className="text-xs text-gray-400">
              Capitale di avvio
            </p>
            <div className="mt-4 text-sm">
              <span className="text-blue-500 font-medium">Seed Round</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Break-even</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mese 14</div>
            <p className="text-xs text-gray-400">
              Punto di pareggio
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">ROI 215%</span> a 24 mesi
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Ricavi Anno 2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">CHF 900K</div>
            <p className="text-xs text-gray-400">
              Proiezione
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 25%</span> crescita trimestrale
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Margine Operativo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43%</div>
            <p className="text-xs text-gray-400">
              Anno 2
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 12%</span> vs Anno 1
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Proiezioni Finanziarie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <FinancialProjectionsChart />
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Scenari di Crescita</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <GrowthScenariosChart />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Suddivisione Budget Iniziale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Sviluppo Tecnologico</span>
                  <span className="text-sm text-blue-400">CHF 180K (40%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">Sviluppo piattaforma, AI, blockchain, app mobile</div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Marketing e Acquisizione</span>
                  <span className="text-sm text-purple-400">CHF 135K (30%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">Campagne marketing, PR, influencer, eventi</div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Operazioni</span>
                  <span className="text-sm text-green-400">CHF 90K (20%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">Personale, ufficio, logistica, servizio clienti</div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Riserva Strategica</span>
                  <span className="text-sm text-yellow-400">CHF 45K (10%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">Imprevisti, opportunità, pivot</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Strategie di Finanziamento Future</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4">Fase</th>
                    <th className="text-left py-3 px-4">Timing</th>
                    <th className="text-left py-3 px-4">Importo Target</th>
                    <th className="text-left py-3 px-4">Valutazione</th>
                    <th className="text-left py-3 px-4">Obiettivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Seed (completato)</td>
                    <td className="py-3 px-4">Q1 2025</td>
                    <td className="py-3 px-4">CHF 450K</td>
                    <td className="py-3 px-4">CHF 2.2M</td>
                    <td className="py-3 px-4">MVP, prime boutique partner</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Serie A</td>
                    <td className="py-3 px-4">Q3 2026</td>
                    <td className="py-3 px-4">CHF 1.5M</td>
                    <td className="py-3 px-4">CHF 7.5M</td>
                    <td className="py-3 px-4">Espansione nazionale, team</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Serie B</td>
                    <td className="py-3 px-4">Q1 2028</td>
                    <td className="py-3 px-4">CHF 5M</td>
                    <td className="py-3 px-4">CHF 25M</td>
                    <td className="py-3 px-4">Espansione internazionale</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Exit Strategy</td>
                    <td className="py-3 px-4">2030+</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4">CHF 75-100M</td>
                    <td className="py-3 px-4">Acquisizione da gruppo luxury</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
