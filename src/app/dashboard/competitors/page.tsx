import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PositioningChart } from "@/components/dashboard/charts";

export default function CompetitorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Benchmarking Competitor</h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>LUXAI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.9/10</div>
            <p className="text-xs text-gray-400">
              Punteggio complessivo
            </p>
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
            <p className="text-xs text-gray-400">
              Punteggio complessivo
            </p>
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
            <p className="text-xs text-gray-400">
              Punteggio complessivo
            </p>
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
            <p className="text-xs text-gray-400">
              Punteggio complessivo
            </p>
            <div className="mt-4 text-sm">
              <span className="text-purple-500 font-medium">Forte</span> in tecnologia
            </div>
          </CardContent>
        </Card>
      </div>
      
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
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Funnel di Acquisizione e Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
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
                  </div>
                  <span className="text-xs">18% Clienti Ricorrenti</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Media Competitor</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                  <span className="text-xs">100% Visite</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  <span className="text-xs">30% Registrazioni</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  <span className="text-xs">15% Acquisti</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "8%" }}></div>
                  </div>
                  <span className="text-xs">8% Clienti Ricorrenti</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Analisi SWOT Comparativa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-blue-900/20 border border-blue-800 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2">Punti di Forza</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• Tecnologia AI proprietaria</li>
                  <li>• Esperienza utente superiore</li>
                  <li>• Partnership con boutique esclusive</li>
                  <li>• Autenticazione blockchain</li>
                </ul>
              </div>
              
              <div className="p-3 bg-yellow-900/20 border border-yellow-800 rounded-lg">
                <h4 className="font-medium text-yellow-400 mb-2">Punti di Debolezza</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• Brand awareness iniziale</li>
                  <li>• Copertura geografica limitata</li>
                  <li>• Risorse finanziarie iniziali</li>
                </ul>
              </div>
              
              <div className="p-3 bg-green-900/20 border border-green-800 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2">Opportunità</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• Mercato in rapida crescita</li>
                  <li>• Domanda di autenticità</li>
                  <li>• Espansione internazionale</li>
                  <li>• Nuovi segmenti di mercato</li>
                </ul>
              </div>
              
              <div className="p-3 bg-red-900/20 border border-red-800 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">Minacce</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• Nuovi entranti nel mercato</li>
                  <li>• Evoluzione rapida tecnologia</li>
                  <li>• Cambiamenti regolamentari</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Confronto dell'Esperienza Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4">Aspetto</th>
                    <th className="text-left py-3 px-4">LUXAI</th>
                    <th className="text-left py-3 px-4">Competitor A</th>
                    <th className="text-left py-3 px-4">Competitor B</th>
                    <th className="text-left py-3 px-4">Competitor C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Personalizzazione</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                        <span>9.0/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span>6.5/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                        <span>8.0/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <span>7.0/10</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Facilità d'uso</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                        <span>9.5/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <span>7.5/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span>8.5/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <span>7.0/10</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Autenticazione</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        <span>10.0/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <span>6.0/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <span>7.0/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span>8.5/10</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Servizi AI</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                        <span>9.5/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                        </div>
                        <span>5.0/10</span>
                      </div>
                    </td>
                    <td className="py-3 p
(Content truncated due to size limit. Use line ranges to read in chunks)