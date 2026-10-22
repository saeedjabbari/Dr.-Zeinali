import {createRoot} from 'react-dom/client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}

class RootErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('RootErrorBoundary caught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8F9FA] text-[#0B132B] flex items-center justify-center p-6 text-center" dir="rtl">
          <div className="max-w-md p-8 bg-white rounded-3xl shadow-xl border border-slate-200">
            <h2 className="text-xl font-bold mb-3">بارگذاری صفحه با موفقیت انجام نشد</h2>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              لطفاً دکمه تلاش مجدد را بزنید تا برنامه مجدداً بارگذاری شود.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#0B132B] text-white text-xs font-bold rounded-xl"
            >
              تلاش مجدد
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
}
