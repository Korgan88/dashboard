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
          <CardHeader>
            <CardTitle>LUXAI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.9/10</div>
            <p className="text-xs text-gray-400">Punteggio complessivo</p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">Leader</span> in innovazione
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Competitor A</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.0/10</div>
            <p className="text-xs text-gray-400">Punteggio complessivo</p>
            <div className="mt-4 text-sm">
              <span className="text-yellow-500 font-medium">Medio</span> in innovazione
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Competitor B</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2/10</div>
            <p className="text-xs text-gray-400">Punteggio complessivo</p>
            <div className="mt-4 text-sm">
              <span className="text-blue-500 font-medium">Forte</span> in UX
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Competitor C</CardTitle>
          </CardHeader>
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
          <CardHeader>
            <CardTitle>Posizionamento Strategico</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <PositioningChart />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Funnel di Acquisizione e Retention */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Funnel di Acquisizione e Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* LUXAI */}
              <div>
                <h4 className="text-sm font-medium mb-2">LUXAI</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <span className="text-xs">100% Visite</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                  <span className="text-xs">42% Registrazioni</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                  <span className="text-xs">28% Acquisti</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "18%" }}></div>
                  </div
