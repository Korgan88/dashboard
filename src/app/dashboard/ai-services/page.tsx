"use client";

// Renderizza sempre lato-server, evitando HTML statico
export const dynamic = "force-dynamic";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import InsightDemo   from "@/components/ai/InsightDemo";
import MatcherDemo   from "@/components/ai/MatcherDemo";
import TrendDemo     from "@/components/ai/TrendDemo";
import AssistantDemo from "@/components/ai/AssistantDemo";

export default function AIServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Demo Servizi AI</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Insight AI */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Insight Fashion</CardTitle>
          </CardHeader>
          <CardContent>
            <InsightDemo />
          </CardContent>
        </Card>

        {/* Product Matcher */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Product&nbsp;Matcher</CardTitle>
          </CardHeader>
          <CardContent>
            <MatcherDemo />
          </CardContent>
        </Card>

        {/* Trend Generator */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Trend&nbsp;Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <TrendDemo />
          </CardContent>
        </Card>

        {/* Assistant AI */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Assistente&nbsp;AI</CardTitle>
          </CardHeader>
          <CardContent>
            <AssistantDemo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
