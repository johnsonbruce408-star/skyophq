import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ContactForm from "./ContactForm";

interface ProtectedInvestorRouteProps {
  children: ReactNode;
}

export const ProtectedInvestorRoute = ({ children }: ProtectedInvestorRouteProps) => {
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has submitted the contact form
    const submitted = localStorage.getItem('skyline_contact_submitted');
    setHasSubmittedForm(submitted === 'true');
    setIsLoading(false);
  }, []);

  const handleFormSubmit = () => {
    setHasSubmittedForm(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!hasSubmittedForm) {
    return <ContactForm onFormSubmit={handleFormSubmit} />;
  }

  return <>{children}</>;
};