import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { 
  FileText, 
  Download, 
  Lock, 
  Shield, 
  Calendar,
  DollarSign,
  TrendingUp,
  BarChart3
} from 'lucide-react';

interface Document {
  id: string;
  title: string;
  description: string;
  type: 'restricted' | 'public';
  category: 'legal' | 'financial' | 'performance' | 'subscription';
  fileSize: string;
  lastUpdated: string;
  icon: React.ComponentType<{ className?: string }>;
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Private Placement Memorandum (PPM)',
    description: 'Comprehensive investment overview and risk disclosures',
    type: 'restricted',
    category: 'legal',
    fileSize: '2.4 MB',
    lastUpdated: '2024-01-15',
    icon: Shield,
  },
  {
    id: '2',
    title: 'Limited Partnership Agreement',
    description: 'Legal structure and terms of the investment partnership',
    type: 'restricted',
    category: 'legal',
    fileSize: '1.8 MB',
    lastUpdated: '2024-01-10',
    icon: FileText,
  },
  {
    id: '3',
    title: 'Subscription Documents',
    description: 'Required forms for investment participation',
    type: 'restricted',
    category: 'subscription',
    fileSize: '0.9 MB',
    lastUpdated: '2024-01-20',
    icon: DollarSign,
  },
  {
    id: '4',
    title: 'Q4 2023 Financial Statements',
    description: 'Quarterly financial performance and fund NAV',
    type: 'restricted',
    category: 'financial',
    fileSize: '3.2 MB',
    lastUpdated: '2024-01-25',
    icon: BarChart3,
  },
  {
    id: '5',
    title: 'Performance Data Dashboard',
    description: 'Interactive portfolio performance metrics',
    type: 'restricted',
    category: 'performance',
    fileSize: '1.5 MB',
    lastUpdated: '2024-01-28',
    icon: TrendingUp,
  },
  {
    id: '6',
    title: 'Fund Overview',
    description: 'General information about investment strategy',
    type: 'public',
    category: 'legal',
    fileSize: '0.7 MB',
    lastUpdated: '2024-01-05',
    icon: FileText,
  },
];

export function DocumentAccess() {
  const [isAccredited, setIsAccredited] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (document: Document) => {
    if (document.type === 'restricted' && !isAccredited) {
      toast.error('Access restricted to accredited investors only');
      return;
    }

    setDownloading(document.id);
    // Simulate download delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success(`Downloaded ${document.title}`);
    setDownloading(null);
  };

  const handleVerifyAccreditation = () => {
    setIsAccredited(true);
    toast.success('Accreditation verified! You now have access to all documents.');
  };

  const categorizeDocuments = () => {
    const categories = {
      legal: documents.filter(doc => doc.category === 'legal'),
      financial: documents.filter(doc => doc.category === 'financial'),
      performance: documents.filter(doc => doc.category === 'performance'),
      subscription: documents.filter(doc => doc.category === 'subscription'),
    };
    return categories;
  };

  const categories = categorizeDocuments();

  const DocumentCard = ({ document }: { document: Document }) => {
    const IconComponent = document.icon;
    const isRestricted = document.type === 'restricted' && !isAccredited;

    return (
      <Card className={`transition-all duration-300 hover:shadow-lg ${isRestricted ? 'opacity-60' : ''}`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
              isRestricted ? 'bg-muted' : 'bg-primary/10'
            }`}>
              {isRestricted ? (
                <Lock className="h-6 w-6 text-muted-foreground" />
              ) : (
                <IconComponent className="h-6 w-6 text-primary" />
              )}
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">{document.title}</h3>
                  <Badge 
                    variant={document.type === 'restricted' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {document.type === 'restricted' ? 'Restricted' : 'Public'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {document.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Updated {new Date(document.lastUpdated).toLocaleDateString()}
                  </span>
                  <span>{document.fileSize}</span>
                </div>
              </div>
              <Button
                onClick={() => handleDownload(document)}
                disabled={isRestricted || downloading === document.id}
                size="sm"
                variant={isRestricted ? "outline" : "default"}
                className="w-full gap-2"
              >
                {downloading === document.id ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                    Downloading...
                  </>
                ) : isRestricted ? (
                  <>
                    <Lock className="h-4 w-4" />
                    Verification Required
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Investment Documents</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Access your private investment documents and reports
                </p>
              </div>
            </div>
            {!isAccredited && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Shield className="h-4 w-4" />
                    Verify Accreditation
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Accredited Investor Verification</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      To access restricted documents, you must verify your status as an accredited investor.
                      This includes individuals with:
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                      <li>Net worth exceeding $1 million (excluding primary residence)</li>
                      <li>Annual income exceeding $200,000 ($300,000 joint) for the last 2 years</li>
                      <li>Professional certifications (Series 7, 65, 82)</li>
                    </ul>
                    <Button onClick={handleVerifyAccreditation} className="w-full">
                      I Confirm My Accredited Status
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
          {isAccredited && (
            <Badge variant="secondary" className="w-fit bg-green-500/10 text-green-600 border-green-500/20">
              <Shield className="h-3 w-3 mr-1" />
              Accredited Investor Verified
            </Badge>
          )}
        </CardHeader>
      </Card>

      {/* Document Categories */}
      <div className="space-y-8">
        {/* Legal Documents */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal Documents</h3>
          <div className="grid gap-4">
            {categories.legal.map(doc => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </div>

        {/* Financial Documents */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Financial Statements</h3>
          <div className="grid gap-4">
            {categories.financial.map(doc => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </div>

        {/* Performance Data */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Performance Data</h3>
          <div className="grid gap-4">
            {categories.performance.map(doc => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </div>

        {/* Subscription Documents */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscription Documents</h3>
          <div className="grid gap-4">
            {categories.subscription.map(doc => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}