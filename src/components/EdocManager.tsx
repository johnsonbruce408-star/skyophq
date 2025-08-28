import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { DocumentUpload } from "@/components/DocumentUpload";
import { DocumentAccess } from "@/components/DocumentAccess";
import { 
  FileText, 
  Upload, 
  Download, 
  PenTool, 
  CheckCircle, 
  Clock,
  AlertCircle,
  Shield
} from "lucide-react";

interface EdocItem {
  id: string;
  title: string;
  type: 'subscription' | 'legal' | 'financial' | 'performance';
  status: 'pending' | 'signed' | 'executed' | 'requires_signature';
  lastUpdated: string;
  signatories?: string[];
  description: string;
}

export function EdocManager() {
  const { user } = useAuth();
  const [userRole] = useState('admin'); // This would come from your auth system
  
  const isOperationsUser = userRole === 'admin' || userRole === 'operations_director' || userRole === 'lp';

  const mockEdocs: EdocItem[] = [
    {
      id: '1',
      title: 'Limited Partnership Agreement',
      type: 'legal',
      status: 'requires_signature',
      lastUpdated: '2024-01-15',
      signatories: ['General Partner', 'Limited Partners'],
      description: 'Primary partnership agreement outlining terms and conditions'
    },
    {
      id: '2',
      title: 'Subscription Documents',
      type: 'subscription',
      status: 'pending',
      lastUpdated: '2024-01-14',
      signatories: ['Investor', 'Fund Administrator'],
      description: 'Investment subscription and commitment documentation'
    },
    {
      id: '3',
      title: 'Quarterly Performance Report Q4 2024',
      type: 'performance',
      status: 'signed',
      lastUpdated: '2024-01-10',
      description: 'Detailed performance metrics and portfolio analysis'
    },
    {
      id: '4',
      title: 'Capital Call Notice #3',
      type: 'financial',
      status: 'executed',
      lastUpdated: '2024-01-08',
      signatories: ['General Partner'],
      description: 'Notice for third capital call of $2.5M'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'signed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'executed':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case 'requires_signature':
        return <PenTool className="h-4 w-4 text-orange-600" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      'signed': 'default',
      'executed': 'secondary',
      'requires_signature': 'destructive',
      'pending': 'outline'
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'outline'} className="text-xs">
        {status.replace('_', ' ').toUpperCase()}
      </Badge>
    );
  };

  const handleSign = (docId: string) => {
    console.log('Signing document:', docId);
    // Implement actual signing logic here
  };

  const handleDownload = (docId: string) => {
    console.log('Downloading document:', docId);
    // Implement actual download logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Electronic Documents</h2>
          <p className="text-muted-foreground">Manage, sign, and track investment documents</p>
        </div>
        {isOperationsUser && (
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <Badge variant="secondary">Operations Access</Badge>
          </div>
        )}
      </div>

      <Tabs defaultValue="documents" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="documents">My Documents</TabsTrigger>
          <TabsTrigger value="library">Document Library</TabsTrigger>
          {isOperationsUser && <TabsTrigger value="upload">Upload Documents</TabsTrigger>}
        </TabsList>

        <TabsContent value="documents" className="space-y-4">
          <div className="grid gap-4">
            {mockEdocs.map((doc) => (
              <Card key={doc.id} className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg text-foreground">{doc.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(doc.status)}
                      {getStatusBadge(doc.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">
                        Last updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                      </p>
                      {doc.signatories && (
                        <p className="text-xs text-muted-foreground">
                          Signatories: {doc.signatories.join(', ')}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(doc.id)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                      {doc.status === 'requires_signature' && (
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleSign(doc.id)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <PenTool className="h-4 w-4 mr-1" />
                          Sign
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {mockEdocs.filter(doc => doc.status === 'requires_signature').length > 0 && (
            <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-orange-800 dark:text-orange-200">
                    Action Required
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  You have {mockEdocs.filter(doc => doc.status === 'requires_signature').length} documents 
                  that require your signature. Please review and sign them to complete your investment process.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="library">
          <DocumentAccess />
        </TabsContent>

        {isOperationsUser && (
          <TabsContent value="upload">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Upload className="h-5 w-5" />
                  Upload New Documents
                </CardTitle>
                <p className="text-muted-foreground">
                  Upload investment documents for investors to access and sign
                </p>
              </CardHeader>
              <CardContent>
                <DocumentUpload onUploadSuccess={() => {
                  console.log('Document uploaded successfully');
                }} />
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}