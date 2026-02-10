import { useState } from "react";

const DevelopmentPopup = () => {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
                <h2 className="text-xl font-bold mb-3">
                    🚧 Website in Progress
                </h2>

                <p className="text-gray-600 mb-4">
                    We're actively building and improving this platform. Some
                    sections may be incomplete or undergoing updates. Thank you
                    for your patience and support.
                </p>

                <button
                    onClick={() => setShow(false)}
                    className="bg-primary text-white px-4 py-2 rounded-lg"
                >
                    Continue to Website
                </button>
            </div>
        </div>
    );
};

export default DevelopmentPopup;
