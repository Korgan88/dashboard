"use client";

import React from "react";
import {
  MarketGrowthChart,
  GenerationalDistributionChart,
  PositioningChart,            //  ← aggiunto
  FinancialProjectionsChart,
  InsightFashionChart,
  ProductMatcherChart,
  TrendGeneratorChart,
  AssistantAIChart,
} from "@/components/dashboard/charts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
      </div>

      {/* KPI cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* … (le tue quattro card KPI restano uguali) … */}
      </div>

      {/* Grafici Mercato + Generazioni */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Crescita Mercato Luxury</CardTitle>
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

      {/* Posizionamento + Proiezioni finanziarie */}
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

      {/* Demo servizi AI */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader><CardTitle>Insight AI</CardTitle></CardHeader>
          <CardContent><InsightFashionChart /></CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader><CardTitle>Product Matcher</CardTitle></CardHeader>
          <CardContent><ProductMatcherChart /></CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader><CardTitle>Trend Generator</CardTitle></CardHeader>
          <CardContent><TrendGeneratorChart /></CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader><CardTitle>Assistente AI</CardTitle></CardHeader>
          <CardContent><AssistantAIChart /></CardContent>
        </Card>
      </div>
    </div>
  );
}
