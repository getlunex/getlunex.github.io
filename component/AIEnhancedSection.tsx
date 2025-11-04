
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateQuickIdea, generateDeepAnalysis } from '../services/geminiService';

type AnalysisType = 'quick' | 'deep';

const AIEnhancedSection: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [analysisType, setAnalysisType] = useState<AnalysisType>('quick');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim()) {
            setError('Please describe your business challenge.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult('');

        try {
            let response;
            if (analysisType === 'quick') {
                response = await generateQuickIdea(userInput);
            } else {
                response = await generateDeepAnalysis(userInput);
            }
            setResult(response);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ai-strategy" className="py-20 md:py-32 bg-black/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">AI-Powered Strategy Generator</h2>
                    <p className="text-lg text-brand-silver mt-2">Let our AI analyze your challenge and suggest a path forward.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <textarea
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Describe your business challenge, e.g., 'We want to reduce customer churn' or 'How can we automate our inventory management?'"
                                className="w-full h-40 bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex justify-center items-center gap-4 mb-6">
                            <button
                                type="button"
                                onClick={() => setAnalysisType('quick')}
                                disabled={isLoading}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${analysisType === 'quick' ? 'bg-brand-blue text-white' : 'bg-gray-700 text-brand-silver hover:bg-gray-600'}`}
                            >
                                Quick Idea (Flash)
                            </button>
                            <button
                                type="button"
                                onClick={() => setAnalysisType('deep')}
                                disabled={isLoading}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${analysisType === 'deep' ? 'bg-brand-blue text-white' : 'bg-gray-700 text-brand-silver hover:bg-gray-600'}`}
                            >
                                Deep Analysis (Pro w/ Thinking)
                            </button>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Generating...' : 'Generate Strategy'}
                            </button>
                        </div>
                    </form>

                    <AnimatePresence>
                        {(isLoading || result || error) && (
                             <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-8"
                            >
                                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                                    {isLoading && (
                                        <div className="flex flex-col items-center justify-center text-brand-silver">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <p className="mt-2">{analysisType === 'deep' ? 'Performing deep analysis... this may take a moment.' : 'Generating quick idea...'}</p>
                                        </div>
                                    )}
                                    {error && <p className="text-red-400">{error}</p>}
                                    {result && (
                                        <div className="prose prose-invert max-w-none text-brand-silver whitespace-pre-wrap">
                                            <h3 className="text-white text-xl font-bold mb-4">Generated Strategy:</h3>
                                            <p>{result}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AIEnhancedSection;
