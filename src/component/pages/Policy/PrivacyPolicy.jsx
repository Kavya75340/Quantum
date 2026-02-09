import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-25">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Legal Information
                    </span>

                    <h1 className="text-4xl font-bold text-slate-900">
                        Privacy Policy
                    </h1>

                    <p className="mt-2 text-slate-600">Quantum Training</p>

                    <p className="mt-1 text-sm text-slate-500">
                        Last updated:{" "}
                        <span className="font-medium">[Add Date]</span>
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 space-y-10">
                    {/* Intro */}
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                        <p>
                            Quantum Training (“we”, “our”, “us”) is committed to
                            protecting your privacy and ensuring the security of
                            your personal information. This Privacy Policy
                            explains how we collect, use, store, disclose, and
                            protect information when you visit our website,
                            enroll in our programs, or use our services.
                        </p>

                        <p>
                            By accessing or using our website or services, you
                            agree to the terms of this Privacy Policy.
                        </p>
                    </div>

                    {/* Section */}
                    <section>
                        <h2 className="section-title">
                            1. Information We Collect
                        </h2>

                        <h3 className="sub-title">a) Personal Information</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Educational or professional details</li>
                            <li>Company or organization name</li>
                            <li>
                                Information submitted via forms or inquiries
                            </li>
                        </ul>

                        <h3 className="sub-title mt-6">
                            b) Sensitive Personal Data
                        </h3>
                        <p className="text-slate-700">
                            We do not intentionally collect sensitive personal
                            data such as financial information, biometric data,
                            or government-issued identification unless legally
                            required.
                        </p>

                        <h3 className="sub-title mt-6">
                            c) Non-Personal Information
                        </h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>Browser type</li>
                            <li>IP address</li>
                            <li>Device information</li>
                            <li>Pages visited and time spent</li>
                            <li>Cookies and usage data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="section-title">
                            2. Purpose of Information Collection
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>Deliver and manage training programs</li>
                            <li>Respond to inquiries and support requests</li>
                            <li>Process registrations</li>
                            <li>Improve website performance and content</li>
                            <li>Meet legal and regulatory obligations</li>
                            <li>Send updates or promotions (with consent)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="section-title">
                            3. Cookies & Tracking Technologies
                        </h2>
                        <p className="text-slate-700">
                            We use cookies to enhance website functionality,
                            analyze traffic, and improve user experience.
                            Disabling cookies may impact certain features.
                        </p>
                    </section>

                    <section>
                        <h2 className="section-title">
                            4. Disclosure of Information
                        </h2>
                        <p className="text-slate-700">
                            Quantum Training does not sell or rent personal
                            information. Data may be shared with trusted
                            partners, legal authorities, or to protect rights
                            and safety.
                        </p>
                    </section>

                    <section>
                        <h2 className="section-title">5. Data Security</h2>
                        <p className="text-slate-700">
                            We follow reasonable security practices under Indian
                            law to protect your data. However, no online system
                            is completely secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="section-title">6. Data Retention</h2>
                        <p className="text-slate-700">
                            Information is retained only as long as necessary or
                            required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="section-title">7. Your Rights</h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>Access your personal information</li>
                            <li>Request correction of data</li>
                            <li>Withdraw consent</li>
                            <li>Request deletion (as legally permitted)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="section-title">8. Third-Party Links</h2>
                        <p className="text-slate-700">
                            We are not responsible for privacy practices of
                            third-party websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="section-title">9. Children’s Privacy</h2>
                        <p className="text-slate-700">
                            Our services are not intended for individuals below
                            18 years of age.
                        </p>
                    </section>

                    <section>
                        <h2 className="section-title">
                            10. Compliance with Indian Law
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>Information Technology Act, 2000</li>
                            <li>IT Rules, 2011</li>
                            <li>Digital Personal Data Protection Act, 2023</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="section-title">
                            11. Changes to This Policy
                        </h2>
                        <p className="text-slate-700">
                            This policy may be updated periodically. Continued
                            use of our services implies acceptance of updates.
                        </p>
                    </section>

                    <section>
                        <h2 className="section-title">
                            12. Contact Information
                        </h2>
                        <div className="text-slate-700 space-y-1">
                            <p className="font-semibold">Quantum Training</p>
                            <p> Email: [Insert Official Email]</p>
                            <p> Phone: [Insert Contact Number]</p>
                            <p> Address: [Insert Office Address]</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
