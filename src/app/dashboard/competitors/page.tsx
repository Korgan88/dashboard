"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PositioningChart } from "@/components/dashboard/charts";
export default function CompetitorsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Benchmarking Competitor
        </h2>
      </div>
      {/* Competitor Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader><CardTitle>LUXAI</CardTitle></CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.9/10</div>
            <p className="text-xs text-gray-400">Punteggio complessivo</p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">Leader</span> in innovazione
            </div>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader><CardTitle>Competitor A</CardTitle></CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.0/10</div>
            <p className="text-xs text-gray-400">Punteggio complessivo</p>
            <div className="mt-4 text-sm">
              <span className="text-yellow-500 font-medium">Medio</span> in innovazione
            </div>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader><CardTitle>Competitor B</CardTitle></CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2/10</div>
            <p className="text-xs text-gray-400">Punteggio complessivo</p>
            <div className="mt-4 text-sm">
              <span className="text-blue-500 font-medium">Forte</span> in UX
            </div>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader><CardTitle>Competitor C</CardTitle></CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.0/10</div>
            <p className="text-xs text-gray-400">Punteggio complessivo</p>
            <div className="mt-4 text-sm">
              <span className="text-purple-500 font-medium">Forte</span> in tecnologia
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Posizionamento Strategico */}
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader><CardTitle>Posizionamento Strategico</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80">
              <PositioningChart />
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Funnel & SWOT */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader><CardTitle>Funnel di Acquisizione e Retention</CardTitle></CardHeader>
          <CardContent>
            {/* … inserisci qui il markup del funnel come prima … */}
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader><CardTitle>Analisi SWOT Comparativa</CardTitle></CardHeader>
          <CardContent>
            {/* … inserisci qui il markup SWOT come prima … */}
          </CardContent>
        </Card>
      </div>
      {/* Customer Experience Table */}
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader><CardTitle>Confronto dell'Esperienza Cliente</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                {/* … thead e tbody completi come nel tuo design originale … */}
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
