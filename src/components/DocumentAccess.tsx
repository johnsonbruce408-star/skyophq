import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { DocumentUpload } from './DocumentUpload';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
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
  file_size: number;
  file_path: string;
  updated_at: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function DocumentAccess() {
  const [isAccredited, setIsAccredited] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const { user } = useAuth();

  // Check user role
  const checkUserRole = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      setUserRole(data?.role || 'user');
    } catch (error) {
      console.error('Error checking user role:', error);
    }
  };

  // Get icon for document category
  const getDocumentIcon = (category: string) => {
    switch (category) {
      case 'legal': return Shield;
      case 'financial': return BarChart3;
      case 'performance': return TrendingUp;
      case 'subscription': return DollarSign;
      default: return FileText;
    }
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Load documents from database
  const loadDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedDocs: Document[] = (data || []).map(doc => ({
        id: doc.id,
        title: doc.title,
        description: doc.description || '',
        type: doc.document_type as 'restricted' | 'public',
        category: doc.category as 'legal' | 'financial' | 'performance' | 'subscription',
        file_size: doc.file_size,
        file_path: doc.file_path,
        updated_at: doc.updated_at,
        icon: getDocumentIcon(doc.category)
      }));

      setDocuments(formattedDocs);
    } catch (error: any) {
      console.error('Error loading documents:', error);
      toast.error('Failed to load documents');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
    checkUserRole();
  }, [user]);

  const handleDownload = async (document: Document) => {
    if (document.type === 'restricted' && !isAccredited) {
      toast.error('Access restricted to accredited investors only');
      return;
    }

    setDownloading(document.id);
    try {
      const { data, error } = await supabase.storage
        .from('client-documents')
        .download(document.file_path);

      if (error) throw error;

      // Create download link
      const url = URL.createObjectURL(data);
      const a = window.document.createElement('a');
      a.href = url;
      a.download = document.title;
      window.document.body.appendChild(a);
      a.click();
      window.document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success(`Downloaded ${document.title}`);
    } catch (error: any) {
      console.error('Download error:', error);
      toast.error(`Download failed: ${error.message}`);
    } finally {
      setDownloading(null);
    }
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
                    Updated {new Date(document.updated_at).toLocaleDateString()}
                  </span>
                  <span>{formatFileSize(document.file_size)}</span>
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
            <div className="flex items-center gap-2">
              {userRole === 'admin' && (
                <DocumentUpload onUploadSuccess={loadDocuments} />
              )}
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