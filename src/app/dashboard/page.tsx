import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  MarketGrowthChart,
  GenerationalDistributionChart,
  PositioningChart,
  FinancialProjectionsChart
} from "@/components/dashboard/charts";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Mercato Luxury</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">533.39M USD</div>
            <p className="text-xs text-gray-400">
              Valore stimato 2025
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 17.4%</span> crescita annuale
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Conversione</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.5%</div>
            <p className="text-xs text-gray-400">
              Tasso di conversione
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">+40%</span> vs competitor
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
            <CardTitle>Boutique Partner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15-20</div>
            <p className="text-xs text-gray-400">
              Obiettivo a 12 mesi
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">5-7</span> nella fase beta
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Crescita del Mercato Luxury</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <MarketGrowthChart />
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Distribuzione Generazionale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <GenerationalDistributionChart />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Posizionamento Competitivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <PositioningChart />
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Proiezioni Finanziarie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="chart-container">
              <FinancialProjectionsChart />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Servizi AI Innovativi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="service-card">
                <div className="service-icon bg-blue-900">
                  <span className="text-blue-400 text-lg">AI</span>
                </div>
                <h4 className="service-title">AI Insight</h4>
                <p className="service-description">Analisi predittiva delle tendenze di mercato e comportamenti d'acquisto</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon bg-green-900">
                  <span className="text-green-400 text-lg">PM</span>
                </div>
                <h4 className="service-title">Product Matcher</h4>
                <p className="service-description">Abbinamento personalizzato di prodotti in base alle preferenze individuali</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon bg-purple-900">
                  <span className="text-purple-400 text-lg">TG</span>
                </div>
                <h4 className="service-title">Trend Generator</h4>
                <p className="service-description">Generazione di previsioni sulle tendenze future del mercato del lusso</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon bg-orange-900">
                  <span className="text-orange-400 text-lg">AS</span>
                </div>
                <h4 className="service-title">Assistente AI</h4>
                <p className="service-description">Supporto personalizzato per clienti con consigli di stile e assistenza acquisti</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
