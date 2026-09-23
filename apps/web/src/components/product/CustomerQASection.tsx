'use client';

import { useState } from 'react';
import { Search, ThumbsUp, MessageCircle, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from '@/components/ui/Toast';

interface QAItem {
  id: string;
  question: string;
  answer: string;
  answeredBy: string;
  votes: number;
  date: string;
}

const DEFAULT_QA: Record<string, QAItem[]> = {
  default: [
    {
      id: 'qa-1',
      question: 'Is this eligible for 2-Hour Express Delivery in Vadodara?',
      answer: 'Yes! All items marked with "Fulfilled by NexMart" are eligible for express same-day / 2-hour delivery across Vadodara pincodes (390001 - 390025).',
      answeredBy: 'NexMart Logistics Team',
      votes: 48,
      date: '2 days ago',
    },
    {
      id: 'qa-2',
      question: 'Does this come with original manufacturer warranty and GST invoice?',
      answer: 'Yes, 100% authentic product directly sourced from brand distributors. An official GST tax invoice and warranty card are enclosed in the package.',
      answeredBy: 'Authorized Brand Partner',
      votes: 32,
      date: '1 week ago',
    },
    {
      id: 'qa-3',
      question: 'What is the return policy if the size or finish does not fit?',
      answer: 'We provide a 7-day hassle-free doorstep return & replacement with zero pickup charges. An instant refund is initiated upon pickup verification.',
      answeredBy: 'NexMart Support Staff',
      votes: 27,
      date: '2 weeks ago',
    },
    {
      id: 'qa-4',
      question: 'Can I pay via Cash on Delivery (COD)?',
      answer: 'Yes, Cash on Delivery (COD) as well as UPI (Google Pay / PhonePe / Paytm) on delivery are fully supported.',
      answeredBy: 'NexMart Support',
      votes: 19,
      date: '3 weeks ago',
    },
  ],
};

export function CustomerQASection({ productName }: { productName: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [qaList, setQaList] = useState<QAItem[]>(DEFAULT_QA.default);
  const [newQuestion, setNewQuestion] = useState('');
  const [showAskModal, setShowAskModal] = useState(false);
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set());

  const filteredQA = qaList.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVote = (id: string) => {
    if (upvotedIds.has(id)) return;
    setQaList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
    setUpvotedIds((prev) => new Set(prev).add(id));
    toast({
      type: 'success',
      title: 'Vote Recorded',
      message: 'Thank you for your feedback!',
    });
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const newItem: QAItem = {
      id: `qa-${Date.now()}`,
      question: newQuestion.trim(),
      answer: 'Thank you for your question! NexMart specialists and the community usually answer within 2 hours.',
      answeredBy: 'Community Moderator',
      votes: 1,
      date: 'Just now',
    };

    setQaList([newItem, ...qaList]);
    setNewQuestion('');
    setShowAskModal(false);
    toast({
      type: 'success',
      title: 'Question Submitted',
      message: 'Your question will appear here and notify community sellers.',
    });
  };

  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-xl font-bold text-neutral-900 md:text-2xl flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary-600" />
            <span>Customer Questions &amp; Answers</span>
          </h2>
          <p className="mt-1 text-xs text-neutral-500">
            Have questions about {productName}? Find verified answers below.
          </p>
        </div>

        <Button
          onClick={() => setShowAskModal(true)}
          className="font-bold shadow-sm"
          size="sm"
        >
          Ask a Question
        </Button>
      </div>

      {/* Search Q&A Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Have a question? Search for answers (e.g. delivery, warranty, size)..."
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pl-10 pr-4 text-xs sm:text-sm font-medium focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {/* Ask Question Form Modal / Inline */}
      {showAskModal && (
        <form onSubmit={handleAskQuestion} className="mb-6 rounded-2xl border border-primary-200 bg-primary-50/50 p-4 animate-fade-in">
          <p className="text-xs font-bold text-primary-900 mb-2">
            Ask the NexMart seller &amp; verified customer community:
          </p>
          <textarea
            required
            rows={3}
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question about product specs, sizing, materials, or shipping..."
            className="w-full rounded-xl border border-neutral-300 bg-white p-3 text-xs sm:text-sm focus:border-primary-500 focus:outline-none"
          />
          <div className="mt-3 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setShowAskModal(false)}
            >
              Cancel
            </Button>
            <Button type="submit" size="sm" className="font-bold">
              Post Question
            </Button>
          </div>
        </form>
      )}

      {/* Q&A List */}
      <div className="space-y-4 divide-y divide-neutral-100">
        {filteredQA.map((item) => {
          const hasVoted = upvotedIds.has(item.id);
          return (
            <div key={item.id} className="pt-4 first:pt-0">
              {/* Question */}
              <div className="flex items-start gap-3">
                <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-xs font-black text-neutral-700">
                  Q
                </span>
                <p className="font-display text-sm font-bold text-neutral-900">
                  {item.question}
                </p>
              </div>

              {/* Answer */}
              <div className="mt-2.5 flex items-start gap-3 pl-0 sm:pl-7">
                <span className="rounded bg-primary-100 px-2 py-0.5 font-mono text-xs font-black text-primary-700">
                  A
                </span>
                <div className="flex-1 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  <p>{item.answer}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1 font-semibold text-neutral-600">
                      <CheckCircle2 className="h-3 w-3 text-success-600" /> By {item.answeredBy}
                    </span>
                    <span>•</span>
                    <span>{item.date}</span>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={() => handleVote(item.id)}
                      disabled={hasVoted}
                      className={`flex items-center gap-1 font-bold transition-colors ${
                        hasVoted
                          ? 'text-primary-600'
                          : 'text-neutral-500 hover:text-primary-600'
                      }`}
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span>Helpful ({item.votes})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
