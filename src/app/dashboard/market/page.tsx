import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MarketGrowthChart } from "@/components/dashboard/charts";

export default function MarketPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analisi di Mercato</h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Mercato Luxury CH</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">533.39M USD</div>
            <p className="text-xs text-gray-400">
              Valore stimato 2025
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 17.4%</span> CAGR
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Segmento Abbigliamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <p className="text-xs text-gray-400">
              Quota di mercato
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 19.2%</span> CAGR
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Segmento Accessori</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35%</div>
            <p className="text-xs text-gray-400">
              Quota di mercato
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 16.8%</span> CAGR
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Dropshipping</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5%</div>
            <p className="text-xs text-gray-400">
              Penetrazione attuale
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 32.7%</span> crescita annuale
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Crescita del Mercato Luxury in Svizzera (2025-2030)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <MarketGrowthChart />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>CAGR per Segmento di Mercato</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Abbigliamento</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "19.2%" }}></div>
                </div>
                <span className="text-blue-400">19.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Accessori</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "16.8%" }}></div>
                </div>
                <span className="text-green-400">16.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Calzature</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "15.5%" }}></div>
                </div>
                <span className="text-purple-400">15.5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Gioielli</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: "18.3%" }}></div>
                </div>
                <span className="text-yellow-400">18.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Orologi</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "17.2%" }}></div>
                </div>
                <span className="text-red-400">17.2%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Penetrazione del Dropshipping</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>2023</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: "4.8%" }}></div>
                </div>
                <span className="text-orange-400">4.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>2024</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: "6.4%" }}></div>
                </div>
                <span className="text-orange-400">6.4%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>2025</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: "8.5%" }}></div>
                </div>
                <span className="text-orange-400">8.5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>2026 (prev)</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: "11.3%" }}></div>
                </div>
                <span className="text-orange-400">11.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>2027 (prev)</span>
                <div className="w-2/3 bg-gray-700 rounded-full h-2.5">
                  <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: "15.0%" }}></div>
                </div>
                <span className="text-orange-400">15.0%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Trend Tecnologici nel Settore Luxury</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-800 rounded-lg">
                <div className="text-xl font-bold text-blue-400 mb-2">Blockchain</div>
                <p className="text-gray-400 text-sm">
                  Autenticazione e tracciabilità dei prodotti di lusso tramite blockchain per garantire l'originalità e combattere la contraffazione.
                </p>
                <div className="mt-2 text-sm">
                  <span className="text-green-500 font-medium">Adozione: 28%</span>
                </div>
              </div>
              
              <div className="p-4 border border-gray-800 rounded-lg">
                <div className="text-xl font-bold text-purple-400 mb-2">AI & Machine Learning</div>
                <p className="text-gray-400 text-sm">
                  Personalizzazione avanzata dell'esperienza cliente e previsione delle tendenze di mercato attraverso algoritmi di intelligenza artificiale.
                </p>
                <div className="mt-2 text-sm">
                  <span className="text-green-500 font-medium">Adozione: 42%</span>
                </div>
              </div>
              
              <div className="p-4 border border-gray-800 rounded-lg">
                <div className="text-xl font-bold text-green-400 mb-2">AR/VR</div>
                <p className="text-gray-400 text-sm">
                  Esperienze immersive di shopping virtuale che permettono ai clienti di provare prodotti di lusso da remoto.
                </p>
                <div className="mt-2 text-sm">
                  <span className="text-green-500 font-medium">Adozione: 18%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
