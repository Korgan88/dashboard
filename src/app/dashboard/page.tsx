// src/app/dashboard/page.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  MarketGrowthChart,
  GenerationalDistributionChart,
  InsightFashionChart,
  ProductMatcherChart,
  TrendGeneratorChart,
  AssistantAIChart,
} from "@/components/dashboard/charts";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Titolo Sezione */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
      </div>

      {/* Carte Metriche */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Mercato Luxury</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">533.39M USD</div>
            <p className="text-xs text-gray-400">Valore stimato 2025</p>
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
            <p className="text-xs text-gray-400">Tasso di conversione</p>
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
            <p className="text-xs text-gray-400">Punto di pareggio</p>
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
            <p className="text-xs text-gray-400">Obiettivo a 12 mesi</p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">5-7</span> nella fase beta
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grafici Statici Esistenti */}
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

      {/* 🎨 Visualizzazioni Interattive AI */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>AI Insight</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <InsightFashionChart />
            </div>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Product Matcher</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ProductMatcherChart />
            </div>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Trend Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <TrendGeneratorChart />
            </div>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Assistente AI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <AssistantAIChart />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
