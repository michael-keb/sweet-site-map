import Navigation from "@/components/Navigation";
import { ApplyForm } from "@/components/ApplyForm";

const ApplyFormPage = () => (
  <div className="h-dvh bg-background flex flex-col overflow-hidden">
    <Navigation />
    <main className="flex-1 min-h-0 px-4 md:px-8 py-4">
      <div className="h-full max-w-4xl mx-auto min-h-0">
        <ApplyForm />
      </div>
    </main>
  </div>
);

export default ApplyFormPage;
