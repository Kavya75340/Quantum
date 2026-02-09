import React from "react";

const Accessibility = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-25">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Accessibility Commitment
                    </span>

                    <h1 className="text-4xl font-bold text-slate-900">
                        Accessibility Statement
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
                            Quantum Training is committed to ensuring digital
                            accessibility for all users, including persons with
                            disabilities. We continuously work to improve the
                            accessibility and usability of our website, digital
                            platforms, and training services, in line with
                            applicable Indian laws and accessibility standards.
                        </p>
                    </div>

                    {/* 1 */}
                    <section>
                        <h2 className="section-title">
                            1. Our Commitment to Accessibility
                        </h2>
                        <p className="text-slate-700 mb-2">
                            Quantum Training strives to provide equal access to
                            information, services, and learning opportunities
                            for all individuals, regardless of physical,
                            sensory, cognitive, or technological limitations.
                        </p>
                        <p className="text-slate-700">
                            Our goal is to ensure that our digital platforms are
                            inclusive, user-friendly, and accessible to
                            everyone.
                        </p>
                    </section>

                    {/* 2 */}
                    <section>
                        <h2 className="section-title">2. Legal Compliance</h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>
                                Rights of Persons with Disabilities Act, 2016
                                (RPwD Act)
                            </li>
                            <li>
                                Accessible India Campaign (Sugamya Bharat
                                Abhiyan)
                            </li>
                            <li>
                                Guidelines for Indian Government Websites
                                (GIGW), where applicable
                            </li>
                            <li>Information Technology Act, 2000</li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section>
                        <h2 className="section-title">
                            3. Accessibility Features
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>Keyboard navigation support</li>
                            <li>Screen reader compatibility</li>
                            <li>Clear and readable fonts and layouts</li>
                            <li>
                                Proper color contrast for text and backgrounds
                            </li>
                            <li>Descriptive headings and structured content</li>
                        </ul>
                        <p className="mt-3 text-slate-700">
                            Where feasible, training materials are designed to
                            be accessible and easy to use.
                        </p>
                    </section>

                    {/* 4 */}
                    <section>
                        <h2 className="section-title">
                            4. Limitations & Ongoing Improvements
                        </h2>
                        <p className="text-slate-700">
                            While we strive to ensure full accessibility, some
                            content or third-party tools may not yet be fully
                            accessible. We are actively working to identify and
                            address accessibility gaps as part of continuous
                            improvement.
                        </p>
                    </section>

                    {/* 5 */}
                    <section>
                        <h2 className="section-title">
                            5. Third-Party Content
                        </h2>
                        <p className="text-slate-700">
                            Our platforms may include third-party tools or
                            embedded content. While we encourage accessibility
                            compliance, Quantum Training does not control the
                            accessibility of external services.
                        </p>
                    </section>

                    {/* 6 */}
                    <section>
                        <h2 className="section-title">
                            6. Assistance & Reasonable Accommodation
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>
                                Providing information in alternative formats
                            </li>
                            <li>Assisting with navigation or content access</li>
                            <li>Promptly addressing accessibility concerns</li>
                        </ul>
                        <p className="mt-3 text-slate-700">
                            Requests for assistance can be made using the
                            contact details below.
                        </p>
                    </section>

                    {/* 7 */}
                    <section>
                        <h2 className="section-title">7. Feedback & Contact</h2>
                        <p className="text-slate-700 mb-3">
                            We welcome feedback on the accessibility of our
                            website and services. If you encounter any
                            accessibility barriers, please contact us:
                        </p>
                        <div className="text-slate-700 space-y-1">
                            <p className="font-semibold">Quantum Training</p>
                            <p>📧 Email: [Insert Official Email]</p>
                            <p>📞 Phone: [Insert Contact Number]</p>
                            <p>📍 Address: [Insert Office Address]</p>
                        </div>
                        <p className="mt-3 text-slate-700">
                            We aim to respond to accessibility-related requests
                            within a reasonable timeframe.
                        </p>
                    </section>

                    {/* 8 */}
                    <section>
                        <h2 className="section-title">
                            8. Updates to This Statement
                        </h2>
                        <p className="text-slate-700">
                            This Accessibility Statement may be updated
                            periodically to reflect improvements, legal changes,
                            or service updates. The revised version will be
                            posted on this page.
                        </p>
                    </section>

                    {/* 9 */}
                    <section>
                        <h2 className="section-title">9. Governing Law</h2>
                        <p className="text-slate-700">
                            This Accessibility Statement shall be governed by
                            and interpreted in accordance with the laws of
                            India.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Accessibility;
