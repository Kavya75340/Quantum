import React from "react";

const RefundCancellation = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-25">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Refund Information
                    </span>

                    <h1 className="text-4xl font-bold text-slate-900">
                        Refund & Cancellation Policy
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
                            This Refund & Cancellation Policy outlines the terms
                            under which cancellations and refunds are handled
                            for services and training programs offered by
                            Quantum Training (“we”, “our”, “us”). By enrolling
                            in our courses or using our services, you agree to
                            this policy.
                        </p>
                    </div>

                    {/* 1 */}
                    <section>
                        <h2 className="section-title">
                            1. Course Enrollment & Fees
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>
                                All course fees and charges are communicated at
                                enrollment
                            </li>
                            <li>
                                Enrollment is confirmed only after successful
                                payment
                            </li>
                            <li>
                                Users should review course details carefully
                                before paying
                            </li>
                        </ul>
                    </section>

                    {/* 2 */}
                    <section>
                        <h2 className="section-title">
                            2. Cancellation by the User
                        </h2>

                        <h3 className="sub-title">
                            a) Before Course Commencement
                        </h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>
                                Cancellation requests must be submitted in
                                writing via email
                            </li>
                            <li>
                                Refunds may be processed after deducting
                                applicable administrative charges
                            </li>
                        </ul>

                        <h3 className="sub-title mt-6">
                            b) After Course Commencement
                        </h3>
                        <p className="text-slate-700">
                            Once the course has started, cancellation requests
                            will not be accepted unless explicitly stated
                            otherwise in writing.
                        </p>
                    </section>

                    {/* 3 */}
                    <section>
                        <h2 className="section-title">3. Refund Policy</h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>
                                Fees once paid are non-refundable except as
                                stated in this policy or required by law
                            </li>
                            <li>
                                Approved refunds will be processed through the
                                original payment method
                            </li>
                            <li>
                                Refund processing may take 7–14 working days
                            </li>
                        </ul>
                    </section>

                    {/* 4 */}
                    <section>
                        <h2 className="section-title">
                            4. Non-Refundable Situations
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>Change of mind after enrollment</li>
                            <li>Partial completion of a course</li>
                            <li>Non-attendance of classes or sessions</li>
                            <li>User-side technical or internet issues</li>
                            <li>Failure to meet course requirements</li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section>
                        <h2 className="section-title">
                            5. Cancellation or Rescheduling by Quantum Training
                        </h2>
                        <p className="text-slate-700 mb-2">
                            Quantum Training may cancel or reschedule courses
                            due to unforeseen circumstances, minimum enrollment
                            requirements, or operational reasons.
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>Full refund may be offered, or</li>
                            <li>
                                Option to reschedule or transfer enrollment to
                                another batch
                            </li>
                        </ul>
                    </section>

                    {/* 6 */}
                    <section>
                        <h2 className="section-title">
                            6. Refunds for Duplicate or Excess Payments
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>
                                Users must notify us with valid transaction
                                proof
                            </li>
                            <li>
                                Refunds will be processed after verification
                            </li>
                        </ul>
                    </section>

                    {/* 7 */}
                    <section>
                        <h2 className="section-title">
                            7. Certificate & Digital Content Policy
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                            <li>
                                Access to digital content and recorded sessions
                                is non-refundable
                            </li>
                            <li>
                                Certificates are issued only after successful
                                course completion
                            </li>
                        </ul>
                    </section>

                    {/* 8 */}
                    <section>
                        <h2 className="section-title">8. Force Majeure</h2>
                        <p className="text-slate-700">
                            Quantum Training shall not be liable for refunds or
                            cancellations caused by events beyond reasonable
                            control, including natural disasters, government
                            actions, or technical failures.
                        </p>
                    </section>

                    {/* 9 */}
                    <section>
                        <h2 className="section-title">9. Consumer Rights</h2>
                        <p className="text-slate-700">
                            This policy complies with the Consumer Protection
                            Act, 2019 and does not limit consumer rights under
                            applicable Indian law.
                        </p>
                    </section>

                    {/* 10 */}
                    <section>
                        <h2 className="section-title">
                            10. Amendments to Policy
                        </h2>
                        <p className="text-slate-700">
                            Quantum Training reserves the right to update this
                            policy at any time. Changes are effective
                            immediately upon publication.
                        </p>
                    </section>

                    {/* 11 */}
                    <section>
                        <h2 className="section-title">
                            11. Governing Law & Jurisdiction
                        </h2>
                        <p className="text-slate-700">
                            This policy is governed by the laws of India. All
                            disputes shall be subject to the exclusive
                            jurisdiction of the courts of [Insert City, India].
                        </p>
                    </section>

                    {/* 12 */}
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

export default RefundCancellation;
