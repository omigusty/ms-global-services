import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full space-y-6">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#D7B459] hover:underline transition mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p>
          This Privacy Policy outlines how M S GLOBAL SERVICES LLC FZ
          (“Company”, “we”, “our”, or “us”) collects, uses, and protects your
          information.
        </p>

        <div>
          <h2 className="text-lg font-semibold">
            Information Collection and Use
          </h2>
          <p>
            We may collect personal information when you interact with our
            website or communicate with us. All information is provided
            voluntarily.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">No Liability Disclaimer</h2>
          <p>
            M S GLOBAL SERVICES LLC FZ will not be liable or responsible for any
            loss, disclosure, unauthorized access, alteration, or destruction of
            data, including but not limited to personal or financial
            information. By using our services, users acknowledge that they
            assume all risks related to data transmission and storage.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">No Legal Accountability</h2>
          <p>
            Under no circumstances will M S GLOBAL SERVICES LLC FZ, its
            affiliates, partners, employees, or agents be held accountable in a
            court of law or any legal proceeding for any damages, losses,
            liabilities, or claims arising from the use of this website or our
            services. Use of the website and our services is at the user’s sole
            risk.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Policy Changes</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time.
            Continued use of our website or services following any changes
            constitutes acceptance of those changes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <p>
            For privacy-related questions, contact:{" "}
            <a
              href="mailto:infoweb@msglobal-services.com"
              className="text-blue-600 hover:underline"
            >
              infoweb@msglobal-services.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
