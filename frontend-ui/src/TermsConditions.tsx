import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function TermsConditions() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar onLoginClick={() => {}} />
            
            <div className="max-w-4xl mx-auto px-6 py-12 mt-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
                
                <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h2>
                        <p className="text-gray-600">By using KabadiShop services, you agree to these terms and conditions. If you disagree, please discontinue use of our platform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">User Responsibilities</h2>
                        <p className="text-gray-600">Users must provide accurate information and ensure scrap materials are properly segregated and accessible during pickup.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Payment Terms</h2>
                        <p className="text-gray-600">Payments are processed after material verification. Final rates are determined based on actual weight and quality assessment.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cancellation Policy</h2>
                        <p className="text-gray-600">Pickup requests can be cancelled up to 2 hours before the scheduled time without penalty.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Modifications</h2>
                        <p className="text-gray-600">KabadiShop reserves the right to modify these terms at any time. Continued use constitutes acceptance of updated terms.</p>
                    </section>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
