import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { SimpleNavigation } from "@/components/SimpleNavigation";

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))'];

const InvestorDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const managementFeeData = [
    { name: 'GP Draw', value: 65, color: COLORS[0] },
    { name: 'PM', value: 15, color: COLORS[1] },
    { name: 'EA', value: 10, color: COLORS[2] },
    { name: 'Accountant', value: 50, color: COLORS[3] }
  ];

  const allocationData = [
    { name: 'Multi-Business', value: 3750000, percentage: 75 },
    { name: 'Late-Stage/Pre-IPO', value: 750000, percentage: 15 },
    { name: 'Operational Budget', value: 950000, percentage: 19 },
    { name: 'Reserve', value: 500000, percentage: 10 }
  ];

  const quarterlyDeployment = [
    { quarter: 'Q1', deployed: 1250000, reserve: 4750000 },
    { quarter: 'Q2', deployed: 2500000, reserve: 3500000 },
    { quarter: 'Q3', deployed: 3750000, reserve: 2250000 },
    { quarter: 'Q4', deployed: 5000000, reserve: 500000 }
  ];

  const slides = [
    // Slide 1 - Cover
    {
      title: "Skyline Prime Limited Partnership",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skyline Prime Limited Partnership
            </h1>
            <p className="text-2xl text-muted-foreground">
              "8% Preferred Return + 80/20 Split After Hurdle"
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              GP: Skyline Operator Group, LLC | Fund Manager: Bruce L. Johnson Jr.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg">Fund Size</h3>
                <p className="text-3xl font-bold text-primary">$5M</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg">Term</h3>
                <p className="text-3xl font-bold text-primary">10 Years</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg">Target</h3>
                <p className="text-3xl font-bold text-primary">Accredited Investors</p>
              </CardContent>
            </Card>
          </div>
          <Badge variant="destructive" className="text-lg px-6 py-2">
            Confidential – For Accredited Investors Only
          </Badge>
        </div>
      )
    },
    // Slide 2 - Executive Summary
    {
      title: "Executive Summary",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Fund Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>Fund Size:</strong> $5M initial close</li>
                    <li><strong>Term:</strong> 10 years</li>
                    <li><strong>Investment Focus:</strong> Multi-business acquisitions + late-stage/pre-IPO positions</li>
                    <li><strong>GP:</strong> Skyline Operator Group, LLC</li>
                    <li><strong>Fund Manager:</strong> Bruce L. Johnson Jr.</li>
                    <li><strong>Min Investment:</strong> $100,000</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">4-5</p>
                      <p className="text-sm text-muted-foreground">Business Acquisitions</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">$750K</p>
                      <p className="text-sm text-muted-foreground">Late-Stage Allocation</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">2%</p>
                      <p className="text-sm text-muted-foreground">Management Fee</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">20%</p>
                      <p className="text-sm text-muted-foreground">GP Carry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3 - Investment Strategy
    {
      title: "Investment Strategy",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Multi-Business Acquisitions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• 4–5 small to medium companies</li>
                  <li>• Phased quarterly capital deployment</li>
                  <li>• Optional fractional operators</li>
                  <li>• Focus on cash-flowing businesses</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Late-Stage Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• ~$750k allocation</li>
                  <li>• Pre-IPO positions</li>
                  <li>• High upside equity potential</li>
                  <li>• Growth opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Investment Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-primary font-bold">Multi</span>
                  </div>
                  <p className="text-sm">Multi-Business</p>
                </div>
                <div className="text-2xl text-muted-foreground">→</div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-secondary font-bold">Cash</span>
                  </div>
                  <p className="text-sm">Cash Flow</p>
                </div>
                <div className="text-2xl text-muted-foreground">→</div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-accent font-bold">Exit</span>
                  </div>
                  <p className="text-sm">Exit Strategy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    // Slide 4 - Management Team
    {
      title: "Management Team",
      content: (
        <div className="space-y-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Allocation</TableHead>
                <TableHead>Responsibilities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">GP</TableCell>
                <TableCell>Full-time</TableCell>
                <TableCell>Oversight, capital deployment, exit planning, LP communications</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">PM</TableCell>
                <TableCell>Fractional</TableCell>
                <TableCell>KPI dashboards, operator oversight, reporting</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EA</TableCell>
                <TableCell>Fractional</TableCell>
                <TableCell>Admin & LP communications</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Accountant</TableCell>
                <TableCell>Full-time / Outsourced</TableCell>
                <TableCell>Financial consolidation & compliance</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Operators</TableCell>
                <TableCell>As needed</TableCell>
                <TableCell>Day-to-day business management</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )
    },
    // Slide 5 - Management Fees & GP Compensation
    {
      title: "Management Fees & GP Compensation",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><strong>Management Fee:</strong> 2% annual → $100k/year</li>
                  <li><strong>GP Draw:</strong> From management fee</li>
                  <li><strong>PM/BA:</strong> $15k/year</li>
                  <li><strong>Accountant:</strong> $50k/year</li>
                  <li><strong>EA:</strong> Excluded (GP fee)</li>
                  <li><strong>Carry:</strong> 20% above hurdle</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Management Fee Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={managementFeeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: $${value}k`}
                    >
                      {managementFeeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value}k`} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Slide 6 - Capital Allocation
    {
      title: "Capital Allocation (Static $5M Fund)",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Allocation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Multi-business acquisitions</TableCell>
                  <TableCell>$3,750,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Late-stage/pre-IPO</TableCell>
                  <TableCell>$750,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Operational budget</TableCell>
                  <TableCell>$950,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reserve</TableCell>
                  <TableCell>$500,000</TableCell>
                </TableRow>
                <TableRow className="font-bold">
                  <TableCell>Total</TableCell>
                  <TableCell>$5,000,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={allocationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                <Tooltip formatter={(value) => `$${(value as number).toLocaleString()}`} />
                <Bar dataKey="value" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )
    },
    // Slide 7 - Quarterly Capital Deployment
    {
      title: "Quarterly Capital Deployment",
      content: (
        <div className="space-y-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={quarterlyDeployment}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => `$${(value as number).toLocaleString()}`} />
              <Line type="monotone" dataKey="deployed" stroke="hsl(var(--primary))" strokeWidth={3} name="Deployed Capital" />
              <Line type="monotone" dataKey="reserve" stroke="hsl(var(--secondary))" strokeWidth={3} name="Reserve" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )
    },
    // Slide 8 - Risk Factors
    {
      title: "Risk Factors",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Business Performance Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Acquired businesses may underperform expectations, affecting cash flows and returns.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Market & Operational Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Economic downturns and operational challenges may impact business valuations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Late-Stage Investment Illiquidity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Pre-IPO investments may face extended holding periods with limited liquidity options.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Regulatory Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Changes in regulations may affect investment strategies and business operations.</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    // Slide 9 - Distribution Waterfall
    {
      title: "Distribution Waterfall",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="space-y-4 w-full max-w-2xl">
              <div className="bg-primary/20 p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg">1. Return of Capital</h3>
                <p>LPs receive 100% of their invested capital first</p>
              </div>
              <div className="text-2xl text-center text-muted-foreground">↓</div>
              <div className="bg-secondary/20 p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg">2. 8% Preferred Return</h3>
                <p>LPs receive 8% per annum cumulative, non-compounded</p>
              </div>
              <div className="text-2xl text-center text-muted-foreground">↓</div>
              <div className="bg-accent/20 p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg">3. Catch-Up & 80/20 Split</h3>
                <p>GP catch-up, then 80% LP / 20% GP on remaining profits</p>
              </div>
              <div className="text-2xl text-center text-muted-foreground">↓</div>
              <div className="bg-muted/20 p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg">4. Investment Requirements</h3>
                <p>Minimum Investment: $100,000 per investor</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 10 - Growable / Rolling Add-On Overview
    {
      title: "Growable / Rolling Add-On Overview",
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Rolling LP Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Optional for existing LPs or approved new LPs</li>
                <li>• New capital allocated to: remaining acquisition pipeline, late-stage opportunities, reserve</li>
                <li>• GP, PM, EA, Accountant allocations scale proportionally</li>
                <li>• Carry: 20% for new contributions</li>
              </ul>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Original Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold">$5M</p>
                  <p className="text-muted-foreground">Fixed allocation</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-secondary">Rolling Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold">Variable</p>
                  <p className="text-muted-foreground">Scalable structure</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <SimpleNavigation />
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/unified-portal")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Onboarding
          </Button>
          <Badge variant="outline">
            Slide {currentSlide + 1} of {slides.length}
          </Badge>
        </div>

        {/* Slide Content */}
        <Card className="min-h-[500px]">
          <CardHeader className="text-center border-b">
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                size="sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <CardTitle className="text-3xl font-bold">
                {slides[currentSlide].title}
              </CardTitle>
              <Button
                variant="ghost"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                size="sm"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {slides[currentSlide].content}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button onClick={prevSlide} disabled={currentSlide === 0} variant="outline">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Slide Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="text-center mt-8">
          <Badge variant="destructive">
            Confidential – For Accredited Investors Only
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default InvestorDeck;