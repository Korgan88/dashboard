import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GenerationalDistributionChart } from "@/components/dashboard/charts";

export default function DemographicsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Demografia</h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Gen Z</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22%</div>
            <p className="text-xs text-gray-400">
              Quota acquisti luxury
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 28.3%</span> crescita annuale
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Millennials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38%</div>
            <p className="text-xs text-gray-400">
              Quota acquisti luxury
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 19.7%</span> crescita annuale
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Gen X</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25%</div>
            <p className="text-xs text-gray-400">
              Quota acquisti luxury
            </p>
            <div className="mt-4 text-sm">
              <span className="text-green-500 font-medium">↗ 12.5%</span> crescita annuale
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Boomers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
            <p className="text-xs text-gray-400">
              Quota acquisti luxury
            </p>
            <div className="mt-4 text-sm">
              <span className="text-red-500 font-medium">↘ 3.2%</span> decrescita annuale
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Distribuzione Generazionale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <GenerationalDistributionChart />
            </div>
          </CardContent>
        </Card>
        
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Canali Preferiti per Generazione</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Gen Z</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <span className="text-xs">75% Mobile</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  <span className="text-xs">20% Desktop</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                  <span className="text-xs">5% In-store</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Millennials</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: "55%" }}></div>
                  </div>
                  <span className="text-xs">55% Mobile</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  <span className="text-xs">30% Desktop</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  <span className="text-xs">15% In-store</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Gen X</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                  <span className="text-xs">35% Mobile</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  <span className="text-xs">40% Desktop</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <span className="text-xs">25% In-store</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Boomers</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  <span className="text-xs">15% Mobile</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                  <span className="text-xs">35% Desktop</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <span className="text-xs">50% In-store</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Comportamento d'Acquisto per Segmento Demografico</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4">Segmento</th>
                    <th className="text-left py-3 px-4">Frequenza Acquisti</th>
                    <th className="text-left py-3 px-4">Ticket Medio</th>
                    <th className="text-left py-3 px-4">Preferenze</th>
                    <th className="text-left py-3 px-4">Sensibilità Sostenibilità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Gen Z</td>
                    <td className="py-3 px-4">4.2 acquisti/anno</td>
                    <td className="py-3 px-4">CHF 850</td>
                    <td className="py-3 px-4">Streetwear, Limited Edition</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span>Alta</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Millennials</td>
                    <td className="py-3 px-4">5.8 acquisti/anno</td>
                    <td className="py-3 px-4">CHF 1,250</td>
                    <td className="py-3 px-4">Contemporary, Accessori</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <span>Alta</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Gen X</td>
                    <td className="py-3 px-4">3.5 acquisti/anno</td>
                    <td className="py-3 px-4">CHF 2,100</td>
                    <td className="py-3 px-4">Classico, Orologi</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                        </div>
                        <span>Media</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Boomers</td>
                    <td className="py-3 px-4">2.2 acquisti/anno</td>
                    <td className="py-3 px-4">CHF 3,500</td>
                    <td className="py-3 px-4">Heritage, Gioielli</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2.5 mr-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                        <span>Bassa</span>
                      </div>
                    </td>
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
